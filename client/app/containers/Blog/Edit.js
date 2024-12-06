import React from "react";
import EditBlog from "../../components/Manager/EditBlog";
import SubPage from "../../components/Manager/SubPage";

import { connect } from "react-redux";
import actions from "../../actions";

export class Edit extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <SubPage
        title="Modifier le blog"
        actionTitle="Annuler"
        handleAction={history.goBack}
      >
        <EditBlog />;
      </SubPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};

export default connect(mapStateToProps, actions)(Edit);
