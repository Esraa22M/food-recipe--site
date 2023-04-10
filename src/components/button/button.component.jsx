import "./button.styles.scss";
const Button = ({ children, buttonType, ...otherprops }) => {
  return (
    <button
      {...otherprops}
      className={`btn ${
        buttonType === "search" ? "btn--search" : "btn-direction"
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
