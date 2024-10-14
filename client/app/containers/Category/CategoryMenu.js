/*
 *
 * Category
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import actions from '../../actions';
import Page404 from '../../components/Common/Page404';
import ListCategoryItems from './ListCategoryItems';
import AddCategoryItem from './AddCategoryItem';
import EditCategoryItem from './EditCategoryItem';

class CategoryMenu extends React.PureComponent {
  render() {
    return (
      <div className='category-dashboard'>
        <Switch>
          <Route exact path='/dashboard/menu' component={ListCategoryItems} />
          <Route exact path='/dashboard/menu/add' component={AddCategoryItem} />
          <Route
            exact
            path='/dashboard/menu/edit/:id'
            component={EditCategoryItem}
          />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(CategoryMenu);
