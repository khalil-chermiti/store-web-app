import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../constants";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URL + "/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">Nos blogs</h2>
      <p className="text-center">Découvrez nos derniers articles</p>
      <div className="w-list w-100">
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-row align-items-center mx-0 mb-3 wishlist-box"
            >
              <Link
                to={`/blogs/${item._id}`}
                key={index}
                className="d-flex flex-1 align-items-center text-truncate"
              >
                <div
                  className="d-flex flex-column justify-content-center px-3 text-truncate"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #f0f0f0",
                    width: "100%",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderRadius: "10px",
                    margin: "10px",
                    cursor: "pointer",
                  }}
                >
                  <h2 className="text-truncate">{item.title}</h2>
                  <ul>
                    <li>
                      <strong>crée le:</strong> {formatTime(item.created)}
                    </li>
                    <li>
                      <strong>dernière mise à jour:</strong>{" "}
                      {formatTime(item.updated)}
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center w-100">
            <h4 className="text-center">Aucun blog pour le moment.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
