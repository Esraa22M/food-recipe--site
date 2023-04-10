import "./recipe-preview-fig.styles.scss";
export const RecipePreviewFigure = ({ image, title }) => {
  return (
    <figure className="recipe-preview__fig">
      <img
        src={image}
        alt={title}
        className="recipe-preview__fig__img"
        loading="lazy"
      />
      <h2 className="recipe-preview__fig__title">
        <span>{title}</span>
      </h2>
    </figure>
  );
};
