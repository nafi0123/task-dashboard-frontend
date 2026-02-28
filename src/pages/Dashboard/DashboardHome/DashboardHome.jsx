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

  if (isLoading) return<DashboardSkeleton></DashboardSkeleton>;

  return (
    <div className="font-sans text-[#1a1a1a] min-h-screen px-10 py-6">
      
      {/* --- Header Section --- */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[36px] font-bold tracking-tight mb-1">Dashboard</h1>
          <p className="text-gray-400 text-[16px] font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#004d3d] text-white px-6 py-3 rounded-full font-bold text-[14px] flex items-center gap-2 hover:opacity-90 transition-all">
            <Plus size={18} strokeWidth={3} /> Add Project
          </button>
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-[14px] hover:bg-gray-50 transition-all">
            Import Data
          </button>
        </div>
      </div>

      {/* --- Dashboard Content Grid --- */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Row 1: Status Cards */}
        <div className="col-span-3 bg-[#006951] p-7 rounded-[2.5rem] text-white shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[15px] font-semibold opacity-90">Total Projects</span>
            <div className="bg-white/20 p-1.5 rounded-full"><ArrowUpRight size={18} /></div>
          </div>
          <h2 className="text-[56px] font-bold leading-none mb-4 tracking-tighter">24</h2>
          <div className="flex items-center gap-2 text-[11px] font-bold bg-white/10 w-fit px-2 py-1.5 rounded-lg border border-white/5">
             <span className="bg-[#58a082] px-1 rounded">5+</span> Increased from last month
          </div>
        </div>

        {[
          { title: "Ended Projects", value: "10", growth: "6+" },
          { title: "Running Projects", value: "12", growth: "2+" },
          { title: "Pending Project", value: "2", status: "On Discuss" }
        ].map((item, idx) => (
          <div key={idx} className="col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[15px] font-bold text-gray-800 tracking-tight">{item.title}</span>
              <div className="border border-gray-100 p-1.5 rounded-full text-gray-400"><ArrowUpRight size={18} /></div>
            </div>
            <h2 className="text-[56px] font-bold leading-none mb-4 tracking-tighter">{item.value}</h2>
            <div className="text-[11px] font-bold text-gray-400">
               {item.status ? (
                 <span className="text-emerald-600 font-extrabold">{item.status}</span>
               ) : (
                 <span className="flex items-center gap-2">
                   <span className="border border-gray-200 px-1 rounded text-[10px] text-gray-500 font-bold">{item.growth}</span> 
                   Increased from last month
                 </span>
               )}
            </div>
          </div>
        ))}

        {/* --- Middle Columns (8 cols) --- */}
        <div className="col-span-8 grid grid-cols-8 gap-6">
            
            {/* Project Analytics */}
            <div className="col-span-5 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-[18px] tracking-tight">Project Analytics</h3>
                    <div className="text-[11px] bg-[#e6f6f2] text-[#006951] px-2.5 py-1 rounded-md font-black border border-[#d1ede6]">74%</div>
                </div>
                <div className="grid grid-cols-7 items-end gap-3 px-1 h-32 mb-2">
                    {[
                      { h: "73px", type: "striped" },
                      { h: "93px", type: "solid", bg: "bg-[#013326]" },
                      { h: "112px", type: "solid", bg: "bg-[#76c2af]", badge: true },
                      { h: "86px", type: "solid", bg: "bg-[#006951]" },
                      { h: "106px", type: "striped" },
                      { h: "70px", type: "striped" },
                      { h: "82px", type: "striped" },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 flex-1">
                        <div 
                          className={`w-full max-w-10 rounded-full relative ${bar.bg || ""}`} 
                          style={{ 
                            height: bar.h, 
                            background: bar.type === "striped" ? "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 6px)" : "" 
                          }}
                        >
                          {bar.badge && (
                            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-md px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-500 whitespace-nowrap z-20">74%</div>
                          )}
                        </div>
                        <span className="text-[12px] font-bold text-gray-300 uppercase tracking-widest"> {['S','M','T','W','T','F','S'][i]} </span>
                      </div>
                    ))}
                </div>
            </div>

            {/* Reminders */}
            <div className="col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-[18px] mb-6 tracking-tight">Reminders</h3>
                    <p className="font-bold text-[20px] leading-tight mb-2 tracking-tight text-[#1a1a1a]">Meeting with Arc Company</p>
                    <p className="text-gray-400 text-[14px] font-bold opacity-80">Time : 02.00 pm - 04.00 pm</p>
                </div>
                <button className="w-full bg-[#004d3d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-[15px] hover:bg-[#003d2e] transition-all">
                    <Video size={20} fill="white" /> Start Meeting
                </button>
            </div>

            {/* Team Collaboration */}
            <div className="col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-[18px] tracking-tight">Team Collaboration</h3>
                    <button className="text-[11px] font-bold border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50">+ Add Member</button>
                </div>
                <div className="space-y-4">
                    {db?.users?.slice(0, 4).map((u, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.name}`} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100" alt="" />
                                <div className="leading-tight">
                                    <p className="text-[14px] font-bold tracking-tight">{u.name}</p>
                                    <p className="text-[11px] text-gray-400 font-bold">Working on <span className="text-gray-700">Github...</span></p>
                                </div>
                            </div>
                            <span className="text-[9px] font-black px-2 py-1 rounded uppercase bg-emerald-50 text-emerald-600 border border-emerald-100">Completed</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Progress - Top-Oriented Arc */}
            <div className="col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-[18px] self-start mb-6 tracking-tight">Project Progress</h3>
                
                <div className="relative w-64 h-32 flex justify-center items-end overflow-hidden">
                    {/* Background Gray Base */}
                    <div className="absolute w-64 h-64 border-[32px] border-[#f0f4f3] rounded-full bottom-[-128px]"></div>
                    
                    {/* Progress Green Arc */}
                    <div 
                        className="absolute w-64 h-64 border-[32px] border-[#006951] rounded-full bottom-[-128px]"
                        style={{ 
                            clipPath: 'polygon(0 0, 85% 0, 85% 50%, 0 50%)',
                            transform: 'rotate(-10deg)' 
                        }}
                    ></div>

                    {/* Striped Pending End */}
                    <div 
                        className="absolute w-64 h-64 border-[32px] rounded-full bottom-[-128px]"
                        style={{ 
                            clipPath: 'polygon(75% 0, 100% 0, 100% 50%, 75% 50%)',
                            backgroundImage: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, transparent 2px, transparent 8px)',
                            maskImage: 'radial-gradient(circle, transparent 96px, black 96px)',
                            WebkitMaskImage: 'radial-gradient(circle, transparent 96px, black 96px)'
                        }}
                    ></div>

                    {/* Center Content */}
                    <div className="absolute bottom-1 w-full text-center">
                        <h2 className="text-[48px] font-black text-gray-900 leading-none tracking-tighter">41%</h2>
                        <p className="text-[11px] font-bold text-[#006951] uppercase tracking-widest mt-1">Project Ended</p>
                    </div>
                </div>

                {/* Labels */}
                <div className="flex gap-4 mt-12">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400">
                        <div className="w-2.5 h-2.5 bg-[#006951] rounded-full"></div> COMPLETED
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400">
                        <div className="w-2.5 h-2.5 bg-[#013326] rounded-full"></div> IN PROGRESS
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400">
                        <div className="w-2.5 h-2.5 bg-[#e5e7eb] rounded-full border border-gray-300"></div> PENDING
                    </div>
                </div>
            </div>
        </div>

        {/* --- Right Column (4 cols) --- */}
        <div className="col-span-4 flex flex-col gap-6">
            {/* Project List */}
            <div className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex-grow">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-[18px] tracking-tight">Project</h3>
                    <button className="text-[11px] font-bold border border-gray-200 px-4 py-1.5 rounded-full hover:bg-gray-50">+ New</button>
                </div>
                <div className="space-y-6">
                    {[
                        { name: "Develop API Endpoints", icon: "bg-indigo-500", date: "Nov 26, 2024" },
                        { name: "Onboarding Flow", icon: "bg-emerald-500", date: "Nov 28, 2024" },
                        { name: "Build Dashboard", icon: "bg-amber-400", date: "Nov 30, 2024" },
                        { name: "Optimize Page Load", icon: "bg-orange-500", date: "Dec 5, 2024" },
                        { name: "Cross-Browser Testing", icon: "bg-purple-500", date: "Dec 6, 2024" }
                    ].map((p, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                            <div className={`w-3.5 h-3.5 rounded-full ${p.icon} shadow-sm group-hover:scale-110 transition-all`}></div>
                            <div className="flex-grow">
                                <p className="text-[14px] font-bold leading-none mb-1 group-hover:text-[#006951] transition-colors tracking-tight text-[#1a1a1a]">{p.name}</p>
                                <p className="text-[11px] text-gray-400 font-bold opacity-70">Due date: {p.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Time Tracker */}
            <div className="bg-[#01241b] p-8 rounded-[2.5rem] text-white relative overflow-hidden h-64 flex flex-col justify-between shadow-lg">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 120%, #006951 0%, transparent 70%)' }}></div>
                <h3 className="font-bold text-[17px] relative z-10 tracking-tight">Time Tracker</h3>
                <div className="text-center relative z-10">
                    <h2 className="text-[52px] font-mono font-bold tracking-tighter mb-8 italic">01:24:08</h2>
                    <div className="flex justify-center gap-5">
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-all shadow-md"><Pause size={20} fill="black" /></button>
                        <button className="w-12 h-12 bg-[#eb5757] rounded-full flex items-center justify-center text-white hover:scale-105 transition-all shadow-md"><Square size={18} fill="white" /></button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;