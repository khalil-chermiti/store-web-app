import React from "react";
import SubPage from "../../components/Manager/SubPage";

import { connect } from "react-redux";
import actions from "../../actions";
import { Link } from "react-router-dom";


class List extends React.PureComponent {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    const { history, blogs, setBlogToEdit } = this.props;
    return (
      <>
        <SubPage
          title="Blogs"
          actionTitle="Ajouter un blog"
          handleAction={() => history.push("/dashboard/blog/add")}
        >
          {blogs.length > 0 ? (
            <div className="p-list">
              {blogs.map((blog, index) => (
                <Link
                  key={index}
                  onClick={() => setBlogToEdit(blog)}
                  to={`/dashboard/blog/edit/${blog._id}`}
                  className="d-flex flex-row align-items-center mx-0 mb-3 product-box p-3"
                  style={{ cursor: "pointer", maxHeight: "100px" }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">{blog.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning" role="alert">
              Aucun blog trouvé
            </div>
          )}
        </SubPage>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs,
  };
};

export default connect(mapStateToProps, actions)(List);
