import React , {Component} from "react"


class CommentForm extends Component {
    state = {
      author: "",
      body: ""
    };

    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input
              name="author"
              value={this.state.author}
              placeholder="Name"
              required
              ref={(input) => (this._author = input)}
              onChange={this.handleChange}
            ></input>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              placeholder="Comment"
              rows="4"
              required
              ref={(textarea) => (this._body = textarea)}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className=".button">
            <button className="commentbutton" type="submit">Post Comment</button>
          </div>
        </form>
      );
    } // end render
    
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    _handleSubmit(event) {
      event.preventDefault(); // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
      this.setState({ author: "", body: "" });

    }
  } // end CommentForm component
  
  export default CommentForm