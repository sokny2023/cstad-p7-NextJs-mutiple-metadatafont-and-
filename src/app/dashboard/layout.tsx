import DashboardSidebar from "@/components/dashboard/SideBar/DashboardSidebar";
import UserTable from "../tables/UserTable/page";
import NavbarComponent from "@/components/layouts/NavbarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
    <NavbarComponent/>
   <DashboardSidebar/>
   {/* <UserTable/> */}
    {children}
   </aside>
  );
}
