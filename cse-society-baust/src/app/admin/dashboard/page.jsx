import LoginChecker from "@/app/test/LoginChecker";
import Counter from "@/components/admin/Counter";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const AdminDashboard = () => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <Counter />
      <Footer />
    </LoginChecker>
  );
};

export default AdminDashboard;
