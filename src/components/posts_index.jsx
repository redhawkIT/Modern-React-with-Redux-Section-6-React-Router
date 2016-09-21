import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>List of blogs posts</div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)
// }
// export default connect(null, mapDispatchToProps)(PostsIndex)

// shortcut
export default connect(null, {fetchPosts})(PostsIndex)
