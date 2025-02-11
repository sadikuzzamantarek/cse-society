import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Members | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <main className="">{children}</main>

      <Toaster />
    </>
  );
}
