export const metadata = {
    title: "Add Advisors | Admin Dashboard | CSE Society, BAUST",
    description: "A full management system of CSE Society, BAUST",
  };
  export default function AdminAddAdvisorLayout({ children }) {
    return (
      <>
        {/* <NavBar /> */}
        <main className="p-5">{children}</main>
        {/* <Footer /> */}
      </>
    );
  }
  