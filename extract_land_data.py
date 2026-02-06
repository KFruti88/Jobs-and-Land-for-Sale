import requests
from bs4 import BeautifulSoup
import sys
import json

def extract_from_url(url):
    """
    Fetches the HTML content of the URL and parses it.
    Uses JSON-LD (Schema.org) if available, which is common on real estate sites like Zillow.
    """
    print(f"Fetching data from: {url}")
    
    # Enhanced headers to mimic a real browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Referer': 'https://www.google.com/'
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        data = {}

        # Strategy: Look for JSON-LD (Structured Data)
        # This is very common on Zillow, Realtor.com, etc.
        script_tags = soup.find_all('script', type='application/ld+json')
        
        found_json = False
        for script in script_tags:
            try:
                if not script.string: continue
                json_content = json.loads(script.string)
                
                # Zillow sometimes wraps data in a list
                if isinstance(json_content, list):
                    # Look for the entity that represents the house/product
                    for item in json_content:
                        if item.get('@type') in ['SingleFamilyResidence', 'Apartment', 'RealEstateListing', 'Product', 'Place']:
                            json_content = item
                            break
                    else:
                        # If no specific type found, just take the first one
                        if len(json_content) > 0: json_content = json_content[0]

                # Extract data if it looks like a property listing
                if isinstance(json_content, dict):
                    found_json = True
                    
                    # Title/Name
                    data["Page Title"] = json_content.get('name', soup.title.string.strip() if soup.title else "No Title")
                    
                    # Description
                    data["Description"] = json_content.get('description', 'No description found in JSON.')

                    # Address
                    address = json_content.get('address')
                    if isinstance(address, dict):
                        street = address.get('streetAddress', '')
                        city = address.get('addressLocality', '')
                        state = address.get('addressRegion', '')
                        zip_code = address.get('postalCode', '')
                        data["Location"] = f"{street}, {city}, {state} {zip_code}".strip(", ")
                    elif address:
                        data["Location"] = str(address)
                    else:
                        data["Location"] = "Address not found in JSON"

                    # Price (often nested in 'offers')
                    offers = json_content.get('offers')
                    if isinstance(offers, dict):
                        data["Price"] = str(offers.get('price', 'N/A'))
                    elif isinstance(offers, list) and offers:
                        data["Price"] = str(offers[0].get('price', 'N/A'))
                    else:
                        data["Price"] = "Price not found in JSON"
                    
                    break # Stop if we found the main listing
            except json.JSONDecodeError:
                continue
        
        # Fallback if JSON-LD failed or wasn't found
        if not found_json:
            print("Warning: JSON-LD data not found. Falling back to basic HTML parsing.")
            data = {
                "Page Title": soup.title.string.strip() if soup.title else "No Title",
                "Price": "Pending Selector (HTML fallback)",
                "Location": "Pending Selector (HTML fallback)",
                "Description": "Pending Selector (HTML fallback)",
            }
        
        data["Source URL"] = url
        return data

    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 403:
            print("Error: Access Forbidden (403). The site likely blocked the bot.")
        else:
            print(f"HTTP Error: {e}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide at least one URL as an argument.")
        print("Usage: python extract_land_data.py <URL1> [URL2 ...]")
    else:
        urls = sys.argv[1:]
        for i, target_url in enumerate(urls):
            print(f"\n--- Processing URL {i+1}/{len(urls)} ---")
            result = extract_from_url(target_url)
            if result:
                print("Extraction Result:")
                for key, value in result.items():
                    print(f"{key}: {value}")
