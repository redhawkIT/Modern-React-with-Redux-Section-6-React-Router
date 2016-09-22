import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form' // kinda like connect
import {createPost} from '../actions/index'
import {Link} from 'react-router'

class PostsNew extends Component {
  // Context
  // Occasionally, you want to pass data through the component tree without
  // having to pass the props down manually at every level.
  // React's "context" feature lets you do this.

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    // action creator that creates a promise
    this.props.createPost(props).then(() => {
      // blog post has been created, navigate the user to the index
      // we navigate by calling this.context.router.path with the
      // new path to navigate to
      this.context.router.push('/')
    })
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit} = this.props
    // const title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className='text-help'>
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className='text-help'>
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.categories) {
    errors.categories = 'Enter categories'
  }
  if (!values.title) {
    errors.title = 'Enter a username'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }
  return errors
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is from config, 2nd is mapStatetoProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'], // watch for these inputs
  validate
}, null, {createPost})(PostsNew)

// user types somthing in ... record it on application state

// state === {
//   form: {
//     PostsNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }
