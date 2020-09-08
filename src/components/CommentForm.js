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
    <form
      id="comment-form"
      className="comment-form comment-view-grid comments-card"
      onSubmit={handleSubmit}
    >
      <p className="comment-title">Leave a Reply</p>
      <hr className="comment-title-bottom-line" />
      <p className="comment-notes">
        <span id="email-notes">
          Your email adress will not be published. Required fields are marked
        </span>
        <span className="required"> *</span>
      </p>

      <p className="comment-form-comment">
        <label htmlFor="body"></label>
        <textarea
          id="body"
          name="body"
          value={data.body}
          onChange={handleInputChange}
          cols="45"
          rows="8"
          placeholder="Write comment..."
        />
      </p>

      <p className="comment-form-author">
        <label htmlFor="name">
          Name<span className="required"> *</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={handleInputChange}
          placeholder="Your name..."
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
          placeholder="Your email..."
        />
      </p>

      <p className="form-submit">
        <input id="submit" type="submit" value="Post Comment"></input>
      </p>
    </form>
  );
}

export default CommentForm;
