import { connect } from "react-redux";
import actions from "../../../actions";

import { Col, Row } from "reactstrap";

import Input from "../../Common/Input";
import Button from "../../Common/Button";

import React from "react";

export class EditBlog extends React.PureComponent {
  render() {
    const { blog, blogEditChange, updateBlog, deleteBlog } = this.props;
    return (
      <div className="add-blog">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateBlog(blog);
          }}
          noValidate
        >
          <Row>
            <Col xs="12" lg="6">
              <Input
                type={"text"}
                label={"Titre"}
                name={"title"}
                placeholder={"Titre du blog"}
                value={blog.title}
                onInputChange={(name, value) => {
                  blogEditChange(name, value);
                }}
              />
            </Col>
            <Col xs="12" md="12">
              <Input
                type={"ReactQuill"}
                label={"content"}
                name={"content"}
                placeholder={"contenu du blog"}
                value={blog.content}
                onInputChange={(name, value) => {
                  blogEditChange(name, value);
                }}
              />
            </Col>
          </Row>
          <div className="add-blog-actions mt-3">
            <Button type="submit" text="Enregistrer" className="mr-1" />
            <Button
              variant="danger"
              text="Supprimer"
              onClick={() => {
                if (window.confirm("Voulez-vous vraiment supprimer ce blog?")) {
                  deleteBlog(blog._id);
                }
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};

export default connect(mapStateToProps, actions)(EditBlog);
