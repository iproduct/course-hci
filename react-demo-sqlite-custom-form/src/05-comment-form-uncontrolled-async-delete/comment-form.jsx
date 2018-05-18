import React from "react";
import {PropTypes} from 'prop-types';

class CommentForm extends React.Component {
  authorInput;
  textIput;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCommentSubmit({ author: this.authorInput.value, text: this.textIput.value });
    this.authorInput.value = this.textIput.value = '';
  };

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" id="author" name="author" defaultValue=""
          ref={ref => this.authorInput = ref} />
        <input type="text" placeholder="Say something..." id="text" name="text" defaultValue=""
          ref={ref => this.textIput = ref} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func,
};

export default CommentForm;
