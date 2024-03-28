"use client";

import { Sidebar } from "flowbite-react";
import  {sideBarItem}  from "./sidebarMenu";

export default function DashboardSidebar() {
  return (
    <Sidebar className="min-h-screen" aria-label="Default sidebar example">
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