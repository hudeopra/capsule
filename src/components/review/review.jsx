import reviewOne from "../../assets/review1.png";
import reviewTwo from "../../assets/review2.png";
import reviewThree from "../../assets/review3.png";
import "./review.css"

const review = () => {
  const reviewData = [
    {
      id: 1,
      text: "Staying at Capsules® in the California desert redefined my retreat — modern design meets nature, and every sunset feels like a serene masterpiece.",
      image: reviewOne,
      name: "Marcus Simpson",
      location: "New York"
    },
    {
      id: 2,
      text: "Capsules® was the perfect desert hideaway — stylish, peaceful, and fully surrounded by stunning views day and night.",
      image: reviewTwo,
      name: "Lena Morrison",
      location: "Los Angeles"
    },
    {
      id: 3,
      text: "Capsules® was the perfect desert hideaway — stylish, peaceful, and fully surrounded by stunning views day and night.",
      image: reviewThree,
      name: "Jason Whitaker",
      location: "San Francisco"
    }
  ];

  return (
    <div>
      <section className="review">
        <span>Do people like us?</span>
        <div className="reviews">
          {reviewData.map((review) => (
          <div key={review.id} className="review-item">
            <h2>{review.text}</h2>
            <div className="review-user">
              <img src={review.image} alt="" />
              <div className="review-name">
                <h3>{review.name}</h3>
                <span>({review.location})</span>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="review-nav">
            <div className="review-arrows">
                <span className="arrow left">
                  <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="@h-[22.72]"><path d="M4.46308 10.0184L23.3584 10.0184L23.3584 11.9625L4.46308 11.9625L12.6335 20.1329L11.2087 21.5576L0.641602 10.9905L11.1902 0.441866L12.5964 1.84802L4.46308 10.0184Z" fill="rgba(244, 239, 231, 1)"></path></svg>
                </span>
                <span className="arrow right">
                  <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="@h-[22.72]"><path d="M19.5369 11.9816L0.641607 11.9816L0.641607 10.0375L19.5369 10.0375L11.3665 1.8671L12.7913 0.442382L23.3584 11.0095L12.8098 21.5581L11.4036 20.152L19.5369 11.9816Z" fill="rgba(244, 239, 231, 1)"></path></svg>
                </span>
            </div>
            <div className="review-bar">
                <span></span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default review;
