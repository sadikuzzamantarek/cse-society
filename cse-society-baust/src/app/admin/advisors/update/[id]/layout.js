import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Update Advisor | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminAdvisorUpdateLayout({ children }) {
  return (
    <>
      <main className="p-5">{children}</main>
      <Toaster />
    </>
  );
}
