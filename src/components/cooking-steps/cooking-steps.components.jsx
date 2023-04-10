import "./cooking-steps-styles.scss";
import { Link } from "react-router-dom";

export const CookingSteps = ({ publisher, sourceUrl }) => {
  return (
    <div className="cooking--steps">
      <h2 className="cooking--steps__header">cooking instructions</h2>
      <h3 className="cooking--steps__sub-header">
        This recipe made by
        <span>{publisher}</span>
      </h3>
      <p className="cooking--steps__info">
        {" "}
        To get the cooking instructions, kindly visit this link below.
      </p>
      <div className="btn-cooking--wrapper">
        {" "}
        <a
          href={sourceUrl}
          target="_blank"
          rel=" noreferrer"
          className="btn-cooking"
        >
          cooking steps
        </a>
      </div>
    </div>
  );
};
