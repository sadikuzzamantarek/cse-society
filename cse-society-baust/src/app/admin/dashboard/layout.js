import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
}
