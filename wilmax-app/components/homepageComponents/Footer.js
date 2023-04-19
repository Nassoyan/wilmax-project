import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="">
        <div className="footer-content">
          <p className="mb-0">
            &copy; 2023 Laportiva LTD. All rights reserved.
          </p>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
