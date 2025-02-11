import LoginChecker from "@/app/test/LoginChecker";
import UpdateMentorForm from "@/components/admin/adminMentors/UpdateMentorForm";
import UpdateMentorFormWrapper from "@/components/admin/adminMentors/UpdateMentorFormWrapper";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const UpdateMentors = ({ params }) => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <UpdateMentorFormWrapper params={params} />
      <Footer />
    </LoginChecker>
  );
};

export default UpdateMentors;
