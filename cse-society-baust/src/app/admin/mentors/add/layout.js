import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

export const metadata = {
  title: "Add Mentor | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminMentorView({ children }) {
  return (
    <>
      <AdminNavbar />
      <main className="p-5 container">{children}</main>
      <Footer />
    </>
  );
}
