import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
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
  Menu, // মোবাইল মেনুর জন্য
  X, // মেনু বন্ধ করার জন্য
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // মোবাইল সাইডবার স্টেট

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
    navigate("/login");
  };

  // সাইডবার কন্টেন্ট (একই কোড দুই জায়গায় ব্যবহার হবে)
  const SidebarContent = () => (
    <>
      <div className="px-8 flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#006951] rounded-xl flex items-center justify-center text-white">
            <div className="w-5 h-5 border-[2px] border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900 italic">
            Donezo
          </span>
        </div>
        {/* মোবাইল ক্লোজ বাটন */}
        <button
          className="lg:hidden text-gray-500"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={28} />
        </button>
      </div>

      <div className="flex-grow px-3 space-y-10 overflow-y-auto">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-6 mb-6">
            Menu
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <NavLink
                  to={item.path}
                  onClick={(e) => {
                    if (!item.dynamic) e.preventDefault();
                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                  }}
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

        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-6 mb-6">
            General
          </p>
          <ul className="space-y-1">
            {generalItems.map((item) => (
              <li key={item.name}>
                <button className="flex items-center gap-4 px-6 py-4 text-[#94a3b8] font-bold hover:text-gray-600 w-full transition-colors text-left">
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
                className="flex items-center gap-4 px-6 py-4 text-[#94a3b8] font-bold hover:text-red-500 w-full transition-all group text-left"
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

      <div className="p-6 mt-auto">
        <div className="bg-[#02140F] rounded-[2.5rem] p-7 relative overflow-hidden shadow-xl shadow-emerald-950/20">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#006951] rounded-full blur-[50px] opacity-40"></div>
          <div className="relative z-10 text-white">
            <div className="bg-white/10 w-9 h-9 flex items-center justify-center rounded-xl mb-5 border border-white/5">
              <ArrowUpRight size={18} />
            </div>
            <h3 className="font-black text-[18px] leading-tight mb-1 tracking-tight">
              Download our <br /> Mobile App
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
    </>
  );

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-2 md:p-4 lg:p-6 font-sans">
      <div className="max-w-[1600px] mx-auto bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-sm flex flex-col lg:grid lg:grid-cols-15 overflow-hidden min-h-[95vh]">
        {/* --- Desktop Sidebar --- */}
        <aside className="lg:col-span-3 hidden lg:flex flex-col bg-base-200 border-r border-gray-100 py-10 relative m-3 rounded-[2rem]">
          <SidebarContent />
        </aside>

        {/* --- Mobile Sidebar (Drawer) --- */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <aside
            className={`absolute left-0 top-0 bottom-0 w-[280px] bg-[#F0F2F5] transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} py-10 flex flex-col`}
          >
            <SidebarContent />
          </aside>
        </div>

        {/* --- Main Content Area --- */}
        <div className="lg:col-span-12 flex flex-col bg-white overflow-hidden">
          {/* Header */}
          <header className="h-20 lg:h-24 flex items-center justify-between px-4 lg:px-10 bg-base-200 border-b border-gray-100 mt-2 lg:my-3 rounded-[1.5rem] lg:rounded-[2rem] mx-2 lg:mr-3 lg:ml-0">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 mr-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="flex-grow max-w-xl">
              <div className="flex items-center bg-white rounded-full px-4 lg:px-6 py-2.5 lg:py-3.5 border border-gray-100 shadow-sm">
                <Search size={18} className="text-gray-300 mr-2 lg:mr-3" />
                <input
                  type="text"
                  placeholder="Search task"
                  className="bg-transparent border-none outline-none text-[14px] lg:text-[15px] w-full text-gray-600 placeholder:text-gray-300 font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-8 ml-4">
              <div className="hidden sm:flex items-center gap-3 lg:gap-4">
                <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full text-gray-300 border border-gray-100">
                  <Mail size={18} />
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full text-gray-400 border border-gray-100 relative">
                  <Bell size={18} />
                  <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#006951] rounded-full border-2 border-white"></span>
                </button>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 pl-4 lg:pl-8 border-l border-gray-200">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-white shadow-md lg:shadow-lg">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left hidden md:block leading-tight">
                  <p className="text-[14px] lg:text-[15px] font-black text-gray-900 tracking-tight">
                    Totok Michael
                  </p>
                  <p className="text-[10px] lg:text-[12px] text-gray-400 font-bold opacity-80 truncate max-w-[100px] lg:max-w-none">
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Body */}
          <main className="overflow-y-auto bg-base-200 flex-grow m-2 lg:my-3 lg:mr-3 lg:ml-0 rounded-[1.5rem] lg:rounded-[2rem] min-h-[80vh]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
