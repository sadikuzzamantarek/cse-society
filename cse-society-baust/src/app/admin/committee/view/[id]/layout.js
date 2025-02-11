import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

export default function AdminCommitteeLayout({ children }) {
  return (
    <>
      
      <main className="p-5">{children}</main>
    </>
  );
}
