import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Join Us | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};
export default function RegistrationLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="p-5">{children}</main>
      <Footer />
      <Toaster/>
    </>
  );
}
