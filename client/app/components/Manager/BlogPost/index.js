import axios from "axios";
import React from "react";
import actions from "../../../actions";
import { connect } from "react-redux";
import { API_URL } from "../../../constants";

class BlogPost extends React.PureComponent {
  state = {
    blog: {
      title: "",
      content: "",
      created: "",
      updated: "",
    },
  };

  componentDidMount() {
    const blogId = this.props.match.params.id;
    this.fetchBlogPost(blogId);
  }

  fetchBlogPost = async (blogId) => {
    try {
      const response = await axios.get(API_URL + "/blog/" + blogId);
      this.setState({ blog: response.data.blog });
    } catch (error) {
    }
  };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #f0f0f0",
          width: "100%",
          padding: "10px 20px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <h2 className="text-center text-truncate mx-auto my-5 w-50">
          {this.state.blog.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.blog.content }}
        ></div>
      </div>
    );
  }
}

export default connect(null, actions)(BlogPost);
