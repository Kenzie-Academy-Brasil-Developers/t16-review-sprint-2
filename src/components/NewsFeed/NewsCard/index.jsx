import { StyledLabel, StyledTitleThree } from "../../../styles/typography";
import { StyledNewsCard } from "./style";
import { MdFavoriteBorder } from "react-icons/md";

export const NewsCard = ({ currentNew, addNewToFavoriteList, setCurrentSelectedNew }) => {
   return (
      <StyledNewsCard>
         <button
            className="favoriteButton"
            onClick={() => addNewToFavoriteList(currentNew)}
         >
            <MdFavoriteBorder size={28} />
         </button>
         <div className="contentBox">
            <StyledLabel>{currentNew.category}</StyledLabel>
            <StyledTitleThree fontSize="two">{currentNew.title}</StyledTitleThree>
            <button onClick={() => setCurrentSelectedNew(currentNew)}>Saiba mais</button>
         </div>
      </StyledNewsCard>
   );
};
