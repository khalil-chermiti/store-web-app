import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import AddCategoryItemForm from '../../components/Manager/AddCategoryItem';

class AddCategoryItem extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreCategoriesSelect();
  }

  render() {
    const {
      history,
      categories,
      categoryItemFormData,
      formErrors,
      categoryItemChange,
      addCategoryItem
    } = this.props;

    return (
      <SubPage
        title='Add Category Item'
        actionTitle='Cancel'
        handleAction={() => history.goBack()}
      >
        <AddCategoryItemForm
          categories={categories}
          categoryItemFormData={categoryItemFormData}
          formErrors={formErrors}
          categoryItemChange={categoryItemChange}
          addCategoryItem={addCategoryItem}
        />
      </SubPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categoriesSelect,
    categoryItemFormData: state.category.categoryItemFormData,
    formErrors: state.category.formErrors
  };
};

export default connect(mapStateToProps, actions)(AddCategoryItem);
