import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Mentors | Admin Dashboard | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function AdminMentorLayout({ children }) {
  return (
    <>
      {/* <NavBar /> */}
      <main className="px-2">{children}</main>
      {/* <Footer /> */}
      <Toaster />
    </>
  );
}
