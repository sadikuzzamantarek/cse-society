import HomePageBrief from "@/components/homepage/HomePageBrief";
import NoticePanel from "@/components/homepage/NoticePanel";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/homepage/Testimonials";
import NavBar from "@/components/navbar/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <HomePageBrief />
      <NoticePanel />
      <Testimonials />
      <Footer />
    </>
  );
}
