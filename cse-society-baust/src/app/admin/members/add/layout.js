import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Add Member | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminDashboardLayout({ children }) {
  return (
    <>

      <AdminNavbar />
      <main className="p-5">{children}</main>
      <Footer />

    </>
  );
}
