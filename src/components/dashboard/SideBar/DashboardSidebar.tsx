"use client";

import { Sidebar } from "flowbite-react";
import  {sideBarItem}  from "./sidebarMenu";
import UserTable from "@/app/tables/UserTable/page";

export default function DashboardSidebar() {
  return (
    <Sidebar className="h-screen w-screen flex" aria-label="Default sidebar example">
      {/* <UserTable/> */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarItem.map((items, index:number ) => (
            <Sidebar.Item key={index} href={items.path} icon={items.icon}>
              {items.title}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}