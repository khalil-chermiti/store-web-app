import React from "react";

import Page404 from "../../components/Common/Page404";
import { Switch, Route } from "react-router-dom";
import Add from "./Add";
import { Edit } from "./Edit";
import List from "./List";
import { connect } from "react-redux";
import actions from "../../actions";

export const Blog = () => {
  return (
    <div className="product-dashboard">
      <Switch>
        <Route exact path="/dashboard/blog" component={List} />
        <Route exact path="/dashboard/blog/edit/:id" component={Edit} />
        <Route exact path="/dashboard/blog/add" component={Add} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Blog);
