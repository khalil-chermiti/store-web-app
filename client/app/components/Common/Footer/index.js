/**
 *
 * Footer
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import Newsletter from "../../../containers/Newsletter";

const Footer = () => {
  const infoLinks = [
    { id: 0, name: "Contactez-nous", to: "/contact" },
    { id: 1, name: "vendre avec nous", to: "/sell" },
    { id: 2, name: "livraison", to: "/shipping" },
  ];

  const footerBusinessLinks = (
    <ul className="support-links">
      <li className="footer-link">
        <Link to="/dashboard">Account Details</Link>
      </li>
      <li className="footer-link">
        <Link to="/dashboard/orders">Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map((item) => (
    <li key={item.id} className="footer-link">
      <Link key={item.id} to={item.to}>
        <span
          style={{
            color: "white",
          }}
        >
          {item.name}
        </span>
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <Container>
        <div
          className="footer-content"
          style={{
            textAlign: "center",
          }}
        >
          <div className="footer-block">
            <h3 className="text-uppercase block-title">Service client</h3>
            <div className="block-content">
              <ul>{footerLinks}</ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Maison des Algues
        </div>
        <ul className="footer-social-item">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063687092876&mibextid=kFxxJD&rdid=tqyI9dC93VyzLXlN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15bsYRjZxX%2F%3Fmibextid%3DkFxxJD#"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="facebook-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lamaisons_desalguesetdeshuiles/?igsh=M2wyemJ6dGF4eXFq"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="instagram-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063687092876&mibextid=kFxxJD&rdid=tqyI9dC93VyzLXlN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15bsYRjZxX%2F%3Fmibextid%3DkFxxJD#"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="twitter-icon" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
