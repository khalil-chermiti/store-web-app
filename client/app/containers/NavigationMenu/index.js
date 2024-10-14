/**
 *
 * NavigationMenu
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import { CloseIcon } from '../../components/Common/Icon';
import { NavigationGroup } from './NavigationGroup';

class NavigationMenu extends React.PureComponent {
  render() {
    const { isMenuOpen, categories, toggleMenu } = this.props;

    const handleCategoryClick = () => {
      this.props.toggleMenu();
    };

    return (
      <div className='navigation-menu'>
        <div className='menu-header'>
          {isMenuOpen && (
            <Button
              borderless
              variant='empty'
              ariaLabel='close the menu'
              icon={<CloseIcon />}
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className='menu-body'>
          <Container>
            <h3 className='menu-title text-uppercase'>Nos Catégories</h3>
            <nav role='navigation'>
              <ul className='menu-list'>
                {/* {categories.map((link, index) => (
                  <li key={index} className='menu-item'>
                    <NavLink
                      onClick={handleCategoryClick}
                      to={'/shop/category/' + link.slug}
                      activeClassName='active-link'
                      exact
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))} */}

                {categories.map((cat, index) => {
                  return (
                    <div key={index}>
                      <NavigationGroup
                        group={cat}
                        handleCategoryClick={handleCategoryClick}
                      />
                    </div>
                  );
                })}
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    categories: state.category.storeCategories
  };
};

export default connect(mapStateToProps, actions)(NavigationMenu);
