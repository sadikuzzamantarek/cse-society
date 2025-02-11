import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Add Board Members | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminDashboardLayout({ children }) {
  return (
    <>
      {/* <NavBar /> */}
      <Toaster position="top-right" />
      <main className="p-5">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
