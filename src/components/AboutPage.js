/**
 * Created by tomo on 2016-06-21.
 */
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

@connect(
  undefined, {
    fetchCategories
  }
)
export default class AboutPage extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired
  };
  componentWillMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
      </div>
    )
  }
}
