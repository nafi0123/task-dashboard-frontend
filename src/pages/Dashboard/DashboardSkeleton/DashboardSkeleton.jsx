import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="font-sans bg-[#fdfdfd] min-h-screen px-4 md:px-10 py-6 animate-pulse">
      
      {/* --- Header Skeleton --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="h-10 w-32 md:w-48 bg-gray-200 rounded-lg mb-2"></div>
          <div className="h-4 w-60 md:w-80 bg-gray-100 rounded-md"></div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="h-12 flex-1 md:w-32 bg-gray-200 rounded-full"></div>
          <div className="h-12 flex-1 md:w-32 bg-gray-100 rounded-full border border-gray-200"></div>
        </div>
      </div>

      {/* --- Grid Content Skeleton --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        
        {/* Row 1: Status Cards (4 cards) */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="col-span-1 md:col-span-1 lg:col-span-3 h-48 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-100 rounded"></div>
              <div className="h-8 w-8 bg-gray-50 rounded-full"></div>
            </div>
            <div className="h-14 w-20 bg-gray-200 rounded-lg"></div>
            <div className="h-6 w-32 bg-gray-50 rounded-md"></div>
          </div>
        ))}

        {/* --- Middle & Right Columns --- */}
        <div className="md:col-span-2 lg:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-6">
          
          {/* Project Analytics Skeleton */}
          <div className="md:col-span-8 lg:col-span-5 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between mb-10">
              <div className="h-6 w-36 bg-gray-200 rounded"></div>
              <div className="h-6 w-12 bg-gray-100 rounded-md"></div>
            </div>
            <div className="flex items-end justify-between gap-2 md:gap-3 h-32 px-1">
              {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                <div
                  key={bar}
                  className="flex-1 flex flex-col items-center gap-3"
                >
                  <div
                    className="w-full max-w-8 md:max-w-10 bg-gray-100 rounded-full"
                    style={{ height: `${Math.floor(Math.random() * 60) + 40}%` }}
                  ></div>
                  <div className="h-3 w-4 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Reminders Skeleton */}
          <div className="md:col-span-8 lg:col-span-3 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between min-h-[250px] lg:min-h-0">
            <div>
              <div className="h-5 w-24 bg-gray-200 rounded mb-6"></div>
              <div className="h-6 w-full bg-gray-100 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-50 rounded"></div>
            </div>
            <div className="h-14 w-full bg-gray-200 rounded-2xl mt-4"></div>
          </div>

          {/* Team Collaboration Skeleton */}
          <div className="md:col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between mb-6">
              <div className="h-5 w-32 bg-gray-200 rounded"></div>
              <div className="h-7 w-20 bg-gray-100 rounded-full"></div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((u) => (
                <div key={u} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-16 md:w-20 bg-gray-200 rounded"></div>
                      <div className="h-2 w-24 md:w-28 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="h-4 w-12 bg-gray-50 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Progress (Arc) Skeleton */}
          <div className="md:col-span-4 bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center">
            <div className="h-5 w-32 bg-gray-200 rounded self-start mb-6"></div>
            <div className="relative w-40 md:w-48 h-20 md:h-24 bg-gray-100 rounded-t-full mt-4">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-14 md:h-16 bg-white rounded-t-full"></div>
            </div>
            <div className="h-10 w-16 bg-gray-200 rounded mt-4"></div>
            <div className="flex gap-3 mt-8">
              <div className="h-3 w-14 bg-gray-100 rounded-full"></div>
              <div className="h-3 w-14 bg-gray-100 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* --- Right Column (4 cols) --- */}
        <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-6">
          {/* Project List Skeleton */}
          <div className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm flex-grow">
            <div className="flex justify-between mb-8">
              <div className="h-6 w-20 bg-gray-200 rounded"></div>
              <div className="h-7 w-16 bg-gray-100 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((p) => (
                <div key={p} className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-gray-100 flex-shrink-0"></div>
                  <div className="flex-grow space-y-2">
                    <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-50 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Tracker Skeleton */}
          <div className="bg-gray-200 p-8 rounded-[2.5rem] h-60 md:h-64 flex flex-col justify-between shadow-sm">
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
            <div className="space-y-6">
              <div className="h-12 md:h-14 w-32 md:w-40 bg-gray-300 rounded-lg mx-auto"></div>
              <div className="flex justify-center gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardSkeleton;