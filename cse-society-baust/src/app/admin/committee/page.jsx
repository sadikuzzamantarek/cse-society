import LoginChecker from "@/app/test/LoginChecker";
import AdminCommitteeComponent from "@/components/committee/AdminCommitteeComponent";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const AdminCommitteePage = () => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <div className="px-5">
        <AdminCommitteeComponent />;
      </div>
      <Footer />
    </LoginChecker>
  );
};

export default AdminCommitteePage;
