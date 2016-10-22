import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router'

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to='/posts/new' className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)
// }
// export default connect(null, mapDispatchToProps)(PostsIndex)
/*

[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):
If an object is passed, each function inside it will be assumed to be a Redux
action creator. An object with the same function names, but with every action
creator wrapped into a dispatch call so they may be invoked directly, will be
merged into the component’s props. If a function is passed, it will be given
dispatch. It’s up to you to return an object that somehow uses dispatch to bind
action creators in your own way. (Tip: you may use the bindActionCreators()
helper from Redux.) If you omit it, the default implementation just injects
dispatch into your component’s props. If ownProps is specified as a second
argument, its value will be the props passed to your component, and
mapDispatchToProps will be re-invoked whenever the component receives new props.
*/

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
