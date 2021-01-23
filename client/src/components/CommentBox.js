import React, {Component} from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment"



class CommentBox extends Component {
    constructor() {
      super();
  
      this.state = {
        showComments: false,
        
        comments: [
          {
            id: 1,
            author: "CF-Admin",
            body: "Great Workout! Keep up the Amazing work!"
          }, 
        ]
      };
    }
  
    render() {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = "Show Comments";
  
      if (this.state.showComments) {
        buttonText = "Hide Comments";
        commentNodes = <div className="comment-list">{comments}</div>;
      }
  
      return (
        <div className="comment-box">
          <h4 className="cb-h4">Add a Comment</h4>
          <CommentForm addComment={this._addComment.bind(this)} />
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>
      );
    } // end render
  
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
  
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
  
    _getComments() {
      return this.state.comments.map((comment) => {
        return (
          <Comment author={comment.author} body={comment.body} key={comment.id} />
        );
      });
    }
  
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return "No comments yet";
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component

  export default CommentBox;