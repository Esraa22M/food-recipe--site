import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { Bookmarks } from "../bookmarks/bookmarks-component";
import "./primary-navigation.styles.scss";
export const PrimaryNavigation = () => {
  return (
    <nav className="primary--nav">
      <ul className="primary--nav__list">
        <li className="primary--nav__item">
          <button className="primary--nav__btn">
            <FontAwesomeIcon
              icon={faBookBookmark}
              className="highlight"
            ></FontAwesomeIcon>
            <span>bookmarks</span>
          </button>
          <Bookmarks />
        </li>
      </ul>
    </nav>
  );
};
