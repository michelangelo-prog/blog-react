import React from "react";

function CommentForm() {
  const initialState = {
    name: "",
    email: "",
    body: "",
    isSubmitted: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    alert("data submitted");
    event.preventDefault();
  };

  return (
    <div className="comment-view-grid comments-card">
      <form id="comment-form" className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-title">Leave a Reply</p>
        <hr className="comments-horizontal-line" />
        <p className="comment-notes">
          <span id="email-notes">
            Your email adress will not be published. Required fields are marked
          </span>
          <span className="required"> *</span>
        </p>

        <p className="comment-form-comment">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="body"
            name="body"
            value={data.body}
            onChange={handleInputChange}
            cols="45"
            rows="8"
          />
        </p>

        <p className="comment-form-author">
          <label htmlFor="name">
            Name<span className="required"> *</span>
          </label>
          <input
            id="name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
        </p>

        <p className="comment-form-email">
          <label htmlFor="email">
            Email Address<span className="required"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </p>

        <p className="form-submit">
          <input id="submit" type="submit" value="Post Comment"></input>
        </p>
      </form>
    </div>
  );
}

export default CommentForm;
