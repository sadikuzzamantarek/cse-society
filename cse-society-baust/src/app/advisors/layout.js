import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "Advisors | CSE Society, BAUST",
  description: "A full management system of CSE Society, BAUST",
};

export default function AdvisorsLayout({ children }) {
  return (
    <>
      <NavBar />

      <main className="p-5">{children}</main>
      <Footer />
    </>
  );
}
