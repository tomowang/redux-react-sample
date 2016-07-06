/**
 * Created by tomo on 2016-06-22.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'

require('./SideBar.less');
let logo = require('../../images/logo.png');

@connect(
  state => ({
    collapsed: state.sidebar.collapsed
  })
)
export default class SideBar extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  };

  render () {
    const {collapsed} = this.props;
    return (
      <div className={'sidebar' + (collapsed ? ' sidebar-collapsed' : '')}>
        <header><img src={logo} className="collapsed-hide"/></header>
        <ul className="sidebar-list">
          <li>
            <Link to="/about">
              <i className="fa fa-user"></i><span className="collapsed-hide">用户管理</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
