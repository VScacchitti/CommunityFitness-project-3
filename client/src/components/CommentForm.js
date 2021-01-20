import React , {Component} from "react"


class CommentForm extends Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input
              placeholder="Name"
              required
              ref={(input) => (this._author = input)}
            ></input>
            <br />
            <textarea
              placeholder="Comment"
              rows="4"
              required
              ref={(textarea) => (this._body = textarea)}
            ></textarea>
          </div>
          <div className=".button">
            <button className="commentbutton" type="submit">Post Comment</button>
          </div>
        </form>
      );
    } // end render
  
    _handleSubmit(event) {
      event.preventDefault(); // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  export default CommentForm