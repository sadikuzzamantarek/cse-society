import LoginChecker from "@/app/test/LoginChecker";
import AdminAdvisorComp from "@/components/admin/adminAdvisor/AdminAdvisorComp";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const AdminAdvisors = () => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <AdminAdvisorComp />
      <Footer />
    </LoginChecker>
  );
};

export default AdminAdvisors;
