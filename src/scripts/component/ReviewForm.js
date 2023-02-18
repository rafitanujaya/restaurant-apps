class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="form-resto" class="review-form card-form">
        
            <b>Add Your Review</b>
            
            <label for="customerName">Your Name</label>
            <input id="customerName" type="text" required>
            
            <label for="reviews">Review</label>
            <textarea id="reviews" required></textarea>
            
            <button id="submitReview">Add Review</button>
  
        </div>
    `;
  }
}

customElements.define('review-form', ReviewForm);
