import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Plus, Video, Pause, Square } from "lucide-react";
import DashboardSkeleton from "../DashboardSkeleton/DashboardSkeleton";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: db, isLoading } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("https://task-api-eight-flax.vercel.app/api/dashboard");
      return data;
    },
  });

  if (isLoading) return <DashboardSkeleton />;

  // API Data Extraction
  const { overview, users, products } = db || {};
  const activeRatio = overview?.totalUsers > 0 
    ? Math.round((overview.activeUsers / overview.totalUsers) * 100) 
    : 0;

  return (
    <div className="font-sans text-[#1a1a1a] min-h-screen px-4 md:px-10 py-6 ">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-1">Dashboard</h1>
          <p className="text-gray-400 text-[14px] md:text-[16px] font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-[#004d3d] text-white px-4 md:px-6 py-3 rounded-full font-bold text-[13px] md:text-[14px] flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            <Plus size={18} strokeWidth={3} /> Add Project
          </button>
          <button className="flex-1 md:flex-none bg-white border border-gray-200 px-4 md:px-6 py-3 rounded-full font-bold text-[13px] md:text-[14px] hover:bg-gray-50 transition-all">
            Import Data
          </button>
        </div>
      </div>

      {/* --- Dashboard Content Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        
        {/* Card 1: Total Users */}
        <div className="lg:col-span-3 bg-[#006951] p-7 rounded-[2.5rem] text-white shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[15px] font-semibold opacity-90">Total Users</span>
            <div className="bg-white/20 p-1.5 rounded-full"><ArrowUpRight size={18} /></div>
          </div>
          <h2 className="text-[42px] md:text-[48px] font-bold leading-none mb-4 tracking-tighter">
            {overview?.totalUsers?.toLocaleString()}
          </h2>
          <div className="flex items-center gap-2 text-[11px] font-bold bg-white/10 w-fit px-2 py-1.5 rounded-lg border border-white/5">
              <span className="bg-[#58a082] px-1 rounded">{overview?.growth}%</span> Live API overview
          </div>
        </div>

        {/* Card 2: Active Users */}
        <div className="lg:col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[15px] font-bold text-gray-800 tracking-tight">Active Users</span>
            <div className="border border-gray-100 p-1.5 rounded-full text-gray-400"><ArrowUpRight size={18} /></div>
          </div>
          <h2 className="text-[42px] md:text-[48px] font-bold leading-none mb-4 tracking-tighter">
            {overview?.activeUsers?.toLocaleString()}
          </h2>
          <div className="text-[11px] font-bold text-gray-400">
            <span className="flex items-center gap-2">
              <span className="border border-gray-200 px-1 rounded text-[10px] text-gray-500 font-bold">
                {activeRatio}%
              </span> 
              Active ratio
            </span>
          </div>
        </div>

        {/* Card 3: Revenue */}
        <div className="lg:col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[15px] font-bold text-gray-800 tracking-tight">Revenue</span>
            <div className="border border-gray-100 p-1.5 rounded-full text-gray-400"><ArrowUpRight size={18} /></div>
          </div>
          <h2 className="text-[38px] md:text-[42px] font-bold leading-none mb-4 tracking-tighter truncate">
            ${overview?.revenue?.toLocaleString()}
          </h2>
          <div className="text-[11px] font-bold text-gray-400">
            <span className="flex items-center gap-2">
              <span className="border border-gray-200 px-1 rounded text-[10px] text-gray-500 font-bold">100</span> 
              From API overview
            </span>
          </div>
        </div>

        {/* Card 4: Products */}
        <div className="lg:col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[15px] font-bold text-gray-800 tracking-tight">Products</span>
            <div className="border border-gray-100 p-1.5 rounded-full text-gray-400"><ArrowUpRight size={18} /></div>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-none mb-4 tracking-tighter">
            {products?.length || 0}
          </h2>
          <div className="text-[11px] font-bold text-gray-400">
            <span className="text-emerald-600 font-extrabold">Active Inventory</span>
          </div>
        </div>

        {/* --- Middle Columns (8 cols on Large) --- */}
        <div className="md:col-span-2 lg:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-6">
            
            {/* Project Analytics */}
            <div className="md:col-span-8 lg:col-span-5 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-[18px] tracking-tight">User Analytics</h3>
                    <div className="text-[11px] bg-[#e6f6f2] text-[#006951] px-2.5 py-1 rounded-md font-black border border-[#d1ede6]">{overview?.growth}%</div>
                </div>
                <div className="flex items-end justify-between gap-2 md:gap-3 px-1 h-32 mb-2">
                    {[73, 93, 112, 86, 106, 70, 82].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 flex-1">
                        <div 
                          className={`w-full max-w-8 md:max-w-10 rounded-full relative ${i === 2 ? "bg-[#76c2af]" : (i % 2 === 0 ? "bg-gray-100" : "bg-[#006951]")}`} 
                          style={{ 
                            height: `${height}px`, 
                            background: i % 2 === 0 && i !== 2 ? "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 6px)" : "" 
                          }}
                        >
                          {i === 2 && (
                            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-md px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-500 whitespace-nowrap z-20">74%</div>
                          )}
                        </div>
                        <span className="text-[10px] md:text-[12px] font-bold text-gray-300 uppercase tracking-widest"> {['S','M','T','W','T','F','S'][i]} </span>
                      </div>
                    ))}
                </div>
            </div>

            {/* Reminders */}
            <div className="md:col-span-8 lg:col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between min-h-[250px] lg:min-h-0">
                <div>
                    <h3 className="font-bold text-[18px] mb-6 tracking-tight">Reminders</h3>
                    <p className="font-bold text-[20px] leading-tight mb-2 tracking-tight text-[#1a1a1a]">Meeting with Arc Company</p>
                    <p className="text-gray-400 text-[14px] font-bold opacity-80">Time : 02.00 pm - 04.00 pm</p>
                </div>
                <button className="w-full mt-6 bg-[#004d3d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-[15px] hover:bg-[#003d2e] transition-all">
                    <Video size={20} fill="white" /> Start Meeting
                </button>
            </div>

            {/* Recent Users */}
            <div className="md:col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-[18px] tracking-tight">Recent Users</h3>
                    <button className="text-[11px] font-bold border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50">+ Add</button>
                </div>
                <div className="space-y-4">
                    {users?.slice(0, 4).map((u, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.name}`} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100" alt="" />
                                <div className="leading-tight">
                                    <p className="text-[14px] font-bold tracking-tight">{u.name}</p>
                                    <p className="text-[11px] text-gray-400 font-bold truncate w-24 md:w-auto">{u.status === 'active' ? 'Working now' : 'Away'}</p>
                                </div>
                            </div>
                            <span className={`hidden sm:block text-[9px] font-black px-2 py-1 rounded uppercase border ${u.status === 'active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                              {u.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Progress (Updated as per Image) */}
            <div className="md:col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center overflow-hidden">
                <h3 className="font-bold text-[18px] self-start mb-6 tracking-tight">Project Progress</h3>
                
                <div className="relative w-48 md:w-64 h-24 md:h-32 flex justify-center items-end overflow-hidden">
                    <div className="absolute w-48 h-48 md:w-64 md:h-64 border-[24px] md:border-[32px] border-[#f0f4f3] rounded-full bottom-[-96px] md:bottom-[-128px]"></div>
                    
                    {/* Pending Stripes */}
                    <div 
                        className="absolute w-48 h-48 md:w-64 md:h-64 border-[24px] md:border-[32px] rounded-full bottom-[-96px] md:bottom-[-128px]"
                        style={{ 
                            borderColor: 'transparent',
                            backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 6px)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'destination-out'
                        }}
                    ></div>

                    {/* Dynamic Arc */}
                    <div 
                        className="absolute w-48 h-48 md:w-64 md:h-64 border-[24px] md:border-[32px] border-[#006951] rounded-full bottom-[-96px] md:bottom-[-128px] transition-all duration-1000"
                        style={{ 
                            clipPath: `polygon(0 0, ${activeRatio}% 0, ${activeRatio}% 100%, 0 100%)`,
                            borderTopColor: '#00a37e',
                        }}
                    ></div>

                    <div className="absolute bottom-1 w-full text-center z-10">
                        <h2 className="text-[36px] md:text-[48px] font-bold text-gray-900 leading-none tracking-tighter">
                            {activeRatio}%
                        </h2>
                        <p className="text-[12px] md:text-[14px] font-medium text-gray-400 mt-1">Active Ratio</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-10">
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#00a37e]">
                        <div className="w-3 h-3 bg-[#00a37e] rounded-full"></div> Completed
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#006951]">
                        <div className="w-3 h-3 bg-[#006951] rounded-full"></div> In Progress
                    </div>
                    <div className="flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-gray-400">
                        <div className="w-3 h-3 rounded-full" style={{ background: 'repeating-linear-gradient(45deg, #ccc, #ccc 1px, transparent 1px, transparent 3px)' }}></div> Pending
                    </div>
                </div>
            </div>
        </div>

        {/* --- Right Column (4 cols on Large) --- */}
        <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex-grow">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-[18px] tracking-tight">Top Products</h3>
                    <button className="text-[11px] font-bold border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50">View All</button>
                </div>
                <div className="space-y-6">
                    {products?.map((p, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                            <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-emerald-500'} flex-shrink-0 group-hover:scale-110 transition-all`}></div>
                            <div className="flex-grow min-w-0">
                                <p className="text-[14px] font-bold leading-none mb-1 group-hover:text-[#006951] transition-colors tracking-tight text-[#1a1a1a] truncate">{p.name}</p>
                                <p className="text-[11px] text-gray-400 font-bold opacity-70">${p.price} • {p.sales} Sales</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#01241b] p-8 rounded-[2.5rem] text-white relative overflow-hidden flex flex-col justify-between shadow-lg min-h-[220px]">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 120%, #006951 0%, transparent 70%)' }}></div>
                <h3 className="font-bold text-[17px] relative z-10 tracking-tight">Time Tracker</h3>
                <div className="text-center relative z-10">
                    <h2 className="text-[40px] md:text-[52px] font-mono font-bold tracking-tighter mb-6 italic">01:24:08</h2>
                    <div className="flex justify-center gap-5">
                        <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-all shadow-md"><Pause size={20} fill="black" /></button>
                        <button className="w-10 h-10 md:w-12 md:h-12 bg-[#eb5757] rounded-full flex items-center justify-center text-white hover:scale-105 transition-all shadow-md"><Square size={18} fill="white" /></button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;