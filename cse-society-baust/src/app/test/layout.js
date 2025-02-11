import LoginChecker from "./LoginChecker";

export default function TestLayout({ children }) {
  return (
    <html lang="en">
      <body className="container px-5">
        {children}
        {/* <LoginChecker>{children}</LoginChecker> */}
      </body>
    </html>
  );
}
