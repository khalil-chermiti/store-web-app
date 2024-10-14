/*
 *
 * List
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import CategoryItemList from '../../components/Manager/CategoryItemList';

class ListCategoryItems extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreCategoriesItems();
  }

  render() {
    const { history, categoriesMenuItems, isLoading } = this.props;

    return (
      <>
        <SubPage
          title='Categories'
          actionTitle='Add'
          handleAction={() => history.push('/dashboard/menu/add')}
        >
          {isLoading ? (
            <LoadingIndicator inline />
          ) : categoriesMenuItems.length > 0 ? (
            <CategoryItemList categoriesMenuItems={categoriesMenuItems} />
          ) : (
            <NotFound message='No categories found.' />
          )}
        </SubPage>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoriesMenuItems: state.category.categoriesMenuItems,
    isLoading: state.category.isLoading
  };
};

export default connect(mapStateToProps, actions)(ListCategoryItems);
