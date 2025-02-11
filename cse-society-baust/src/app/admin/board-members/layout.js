export const metadata = {
  title: "Board Members | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminDashboardLayout({ children }) {
  return (
    <>
      {/* <NavBar /> */}
      <main className="p-5">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
