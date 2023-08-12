const submitButton = document.querySelector("button");
const ratingInputs = document.querySelectorAll('input[name="rate"]');
const reviewTextArea = document.querySelector(".textarea textarea");
const reviewList = document.getElementById("reviewList");
const thankYouMessage = document.querySelector(".thank-you");
const widget = document.querySelector(".star-widget");

submitButton.addEventListener("click", submitReview);

function submitReview(event) {
  event.preventDefault();

  const selectedRating = document.querySelector('input[name="rate"]:checked');
  const reviewText = reviewTextArea.value;

  if (selectedRating && reviewText) {
    const review = {
      rating: selectedRating.id,
      text: reviewText,
    };

    saveReview(review);
    clearForm();
    displayReviews();
    showThankYouMessage();
  }
}

function saveReview(review) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  existingReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(existingReviews));
}

function clearForm() {
  ratingInputs.forEach((input) => (input.checked = false));
  reviewTextArea.value = "";
}

function displayReviews() {
  reviewList.innerHTML = "";
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  existingReviews.forEach((review, index) => {
    const listItem = createReviewListItem(review, index);
    reviewList.appendChild(listItem);
  });
}

function createReviewListItem(review, index) {
  const listItem = document.createElement("li");
  listItem.classList.add("review-item");

  const reviewDetails = document.createElement("div");
  reviewDetails.classList.add("review-details");

  const ratingSpan = document.createElement("span");
  ratingSpan.classList.add("review-rating");
  ratingSpan.textContent = `Rating: ${review.rating}`;

  const textSpan = document.createElement("span");
  textSpan.classList.add("review-text");
  textSpan.textContent = `Review: ${review.text}`;

  reviewDetails.appendChild(ratingSpan);
  reviewDetails.appendChild(textSpan);

  const deleteButton = createDeleteButton(() => deleteReview(index));

  listItem.appendChild(reviewDetails);
  listItem.appendChild(deleteButton);

  return listItem;
}

function createDeleteButton(deleteHandler) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteHandler);
  return deleteButton;
}

function deleteReview(index) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  existingReviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(existingReviews));
  displayReviews();
}

function showThankYouMessage() {
  widget.style.display = "none";
  thankYouMessage.style.display = "block";
}

displayReviews();
