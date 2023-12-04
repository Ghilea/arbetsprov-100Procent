import Link from "./components/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto overflow-hidden flex-between text-white bg-black/30 w-full justify-center py-24 text-xs gap-16">
      <div className="flex justify-evenly items-start gap-24">
        <Link text={["View all", "Special offers", "Collaborations"]}>
          Products
        </Link>
        <Link
          text={[
            "Product help",
            "Service & Warranty",
            "Register product",
            "Contact support",
            "International numbers",
          ]}
        >
          Support
        </Link>
        <Link text={["About us", "Press", "Careers"]}>Company</Link>
        <Link text={["United states", "Sweden"]}>Location</Link>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-center">
          Copyright &copy; 2023 MyWish. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a className="btn">Privacy Policy</a> |
          <a className="btn">Use of cookies</a> |
          <a className="btn">Terms of Use</a> |<a className="btn">Site map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
