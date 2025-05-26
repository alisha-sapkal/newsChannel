import React from "react";
// import './Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="foot">
      <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <a href="index.html" className="navbar-brand">
              <h1 className="mb-2 mt-n2 display-5 text-uppercase">
                <span className="text-primary">News</span>Room
              </h1>
            </a>
            <p>
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-secondary text-center me-2"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-secondary text-center me-2"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-secondary text-center me-2"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-secondary text-center me-2"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-secondary text-center me-2"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-4">Categories</h4>
            <div className="d-flex flex-wrap">
              {[
                "Politics",
                "Business",
                "Corporate",
                "Sports",
                "Health",
                "Education",
                "Science",
                "Technology",
                "Foods",
                "Entertainment",
                "Travel",
                "Lifestyle",
              ].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="btn btn-sm btn-outline-secondary m-1"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-4">Tags</h4>
            <div className="d-flex flex-wrap">
              {[
                "Politics",
                "Business",
                "Corporate",
                "Sports",
                "Health",
                "Education",
                "Science",
                "Technology",
                "Foods",
                "Entertainment",
                "Travel",
                "Lifestyle",
              ].map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="btn btn-sm btn-outline-secondary m-1"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-4">Quick Links</h4>
            <div className="d-flex flex-column">
              {[
                { text: "About", link: "#" },
                { text: "Advertise", link: "#" },
                { text: "Privacy & policy", link: "#" },
                { text: "Terms & conditions", link: "#" },
                { text: "Contact", link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  className="text-secondary mb-2 d-flex align-items-center"
                  href={item.link}
                >
                  <i className="fa fa-angle-right text-dark me-2" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center">
          ©{" "}
          <a className="fw-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved. Designed by{" "}
          <a className="fw-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
