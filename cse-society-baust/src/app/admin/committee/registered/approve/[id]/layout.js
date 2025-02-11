import { Toaster } from "react-hot-toast";

export const metadata = {
  title:
    "Detailed Registered Committee Members | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function RegistrationApprovalLayout({ children }) {
  return (
    <>
      <main className="p-5 container">{children}</main>
      <Toaster />
    </>
  );
}
