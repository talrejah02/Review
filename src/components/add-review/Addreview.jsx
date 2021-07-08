import React, { useState } from "react";
import { auth, firestore } from "../../firebase/Config";
import firebase from "firebase/app";
import "./addreview.css";
import reviewsvg from "../../assets/review.svg";

function AddReview() {
  const [review, setreview] = useState({
    title: "",
    description: "",
    summary: "",
    adding: false,
  });
  async function addNewReview(e) {
    e.preventDefault();
    if ((review.title.length < 4 && review.description.length < 4)) {
      alert("Please provide title and description");
    } else {
      await firestore.collection(`/review`).add({
        title: review.title,
        description: review.description,
        summary: review.summary,
        userid: auth.currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setreview({ title:"", description:"" ,summary:"", adding: false });
    }
  }
  return (
    <section className="Addreview">
      <section className="head">
        <img className="review-svg" src={reviewsvg} />
        <span>Add Review</span>
      </section>
      <button onClick={(e) => setreview({ ...review, adding: !review.adding })}>
        {" "}
        + New review
      </button>

      {review.adding && (
        <section className="review-form">
          <form>
            <label for="title">Enter Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              onChange={(e) => setreview({ ...review, title: e.target.value })}
            ></input>

            <label for="title">Enter Description</label>
            <textarea
              id="description"
              placeholder="description"
              onChange={(e) =>
                setreview({ ...review, description: e.target.value })
              }
            ></textarea>

            <label for="summary">Enter Summary</label>
            <textarea
              placeholder="summary"
              id="summary"
              onChange={(e) =>
                setreview({ ...review, summary: e.target.value })
              }
            ></textarea>
          </form>
          <button onClick={(e) => addNewReview(e)}>Sumbit</button>
          {/* <button onClick={(e) => addNewReview(e)}>Logout</button> */}
        </section>
      )}
    </section>
  );
}

export default AddReview;
