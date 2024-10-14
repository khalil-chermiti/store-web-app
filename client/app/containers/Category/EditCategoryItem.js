/*
 *
 * Edit
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import NotFound from '../../components/Common/NotFound';

import EditCategoryMenuItem from '../../components/Manager/EditCategoryMenuItem';
class EditCategoryItem extends React.PureComponent {
  componentDidMount() {
    this.props.resetCategory();
    const categoryId = this.props.match.params.id;
    this.props.fetchCategoryMenuItem(categoryId);
    this.props.fetchStoreCategoriesSelect();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.resetCategory();
      const categoryId = this.props.match.params.id;
      this.props.fetchCategoryMenuItem(categoryId);
    }
  }

  render() {
    const {
      history,
      categoriesSelect,
      categoryItem,
      categoryEditItemChange,
      updateCategoryMenu,
      deleteCategoryItem
    } = this.props;

    return (
      <SubPage
        title='Edit Category'
        actionTitle='Cancel'
        handleAction={history.goBack}
      >
        {categoryItem?._id ? (
          <EditCategoryMenuItem
            categoriesSelect={categoriesSelect}
            categoryItem={categoryItem}
            categoryEditItemChange={categoryEditItemChange}
            updateCategoryMenu={updateCategoryMenu}
            deleteCategoryItem={deleteCategoryItem}
          />
        ) : (
          <NotFound message='No category found.' />
        )}
      </SubPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoriesSelect: state.category.categoriesSelect,
    categoryItem: state.category.categoryItem
  };
};

export default connect(mapStateToProps, actions)(EditCategoryItem);
