import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

export const metadata = {
  title: "Update Member Informations | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminMemberUpdateLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <main className="p-5">{children}</main>
      <Footer />
    </>
  );
}
