import { StyledButton } from "../../../../styles/buttons";
import { StyledLabel, StyledTitleThree } from "../../../../styles/typography";
import { StyledFavoriteCard } from "./style";
import { MdOutlineDelete } from "react-icons/md";

export const FavoriteCard = ({ favoriteNew, removeNewFromFavoriteList }) => {
   return (
      <StyledFavoriteCard>
         <StyledLabel>{favoriteNew.category}</StyledLabel>
         <StyledTitleThree fontSize="three">{favoriteNew.title}</StyledTitleThree>
         <StyledButton onClick={() => removeNewFromFavoriteList(favoriteNew.id)}>
            <MdOutlineDelete /> Desfavoritar
         </StyledButton>
      </StyledFavoriteCard>
   );
};
