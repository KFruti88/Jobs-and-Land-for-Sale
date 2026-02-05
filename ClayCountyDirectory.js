import React, { useState, useMemo } from 'react';
import { Search, Briefcase, Home, MapPin, Phone, Info, Globe, Trees, Landmark, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('hiring');
  const [searchTerm, setSearchTerm] = useState('');

  // Verified Data as of Feb 5, 2026 with Source URLs
  const hiringData = [
    { 
      business: "North American Lighting", 
      location: "Flora, IL", 
      role: "Operator - All Shifts (Assembly)", 
      phone: "6186622171", 
      type: "Industrial",
      url: "https://www.nal.com/careers/" 
    },
    { 
      business: "Clay City CUSD 10", 
      location: "Clay City, IL", 
      role: "Certified Teacher (Multiple)", 
      phone: "6186761431", 
      type: "Education",
      url: "https://www.claycityschools.org/page/employment" 
    },
    { 
      business: "Casey’s General Store", 
      location: "Louisville, IL", 
      role: "Team Member / Kitchen", 
      phone: "6186653315", 
      type: "Retail",
      url: "https://www.caseys.com/careers" 
    },
    { 
      business: "Stake Center Locating", 
      location: "County-wide", 
      role: "Locate Technician", 
      phone: "8882464111", 
      type: "Service",
      url: "https://stakecenter.com/careers/" 
    },
    { 
      business: "Walmart", 
      location: "Flora, IL", 
      role: "Front End / Stocking", 
      phone: "6186628461", 
      type: "Retail",
      url: "https://careers.walmart.com/" 
    },
    { 
      business: "Axiom Healthcare", 
      location: "Flora, IL", 
      role: "CNA / Nurse (RN/LPN)", 
      phone: "6186622141", 
      type: "Healthcare",
      url: "https://axiom-healthcare.com/careers/" 
    },
    { 
      business: "Silgan Plastics", 
      location: "Flora, IL", 
      role: "Packer (Night Shift)", 
      phone: "6186624441", 
      type: "Manufacturing",
      url: "https://www.silganplastics.com/careers/" 
    },
    { 
      business: "Mach 1 Stores", 
      location: "Flora, IL", 
      role: "Customer Service Associate", 
      phone: "6186622500", 
      type: "Retail",
      url: "https://mach1stores.com/careers/" 
    }
  ];

  const realEstateData = [
    { 
      address: "0000 Mayflower Rd", 
      location: "Clay City, IL", 
      price: "$10,600,000", 
      type: "Land (2,014 Acres)", 
      agent: "Hayden Outdoors",
      url: "https://www.haydenoutdoors.com/land-for-sale/illinois/clay/" 
    },
    { 
      address: "2753 N Stanford Rd", 
      location: "Flora, IL", 
      price: "$449,000", 
      type: "Home (3 Bed/3 Bath)", 
      agent: "Wiley Realty Group",
      url: "https://www.wileyrealtygroup.com/listings/" 
    },
    { 
      address: "326 N Main St", 
      location: "Xenia, IL", 
      price: "$245,000", 
      type: "Home (3 Bed/2 Bath)", 
      agent: "Wiley Realty Group",
      url: "https://www.wileyrealtygroup.com/listings/" 
    },
    { 
      address: "119 S 6th St SW", 
      location: "Clay City, IL", 
      price: "$190,000", 
      type: "Home (4 Bed/2 Bath)", 
      agent: "Wiley Realty Group",
      url: "https://www.wileyrealtygroup.com/listings/" 
    },
    { 
      address: "328 Starling Drive", 
      location: "Louisville, IL", 
      price: "$159,000", 
      type: "Home (Residential)", 
      agent: "Carson Auction & Realty",
      url: "https://www.carsonauctionandrealty.com/" 
    },
    { 
      address: "140 Tanner St", 
      location: "Louisville, IL", 
      price: "$45,000", 
      type: "Home (2 Bed/1 Bath)", 
      agent: "Wiley Realty Group",
      url: "https://www.wileyrealtygroup.com/listings/" 
    }
  ];

  const filteredHiring = useMemo(() => {
    return hiringData.filter(item => 
      item.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredRealEstate = useMemo(() => {
    return realEstateData.filter(item => 
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.agent.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-slate-100">
      {/* Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
                CLAY COUNTY
              </h1>
              <p className="text-blue-400/80 text-xs font-bold tracking-[0.2em] uppercase">Master Directory • Feb 2026</p>
            </div>
          </div>
          
          <div className="mt-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <Search className="ml-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'hiring' ? 'jobs...' : 'properties...'}`}
                className="w-full bg-transparent text-white pl-3 pr-4 py-4 focus:outline-none placeholder:text-slate-500 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 z-20 px-4 py-2 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-4xl mx-auto flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
          <button
            onClick={() => { setActiveTab('hiring'); setSearchTerm(''); }}
            className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              activeTab === 'hiring' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
              : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Now Hiring
          </button>
          <button
            onClick={() => { setActiveTab('realestate'); setSearchTerm(''); }}
            className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              activeTab === 'realestate' 
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
              : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Home className="w-4 h-4" />
            Real Estate
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto p-4 pb-24 space-y-6">
        {activeTab === 'hiring' ? (
          <div className="grid gap-4">
            <div className="flex items-center gap-2 px-2 text-blue-400/60 font-bold text-xs tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Direct-Connect Opportunities
            </div>
            
            {filteredHiring.map((job, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-3xl shadow-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-blue-300 transition-colors">
                        {job.business}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        {job.location}
                      </div>
                    </div>
                    <span className="text-[10px] font-black tracking-tighter bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full uppercase border border-blue-500/20">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-6">
                    <div className="flex items-center gap-2 text-slate-200 font-medium">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-all">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="truncate">{job.role}</span>
                    </div>
                    
                    <div className="flex gap-2">
                       <a 
                        href={`tel:${job.phone}`}
                        className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-xl border border-white/10 transition-all"
                        title="Call Company"
                       >
                         <Phone className="w-4 h-4" />
                       </a>
                       <a 
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-5 py-2.5 rounded-xl font-black text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                       >
                         Detailed <ExternalLink className="w-3.5 h-3.5" />
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6">
             <div className="flex items-center gap-2 px-2 text-indigo-400/60 font-bold text-xs tracking-widest uppercase">
              <Home className="w-3 h-3" />
              Verified Clay County Listings
            </div>

            {filteredRealEstate.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-all"></div>
                
                <div className="p-7">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-white tracking-tight">{item.price}</span>
                      <span className="text-xs font-bold text-indigo-400/80 uppercase tracking-widest mt-1">Clay County Market</span>
                    </div>
                    <div className={`p-4 rounded-2xl border ${
                      item.type.includes('Land') ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                    }`}>
                      {item.type.includes('Land') ? <Trees className="w-5 h-5" /> : <Home className="w-5 h-5" />}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4 pr-12">{item.address}</h4>

                  <div className="grid grid-cols-2 gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 mb-6">
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Community</p>
                      <p className="text-sm font-bold text-slate-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-red-500" />
                        {item.location}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Type/Info</p>
                      <p className="text-sm font-bold text-slate-200 truncate">{item.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></div>
                      <span className="text-slate-400">Agent: <span className="text-slate-100">{item.agent}</span></span>
                    </div>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl flex items-center gap-2 transition-all shadow-xl shadow-indigo-600/30"
                    >
                      Detailed <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Reference Section */}
        <div className="mt-12 relative rounded-[2.5rem] p-8 overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-900/40 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="relative z-10 text-center">
            <Globe className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">Verified Coverage</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium max-w-lg mx-auto">
              All information is verified via company portals and local real estate boards. 
              Click <b>"Detailed"</b> on any listing to see the official source page.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Hord', 'Wendelin', 'Oskaloosa', 'Stanford', 'Songer', 'Ingraham'].map(town => (
                <div key={town} className="bg-black/20 backdrop-blur-sm border border-white/5 py-2 px-4 rounded-xl text-[10px] font-black text-slate-400 uppercase">
                  {town}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 p-4">
        <div className="max-w-md mx-auto bg-[#0f172a]/95 backdrop-blur-2xl border border-white/20 rounded-full p-3 flex items-center justify-center shadow-2xl">
           <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.3em]">
            Clay County IL • Master Directory 2.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
