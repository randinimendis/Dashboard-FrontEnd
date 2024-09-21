/*"use client";

import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import Header from "../components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar  }comment karana side bar */
        /*
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}*/

"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import { Sidebar } from "@/app/components/sidebar";
import AccountSettingsPage from "../account/page";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-grow p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">

          <AccountSettingsPage/>
          {children}
        </main>
      </div>
    </div>
  );
}

