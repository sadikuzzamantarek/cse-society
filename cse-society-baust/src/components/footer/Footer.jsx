import React from "react";
import FooterLinks1 from "./FooterLinks1";
import FooterLinks2 from "./FooterLinks2";
import FooterLink3 from "./FooterLink3";
import SubscriptionFooter from "./SubscriptionFooter";
import Attribution from "./Attribution";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <FooterLinks1 />
          <FooterLinks2 />
          <FooterLink3 />
          <SubscriptionFooter />
        </div>
      </div>
      <Attribution />
    </footer>
  );
};

export default Footer;
