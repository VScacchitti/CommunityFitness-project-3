import React,{Component} from "react";


class Comment extends Component {
    render() {
      return (
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
        </div>
      );
    }

  }

  export default Comment;