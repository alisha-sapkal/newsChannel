import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ads_700x70 from "../../../assets/img/ads-700x70.jpg";
import cat_500x80_1 from "../../../assets/img/cat-500x80-1.jpg";
import cat_500x80_2 from "../../../assets/img/cat-500x80-2.jpg";
import cat_500x80_3 from "../../../assets/img/cat-500x80-3.jpg";
import cat_500x80_4 from "../../../assets/img/cat-500x80-4.jpg";
import news_100x100_1 from "../../../assets/img/news-100x100-1.jpg";
import news_100x100_2 from "../../../assets/img/news-100x100-2.jpg";
import news_100x100_3 from "../../../assets/img/news-100x100-3.jpg";
import news_100x100_4 from "../../../assets/img/news-100x100-4.jpg";
import news_300x300_1 from "../../../assets/img/news-300x300-1.jpg";
import news_300x300_2 from "../../../assets/img/news-300x300-2.jpg";
import news_300x300_3 from "../../../assets/img/news-300x300-3.jpg";
import news_300x300_4 from "../../../assets/img/news-300x300-4.jpg";
import news_300x300_5 from "../../../assets/img/news-300x300-5.jpg";
import news_500x280_4 from "../../../assets/img/news-500x280-4.jpg";
import news_700x435_1 from "../../../assets/img/news-700x435-1.jpg";
import news_700x435_2 from "../../../assets/img/news-700x435-2.jpg";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Home() {
  const scrollRef = useRef(null);
  const scrollRefB = useRef(null);
  const scrollRefT = useRef(null);
  const [random, setRandom] = useState([]);
  const [lifestyle, setLifestyle] = useState([]);
  const [finance, setFinance] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [market, setMarket] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/searcharticles?articleType=random&num=3&randomsize=true"
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

    fetch(
      "http://localhost:3000/api/searcharticles?articleType=lifestyle&num=15&order=ASC"
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
        setLifestyle(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(
      "http://localhost:3000/api/searcharticles?articleType=finance&num=15&order=ASC"
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
        setFinance(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(
      "http://localhost:3000/api/searcharticles?articleType=technology&num=15&order=ASC"
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
      "http://localhost:3000/api/searcharticles?articleType=market&num=15&order=ASC"
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
        setMarket(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 100,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
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
      {/* Top News Slider Starts */}
      <div className="home-content">
        <div className="container-fluid py-3">
          <div className="container">
            <div
              className="d-flex overflow-auto"
              style={{
                whiteSpace: "nowrap",
                scrollBehavior: "smooth",
                padding: "10px 0",
              }}
            >
              <div
                className="d-inline-flex align-items-center mr-3"
                style={{
                  width: "467px",
                  flexShrink: "0",
                }}
              >
                <img
                  src={news_100x100_1}
                  alt="news 1"
                  className="img-fluid rounded mr-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="scroll-text-container">
                  <a
                    href="#"
                    className="scroll-link text-dark font-weight-bold"
                  >
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div
                className="d-inline-flex align-items-center mr-3"
                style={{
                  width: "467px",
                  flexShrink: "0",
                }}
              >
                <img
                  src={news_100x100_2}
                  alt="news 2"
                  className="img-fluid rounded mr-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="scroll-text-container">
                  <a
                    href="#"
                    className="scroll-link text-dark font-weight-bold"
                  >
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div
                className="d-inline-flex align-items-center mr-3"
                style={{
                  width: "467px",
                  flexShrink: "0",
                }}
              >
                <img
                  src={news_100x100_3}
                  alt="news 3"
                  className="img-fluid rounded mr-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="scroll-text-container">
                  <a
                    href="#"
                    className="scroll-link text-dark font-weight-bold"
                  >
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div
                className="d-inline-flex align-items-center"
                style={{
                  width: "467px",
                  flexShrink: "0",
                }}
              >
                <img
                  src={news_100x100_4}
                  alt="news 4"
                  className="img-fluid rounded mr-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="scroll-text-container">
                  <a
                    href="#"
                    className="scroll-link text-dark font-weight-bold"
                  >
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top News Slider End */}
      {/* Main News Slider Start */}
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="image-carousel-container overflow-hidden">
              <div
                className="d-flex"
                style={{
                  scrollBehavior: "smooth",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}
                ref={scrollRef}
              >
                <div className="image-carousel-item position-relative flex-shrink-0">
                  <div className="image-wrapper">
                    <img
                      src={news_700x435_1}
                      alt="News 1"
                      className="img-fluid w-100"
                      style={{ objectFit: "cover", maxHeight: "435px" }}
                    />
                    <div className="overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="overlay-content text-center text-white p-3">
                        <div className="mb-2">
                          <a className="text-white" href="#">
                            Technology
                          </a>
                          <span className="px-2">/</span>
                          <a className="text-white" href="#">
                            January 01, 2045
                          </a>
                        </div>
                        <a
                          className="h2 m-0 text-white font-weight-bold text-decoration-none responsive-text text"
                          href="#"
                          style={{ fontSize: "inherit" }}
                        >
                          Sanctus amet sed amet ipsum lorem. Dolores et erat et
                          elitr sea sed
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-carousel-item position-relative flex-shrink-0">
                  <div className="image-wrapper">
                    <img
                      src={news_700x435_2}
                      alt="News 2"
                      className="img-fluid w-100"
                      style={{ objectFit: "cover", maxHeight: "435px" }}
                    />
                    <div className="overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="overlay-content text-center text-white p-3">
                        <div className="mb-2">
                          <a className="text-white" href="#">
                            Technology
                          </a>
                          <span className="px-2">/</span>
                          <a className="text-white" href="#">
                            January 01, 2045
                          </a>
                        </div>
                        <a
                          className="h2 m-0 text-white font-weight-bold text-decoration-none text"
                          href="#"
                          style={{ fontSize: "inherit" }}
                        >
                          Sanctus amet sed amet ipsum lorem. Dolores et erat et
                          elitr sea sed
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
              <h3 className="m-0">Categories</h3>
              <a
                className="text-secondary font-weight-medium text-decoration-none"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="c4d position-relative overflow-hidden mb-3">
              <img
                className="img-fluid w-100 h-100"
                src={cat_500x80_1}
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay d-flex align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Lifestyle
              </a>
            </div>
            <div className="c4d position-relative overflow-hidden mb-3">
              <img
                className="img-fluid w-100 h-100"
                src={cat_500x80_2}
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay d-flex align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Finance
              </a>
            </div>
            <div className="c4d position-relative overflow-hidden mb-3">
              <img
                className="img-fluid w-100 h-100"
                src={cat_500x80_3}
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay d-flex align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Technology
              </a>
            </div>
            <div className="c4d position-relative overflow-hidden">
              <img
                className="img-fluid w-100 h-100"
                src={cat_500x80_4}
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay d-flex align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Market
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main News Slider End */}
      {/* Featured News Slider Start */}
      <div className="container-fluid py-3">
        <div className="container-f">
          <div className="container">
            <div className="c2">
              <div className="dflex align-items-center justify-content-between bg-light py-2 px-4 mb-3 mt-3">
                <h3 className="m-0">Featured</h3>
                <a
                  className="text-secondary font-weight-medium text-decoration-none"
                  href="#"
                >
                  View All
                </a>
              </div>
              <div className="featured-carousel">
                <div className="fimg position-relative overflow-hidden featured-item">
                  <img
                    className="img-fluid w-100 h-100"
                    src={news_300x300_1}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a className="text-white" href="#">
                        Technology
                      </a>
                      <span className="px-1 text-white">/</span>
                      <a className="text-white" href="#">
                        January 01, 2045
                      </a>
                    </div>
                    <a className="h4 m-0 text-white" href="#">
                      Sanctus amet sed ipsum lorem
                    </a>
                  </div>
                </div>
                <div className="fimg position-relative overflow-hidden featured-item">
                  <img
                    className="img-fluid w-100 h-100"
                    src={news_300x300_2}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a className="text-white" href="#">
                        Technology
                      </a>
                      <span className="px-1 text-white">/</span>
                      <a className="text-white" href="#">
                        January 01, 2045
                      </a>
                    </div>
                    <a className="h4 m-0 text-white" href="#">
                      Sanctus amet sed ipsum lorem
                    </a>
                  </div>
                </div>
                <div className="fimg position-relative overflow-hidden featured-item">
                  <img
                    className="img-fluid w-100 h-100"
                    src={news_300x300_3}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a className="text-white" href="#">
                        Technology
                      </a>
                      <span className="px-1 text-white">/</span>
                      <a className="text-white" href="#">
                        January 01, 2045
                      </a>
                    </div>
                    <a className="h4 m-0 text-white" href="#">
                      Sanctus amet sed ipsum lorem
                    </a>
                  </div>
                </div>
                <div className="fimg position-relative overflow-hidden featured-item">
                  <img
                    className="img-fluid w-100 h-100"
                    src={news_300x300_4}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a className="text-white" href="#">
                        Technology
                      </a>
                      <span className="px-1 text-white">/</span>
                      <a className="text-white" href="#">
                        January 01, 2045
                      </a>
                    </div>
                    <a className="h4 m-0 text-white" href="#">
                      Sanctus amet sed ipsum lorem
                    </a>
                  </div>
                </div>
                <div className="fimg position-relative overflow-hidden featured-item">
                  <img
                    className="img-fluid w-100 h-100"
                    src={news_300x300_5}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a className="text-white" href="#">
                        Technology
                      </a>
                      <span className="px-1 text-white">/</span>
                      <a className="text-white" href="#">
                        January 01, 2045
                      </a>
                    </div>
                    <a className="h4 m-0 text-white" href="#">
                      Sanctus amet sed ipsum lorem
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured News Slider End */}
      {/* Category News Slider Start */}
      <div className="sctn">
        <div className="container-fluid">
          <div className="container">
            <div className="home-container">
              <div className="section-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-12 py-3">
                    <div className="section2">
                      <div className="header bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">Lifestyle</h3>
                      </div>
                      <div
                        ref={scrollRefB}
                        className="scroll-container"
                        style={{ overflowY: "auto", maxHeight: "400px" }}
                      >
                        {lifestyle.map((article) => (
                          <div key={article.id} className="card mb-3">
                            <img
                              src={article.sphoto}
                              alt={article.title}
                              className="image img-fluid"
                            />
                            <div className="spn">
                              <div className="mb-2" style={{ fontSize: 10 }}>
                                <a href="">{article.title}</a>
                                <span className="px-1">/</span>
                                <span>
                                  {new Date(article.date).toLocaleDateString()}
                                </span>
                              </div>
                              <div
                                className={`text-container ${
                                  expandedArticles[article.id]
                                    ? "expanded"
                                    : "collapsed"
                                }`}
                              >
                                <p
                                  className="m-0"
                                  style={{ width: "100%", fontSize: "14px" }}
                                >
                                  {expandedArticles[article.id]
                                    ? article.description
                                    : truncateText(article.description, 50)}
                                  <button
                                    onClick={() => handleToggleText(article.id)}
                                    style={{
                                      background: "none",
                                      border: "none",
                                      color: "black",
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 py-3">
                    <div className="section2">
                      <div className="header bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">Finance</h3>
                      </div>
                      <div
                        ref={scrollRefT}
                        className="scroll-container"
                        style={{ overflowY: "auto", maxHeight: "400px" }}
                      >
                        {finance.map((article) => (
                          <div key={article} className="card mb-3">
                            <img
                              src={article.sphoto}
                              alt={article.title}
                              className="image img-fluid"
                            />
                            <div className="spn">
                              <div className="mb-2" style={{ fontSize: 10 }}>
                                <a href="">{article.title}</a>
                                <span className="px-1">/</span>
                                <span>
                                  {new Date(article.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p
                                className="m-0"
                                style={{ width: "100%", fontSize: "14px" }}
                              >
                                {expandedArticles[article.id]
                                  ? article.description
                                  : truncateText(article.description, 50)}
                                <button
                                  onClick={() => handleToggleText(article.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "black",
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
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-12 py-3">
                    <div className="section21">
                      <div className="header bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">Technology</h3>
                      </div>
                      <div
                        ref={scrollRefT}
                        className="scroll-container"
                        style={{ overflowY: "auto", maxHeight: "400px" }}
                      >
                        {technology.map((article) => (
                          <div key={article} className="card mb-3">
                            <img
                              src={article.sphoto}
                              alt={article.title}
                              className="image img-fluid"
                            />
                            <div className="spn">
                              <div className="mb-2" style={{ fontSize: 10 }}>
                                <a href="">{article.title}</a>
                                <span className="px-1">/</span>
                                <span>
                                  {new Date(article.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p
                                className="m-0"
                                style={{ width: "100%", fontSize: "14px" }}
                              >
                                {expandedArticles[article.id]
                                  ? article.description
                                  : truncateText(article.description, 50)}
                                <button
                                  onClick={() => handleToggleText(article.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "black",
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
                  </div>

                  <div className="col-lg-6 col-md-12 py-3">
                    <div className="section22">
                      <div className="header bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">Market</h3>
                      </div>
                      <div
                        ref={scrollRefT}
                        className="scroll-container"
                        style={{ overflowY: "auto", maxHeight: "400px" }}
                      >
                        {market.map((article) => (
                          <div key={article} className="card mb-3">
                            <img
                              src={article.sphoto}
                              alt={article.title}
                              className="image img-fluid"
                            />
                            <div className="spn">
                              <div className="mb-2" style={{ fontSize: 10 }}>
                                <a href="">{article.title}</a>
                                <span className="px-1">/</span>
                                <span>
                                  {new Date(article.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p
                                className="m-0"
                                style={{ width: "14rem", fontSize: "14px" }}
                              >
                                {expandedArticles[article.id]
                                  ? article.description
                                  : truncateText(article.description, 50)}
                                <button
                                  onClick={() => handleToggleText(article.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "black",
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category News Slider End */}
      {/* News With Sidebar Start */}
      <div className="last" style={{ marginLeft: "-1rem" }}>
        <div className="container-fluid py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row mb-3" style={{ width: "100%" }}>
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">Popular</h3>
                      <a
                        className="text-secondary font-weight-medium text-decoration-none"
                        href=""
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    {random.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 10 }}>
                            <a href="">{article.title}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
                          <p
                            className="m-0"
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
                    {random.map((article) => (
                      <div key={article.id} className="d-flex mb-3">
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
                            className="m-0"
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
                  <div className="col-lg-6 col-12">
                    {random.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 10 }}>
                            <a href="">{article.title}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
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
                    {random.map((article) => (
                      <div key={article.id} className="d-flex mb-3">
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
                </div>
                <div className="mb-3 pb-3" style={{ width: "90%" }}>
                  <a href="">
                    <img className="img-fluid w-100" src={ads_700x70} alt="" />
                  </a>
                </div>
                <div className="row" style={{ width: "100%" }}>
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">Latest</h3>
                      <a
                        className="text-secondary font-weight-medium text-decoration-none"
                        href=""
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    {random.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 10 }}>
                            <a href="">{article.title}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
                          <p
                            className="m-0"
                            style={{ width: "100%", fontSize: "11px" }}
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
                    {random.map((article) => (
                      <div key={article.id} className="d-flex mb-3">
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
                                  color: "#00000094",
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
                  <div className="col-lg-6 col-12">
                    {random.map((article) => (
                      <div key={article.id} className="position-relative mb-3">
                        <img
                          className="img-fluid w-100"
                          src={article.sphoto}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={{ fontSize: 10 }}>
                            <a href="">{article.title}</a>
                            <span className="px-1">/</span>
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a className="h4" href="">
                            Est stet amet ipsum stet clita rebum duo
                          </a>
                          <p
                            className="m-0"
                            style={{ width: "100%", fontSize: "11px" }}
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
                    {random.map((article) => (
                      <div key={article.id} className="d-flex mb-3">
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
                                  color: "#ed1c24",
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
                </div>
              </div>
              <div
                className="col-lg-4 pt-3 pt-lg-0"
                style={{ marginLeft: "-1rem" }}
              >
                {/* Social Follow Start */}

                <div className="col-lg-12 pt-3 pt-lg-0">
                  {/* Social Follow Start */}
                  <div className="pb-3">
                    <div className="bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">Follow Us</h3>
                    </div>
                    <div className="d-flex flex-column flex-sm-row mb-3">
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 mr-sm-2"
                        style={{ background: "#39569E" }}
                      >
                        <small className="fab fa-facebook-f mr-2" />
                        <small>12,345 Fans</small>
                      </a>
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 ml-sm-2"
                        style={{ background: "#52AAF4" }}
                      >
                        <small className="fab fa-twitter mr-2" />
                        <small>12,345 Followers</small>
                      </a>
                    </div>
                    <div className="d-flex flex-column flex-sm-row mb-3">
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 mr-sm-2"
                        style={{ background: "#0185AE" }}
                      >
                        <small className="fab fa-linkedin-in mr-2" />
                        <small>12,345 Connects</small>
                      </a>
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 ml-sm-2"
                        style={{ background: "#C8359D" }}
                      >
                        <small className="fab fa-instagram mr-2" />
                        <small>12,345 Followers</small>
                      </a>
                    </div>
                    <div className="d-flex flex-column flex-sm-row mb-3">
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 mr-sm-2"
                        style={{ background: "#DC472E" }}
                      >
                        <small className="fab fa-youtube mr-2" />
                        <small>12,345 Subscribers</small>
                      </a>
                      <a
                        href=""
                        className="d-block w-100 w-sm-50 py-2 px-3 text-white text-decoration-none mb-3 mb-sm-0 ml-sm-2"
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
                        Aliqu justo et labore at eirmod justo sea erat diam
                        dolor diam vero kasd
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
                      <div key={article.id} className="d-flex mb-3">
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
                                  color: "#ed1c24",
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
                </div>

                {/* Popular News End */}
                {/* Tags Start */}
                <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Tags</h3>
                  </div>
                  <div className="d-flex flex-wrap m-n1 justify-content-start">
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
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Home;
