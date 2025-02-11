import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Advisors | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminAdvisorLayout({ children }) {
  return (
    <>
      <main className="p-5">{children}</main>
      <Toaster />
    </>
  );
}
