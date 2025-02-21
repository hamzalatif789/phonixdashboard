
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
      <Footer />
    </div>
  );
}
