import React, {Component} from 'react'
import {reduxForm} from 'redux-form' // kinda like connect
import {createPost} from '../actions/index'

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content}, handleSubmit} = this.props
    // const title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className='form-group'>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className='form-group'>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.title) {
    errors.title = 'Enter a username'
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
