import React, { useEffect, useState } from "react";
import "../../../css/style.css";
import "./Categories.css";
import ads_700x70 from "../../../assets/img/ads-700x70.jpg";
import news_500x280_4 from "../../../assets/img/news-500x280-4.jpg";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Categories() {
  const [technology, setTechnology] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/searcharticles?articleType=technology&num=3&randomsize=true"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("data is fetched", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setTechnology(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(
      "http://localhost:3000/api/searcharticles?articleType=random&num=5&randomsize=true"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("data is fetched", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setRandom(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const backToTop = document.querySelector(".back-to-top");
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const [expandedArticles, setExpandedArticles] = useState({});

  const handleToggleText = (id) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <>
      <Header className="header" />
      {/* Breadcrumb Start */}
      <div className="main-content">
        <div className="container-fluid">
          <div className="container">
            <nav className="breadcrumb bg-transparent m-0 p-0">
              <a className="breadcrumb-item" href="#">
                Home
              </a>
              <a className="breadcrumb-item" href="#">
                Category
              </a>
              <span className="breadcrumb-item active">Technology</span>
            </nav>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* News With Sidebar Start */}
        <div className="container-fluid py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">Technology</h3>
                      <a
                        className="text-secondary font-weight-medium text-decoration-none"
                        href=""
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {technology.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 14 }}>
                            <a href="">{article.type}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
                          <p className="m-0">
                            {expandedArticles[article.id]
                              ? article.description
                              : truncateText(article.description, 50)}
                            <button
                              onClick={() => handleToggleText(article.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#00000094",
                                cursor: "pointer",
                              }}
                            >
                              {expandedArticles[article.id]
                                ? "Show Less"
                                : "See More"}
                            </button>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-6">
                    {technology.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 14 }}>
                            <a href="">{article.type}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
                          <p className="m-0">
                            {expandedArticles[article.id]
                              ? article.description
                              : truncateText(article.description, 50)}
                            <button
                              onClick={() => handleToggleText(article.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#00000094",
                                cursor: "pointer",
                              }}
                            >
                              {expandedArticles[article.id]
                                ? "Show Less"
                                : "See More"}
                            </button>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <a href="">
                    <img className="img-fluid w-100" src={ads_700x70} alt="" />
                  </a>
                </div>
                <div className="r2">
                  <div className="row">
                    <div className="col-lg-6">
                      {random.map((article) => (
                        <div className="d-flex mb-3">
                          <img
                            src={article.sphoto}
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: "cover",
                            }}
                          />
                          <div
                            className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                            style={{ height: 100 }}
                          >
                            <div className="mb-1" style={{ fontSize: 10 }}>
                              <a href="">
                                {expandedArticles[article.id]
                                  ? article.title
                                  : truncateText(article.title, 10)}
                                <button
                                  onClick={() => handleToggleText(article.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "#343a40",
                                    cursor: "pointer",
                                  }}
                                >
                                  {expandedArticles[article.id]
                                    ? "Show Less"
                                    : "See More"}
                                </button>
                              </a>
                              <span className="px-1">/</span>
                              <span>
                                {new Date(article.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p
                            className="h6 m-0"
                            style={{ width: "100%", fontSize: "10px" }}
                          >
                            {expandedArticles[article.id]
                              ? article.description
                              : truncateText(article.description, 50)}
                            <button
                              onClick={() => handleToggleText(article.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#00000094",
                                cursor: "pointer",
                              }}
                            >
                              {expandedArticles[article.id]
                                ? "Show Less"
                                : "See More"}
                            </button>
                          </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-6">
                      {random.map((article) => (
                        <div className="d-flex mb-3">
                          <img
                            src={article.sphoto}
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: "cover",
                            }}
                          />
                          <div
                            className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                            style={{ height: 100 }}
                          >
                            <div className="mb-1" style={{ fontSize: 10 }}>
                              <a href="">
                                {expandedArticles[article.id]
                                  ? article.title
                                  : truncateText(article.title, 10)}
                                <button
                                  onClick={() => handleToggleText(article.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "#343a40",
                                    cursor: "pointer",
                                  }}
                                >
                                  {expandedArticles[article.id]
                                    ? "Show Less"
                                    : "See More"}
                                </button>
                              </a>
                              <span className="px-1">/</span>
                              <span>
                                {new Date(article.date).toLocaleDateString()}
                              </span>
                            </div>
                            <a className="h6 m-0" href="" style={{fontSize: '10px'}}>
                              {expandedArticles[article.id]
                                ? article.description
                                : truncateText(article.description, 20)}
                              <button
                                onClick={() => handleToggleText(article.id)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  color: "#343a40",
                                  cursor: "pointer",
                                }}
                              >
                                {expandedArticles[article.id]
                                  ? "Show Less"
                                  : "See More"}
                              </button>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span
                              className="fa fa-angle-double-left"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 pt-3 pt-lg-0">
                {/* Social Follow Start */}
                <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Follow Us</h3>
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                      style={{ background: "#39569E" }}
                    >
                      <small className="fab fa-facebook-f mr-2" />
                      <small>12,345 Fans</small>
                    </a>
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                      style={{ background: "#52AAF4" }}
                    >
                      <small className="fab fa-twitter mr-2" />
                      <small>12,345 Followers</small>
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                      style={{ background: "#0185AE" }}
                    >
                      <small className="fab fa-linkedin-in mr-2" />
                      <small>12,345 Connects</small>
                    </a>
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                      style={{ background: "#C8359D" }}
                    >
                      <small className="fab fa-instagram mr-2" />
                      <small>12,345 Followers</small>
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                      style={{ background: "#DC472E" }}
                    >
                      <small className="fab fa-youtube mr-2" />
                      <small>12,345 Subscribers</small>
                    </a>
                    <a
                      href=""
                      className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                      style={{ background: "#1AB7EA" }}
                    >
                      <small className="fab fa-vimeo-v mr-2" />
                      <small>12,345 Followers</small>
                    </a>
                  </div>
                </div>
                {/* Social Follow End */}
                {/* Newsletter Start */}
                <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Newsletter</h3>
                  </div>
                  <div className="bg-light text-center p-4 mb-3">
                    <p>
                      Aliqu justo et labore at eirmod justo sea erat diam dolor
                      diam vero kasd
                    </p>
                    <div className="input-group" style={{ width: "100%" }}>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary">Sign Up</button>
                      </div>
                    </div>
                    <small>Sit eirmod nonumy kasd eirmod</small>
                  </div>
                </div>
                {/* Newsletter End */}
                {/* Ads Start */}
                <div className="mb-3 pb-3">
                  <a href="">
                    <img className="img-fluid" src={news_500x280_4} alt="" />
                  </a>
                </div>
                {/* Ads End */}
                {/* Popular News Start */}
                <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Trending</h3>
                  </div>
                  {random.map((article) => (
                    <div className="d-flex mb-3">
                      <img
                        src={article.sphoto}
                        style={{ width: 100, height: 100, objectFit: "cover" }}
                      />
                      <div
                        className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                        style={{ height: 100 }}
                      >
                        <div className="mb-1" style={{ fontSize: 10 }}>
                          <a href="">
                            {expandedArticles[article.id]
                              ? article.title
                              : truncateText(article.title, 10)}
                            <button
                              onClick={() => handleToggleText(article.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#343a40",
                                cursor: "pointer",
                              }}
                            >
                              {expandedArticles[article.id]
                                ? "Show Less"
                                : "See More"}
                            </button>
                          </a>
                          <span className="px-1">/</span>
                          <span>
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p
                            className="h6 m-0"
                            style={{ width: "100%", fontSize: "10px" }}
                          >
                            {expandedArticles[article.id]
                              ? article.description
                              : truncateText(article.description, 50)}
                            <button
                              onClick={() => handleToggleText(article.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#00000094",
                                cursor: "pointer",
                              }}
                            >
                              {expandedArticles[article.id]
                                ? "Show Less"
                                : "See More"}
                            </button>
                          </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Popular News End */}
                {/* Tags Start */}
                <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Tags</h3>
                  </div>
                  <div className="d-flex flex-wrap m-n1">
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Politics
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Business
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Corporate
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Sports
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Health
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Education
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Science
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Technology
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Foods
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Entertainment
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Travel
                    </a>
                    <a href="" className="btn btn-sm btn-outline-secondary m-1">
                      Lifestyle
                    </a>
                  </div>
                </div>
                {/* Tags End */}
              </div>
            </div>
          </div>
        </div>
        {/* News With Sidebar End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-dark back-to-top">
          <i className="fa fa-angle-up" />
        </a>
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Categories;
