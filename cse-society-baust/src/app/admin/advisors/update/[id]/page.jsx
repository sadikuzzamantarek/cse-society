import LoginChecker from "@/app/test/LoginChecker";
import UpdateFormDataFetchComp from "@/components/admin/adminAdvisor/UpdateFormDataFetchComp";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const AdminAdvisorUpadtePage = ({ params }) => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <UpdateFormDataFetchComp params={params} />\
      <Footer />
    </LoginChecker>
  );
};

export default AdminAdvisorUpadtePage;
