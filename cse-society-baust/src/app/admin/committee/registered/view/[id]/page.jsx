import LoginChecker from "@/app/test/LoginChecker";
import RegistrationViewComp from "@/components/admin/registration/RegistrationViewComp";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import BackButton from "@/components/ui/BackButton";

const RegisteredCommitteeViewPage = ({ params }) => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <BackButton href={`/admin/committee/registered`} />
      <h3 className="text-2xl my-2 text-center text-black font-bold">
        Registration Information
      </h3>
      <RegistrationViewComp params={params} />
      <Footer />
    </LoginChecker>
  );
};

export default RegisteredCommitteeViewPage;
