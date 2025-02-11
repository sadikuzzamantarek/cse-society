import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Comittee Members | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminComitteeBaseLayout({ children }) {
  return (
    <>
      <main className="container">{children}</main>
      <Toaster />
    </>
  );
}
