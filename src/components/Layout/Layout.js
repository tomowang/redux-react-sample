/**
 * Created by tomo on 2016-06-22.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'

require('./Layout.less');

@connect(
  state => ({
    expended: state.sidebar.collapsed
  })
)
export default class Layout extends Component {
  static propTypes = {
    expended: PropTypes.bool.isRequired
  };
  render () {
    const {expended} = this.props;
    return (
      <div>
        <SideBar />
        <NavBar />
        <div className={'content-wrapper' + (expended ? ' content-wrapper-expanded' : '')}>{this.props.children}</div>
      </div>
    )
  }
}
