import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router"; // useNavigate যুক্ত করা হয়েছে
import {
  LayoutGrid,
  ListChecks,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  ArrowUpRight,
  Search,
  Bell,
  Mail,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const {user}=useAuth()

  console.log(user)


  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutGrid size={22} />,
      path: "/dashboard",
      dynamic: true,
    },
    {
      name: "Tasks",
      icon: <ListChecks size={22} />,
      path: "#",
      badge: "12+",
      dynamic: false,
    },
    {
      name: "Calendar",
      icon: <Calendar size={22} />,
      path: "#",
      dynamic: false,
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={22} />,
      path: "#",
      dynamic: false,
    },
    { name: "Team", icon: <Users size={22} />, path: "#", dynamic: false },
  ];


  const generalItems = [
    { name: "Settings", icon: <Settings size={22} />, path: "#" },
    { name: "Help", icon: <HelpCircle size={22} />, path: "#" },
  ];


  const handleLogout = () => {
    console.log("Logging out...");
   
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-4 lg:p-6 font-sans">
      <div
        className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] shadow-sm flex overflow-hidden min-h-[92vh]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(15, minmax(0, 1fr))",
        }}
      >
   
        <aside className="col-span-3 hidden lg:flex flex-col bg-base-200 border-r border-gray-100 py-10 relative m-3 rounded-[2rem]">
          <div className="px-8 flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-[#006951] rounded-xl flex items-center justify-center text-white">
              <div className="w-5 h-5 border-[2px] border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900 italic">
              Donezo
            </span>
          </div>

          <div className="flex-grow px-3 space-y-10 overflow-y-auto">
            {/* Menu Section */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-6 mb-6">
                Menu
              </p>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.name} className="relative">
                    <NavLink
                      to={item.path}
                      onClick={(e) => !item.dynamic && e.preventDefault()}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-6 py-4 transition-all duration-300 font-bold ${
                          isActive && item.dynamic
                            ? "text-[#006951]"
                            : "text-[#94a3b8] hover:text-gray-600"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && item.dynamic && (
                            <div className="absolute left-0 w-1.5 h-8 bg-[#006951] rounded-r-full" />
                          )}
                          <div className="flex items-center gap-4">
                            <span
                              className={
                                isActive && item.dynamic
                                  ? "text-[#006951]"
                                  : "text-[#94a3b8]"
                              }
                            >
                              {item.icon}
                            </span>
                            <span className="text-[17px] tracking-tight">
                              {item.name}
                            </span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#004d3c] text-white font-black">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Section */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-6 mb-6">
                General
              </p>
              <ul className="space-y-1">
                {generalItems.map((item) => (
                  <li key={item.name}>
                    <button className="flex items-center gap-4 px-6 py-4 text-[#94a3b8] font-bold hover:text-gray-600 w-full transition-colors">
                      {item.icon}
                      <span className="text-[17px] tracking-tight">
                        {item.name}
                      </span>
                    </button>
                  </li>
                ))}

            
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-6 py-4 text-[#94a3b8] font-bold hover:text-red-500 w-full transition-all group"
                  >
                    <LogOut
                      size={22}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-[17px] tracking-tight">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile App Banner */}
          <div className="p-6 mt-auto">
            <div className="bg-[#02140F] rounded-[2.5rem] p-7 relative overflow-hidden shadow-xl shadow-emerald-950/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#006951] rounded-full blur-[50px] opacity-40"></div>
              <div className="relative z-10 text-white">
                <div className="bg-white/10 w-9 h-9 flex items-center justify-center rounded-xl mb-5 border border-white/5">
                  <ArrowUpRight size={18} />
                </div>
                <h3 className="font-black text-[18px] leading-tight mb-1 tracking-tight">
                  Download our
                  <br />
                  Mobile App
                </h3>
                <p className="text-gray-500 text-[11px] mb-6 italic font-medium">
                  Get easy in another way
                </p>
                <button className="w-full bg-[#006951] py-3.5 rounded-2xl text-[14px] font-bold hover:bg-[#005a46] transition-all">
                  Download
                </button>
              </div>
            </div>
          </div>
        </aside>


        <div className="col-span-12 flex flex-col bg-white overflow-hidden">
          <header className="h-24 flex items-center justify-between px-10 bg-base-200 border-b border-gray-100 my-3 rounded-[2rem] mr-3">
            <div className="flex-grow max-w-xl">
              <div className="flex items-center bg-white rounded-full px-6 py-3.5 border border-gray-100 shadow-sm">
                <Search size={20} className="text-gray-300 mr-3" />
                <input
                  type="text"
                  placeholder="Search task"
                  className="bg-transparent border-none outline-none text-[15px] w-full text-gray-600 placeholder:text-gray-300 font-medium"
                />
                <div className="hidden sm:flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg ml-2 shadow-inner text-gray-400 font-bold">
                  <span className="text-[11px]">⌘</span>
                  <span className="text-[11px]">F</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 ml-6">
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-gray-300 border border-gray-100">
                  <Mail size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-gray-400 border border-gray-100 relative">
                  <Bell size={20} />
                  <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-[#006951] rounded-full border-2 border-white"></span>
                </button>
              </div>

              <div className="flex items-center gap-4 pl-8 border-l border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left hidden xl:block leading-tight">
                  <p className="text-[15px] font-black text-gray-900 tracking-tight mb-0.5">
                    Totok Michael
                  </p>
                  <p className="text-[12px] text-gray-400 font-bold opacity-80">
                    {user?.email || "No email available"}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main className=" overflow-y-auto  bg-base-200 flex-grow mr-3 mb-3 rounded-[2rem] min-h-screen ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
