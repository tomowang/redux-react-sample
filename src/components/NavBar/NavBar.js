/**
 * Created by tomo on 2016-06-22.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSideBar} from '../../actions'
import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

require('./NavBar.less');

@connect(
  state => ({
    expended: state.sidebar.collapsed
  }),
  dispatch => bindActionCreators({toggleSideBar}, dispatch)
)
export default class NavBar extends Component {
  static propTypes = {
    expended: PropTypes.bool.isRequired,
    toggleSideBar: PropTypes.func.isRequired
  };
  render () {
    const {expended, toggleSideBar} = this.props;
    return (
      <div className={'_navbar' + (expended ? ' _navbar-expended' : '')}>
        <ul className="navbar-l">
          <li>
            <a onClick={toggleSideBar}><i className="fa fa-align-justify"></i></a>
          </li>
          <li>
            <Link to="/"><i className="fa fa-bell-o"></i></Link>
          </li>
        </ul>

        <ul className="navbar-r">
          <li><a href="/logout">admin</a></li>
          <li><Link to="/logout"><i className="fa fa-sign-out"></i></Link></li>
        </ul>
      </div>
    )
  }
}
