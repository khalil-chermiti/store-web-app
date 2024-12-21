import React from 'react';

import { connect } from 'react-redux';
import actions from '../../actions';
import SubPage from '../../components/Manager/SubPage';
import AddBlog from '../../components/Manager/AddBlog';

class Add extends React.PureComponent {
  render() {
    const { history, blogFormData, blogChange, addBlog, state, formErrors } =
      this.props;

    return (
      <SubPage
        title='Ajouter un blog'
        actionTitle='Cancel'
        handleAction={() => history.goBack()}
      >
        <AddBlog
          blogFormData={blogFormData}
          blogChange={blogChange}
          addBlog={addBlog}
        />
      </SubPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogFormData: state.blog.blogFormData
  };
};

export default connect(mapStateToProps, actions)(Add);
