import React from "react";
import "../Footer/footer.css";
import "../../pages/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  ABOUT_CONTENT,
  INFORMATION_LINKS,
  PRODUCTS_LINKS,
  CONTACT_DETAILS,
  SOCIAL_ICONS,
} from "../../utils/constants"; // Ensure this path is correct

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer-dark">
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <FooterSection title="About" content={ABOUT_CONTENT} />
              <FooterLinksSection title="Information" links={INFORMATION_LINKS} />
              <FooterLinksSection title="Products" links={PRODUCTS_LINKS} />
              <ContactSection contact={CONTACT_DETAILS} />
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom socialIcons={SOCIAL_ICONS} />
    </div>
  );
};

const FooterSection = ({ title, content }) => (
  <div className="col-xs-12 col-sm-6 col-md-3 show-on-mobile widget-footer">
    <div className="widget-container">
      <h4 className="footer-header">{title}</h4>
      <div className="textwidget about-content">
        <p>{content}</p>
      </div>
    </div>
  </div>
);

const FooterLinksSection = ({ title, links }) => (
  <div className="col-xs-12 col-sm-6 col-md-3 show-on-mobile widget-footer">
    <div className="widget-container">
      <h4 className="footer-header">{title}</h4>
      <div className="menu-about-us-container">
        <ul className="menu">
          {links.map((link, index) => (
            <li key={index} className="menu-item">
              <a href={link.url}>
                <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ContactSection = ({ contact }) => (
  <div className="col-xs-12 col-sm-6 col-md-3 show-on-mobile widget-footer">
    <div className="widget-container">
      <h4 className="footer-header">Contact us</h4>
      <div className="textwidget">
        <p>{contact.address}</p>
        <hr />
        <p>Email:</p>
        <ul className="p-0">
          {contact.emails.map((email, index) => (
            <li key={index}>
              <a href={`mailto:${email}`}>
                <FontAwesomeIcon className="right-arrow" icon={faAngleRight} />
                {email}
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <p>
          Phone:{" "}
          <a href={`tel:${contact.phone}`} className="text-white">
            {contact.phone}
          </a>
        </p>
        <hr />
        <p>Preferred Timings For Call: {contact.timings}</p>
        <hr />
        <div className="btn-block mt-4">
          <a href={contact.contactUrl} className="btn btn-primary arrow-right">
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const FooterBottom = ({ socialIcons }) => (
  <div className="container-fluid" id="footer-bot">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="footer-logo-box">
            <img
              id="footer-logo"
              src="https://diyalightingstudio.com/wp-content/uploads/2021/08/Logo.png"
              alt="Diya Lighting Studio"
            />
            <span className="copyright-text">
              2020. All Rights Reserved | Handcrafted by
              <a href="https://ekarigartech.com/" target="_blank" rel="noopener noreferrer">
                E-Karigar
              </a>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="social">
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <a target="_blank" href={icon.url} rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
