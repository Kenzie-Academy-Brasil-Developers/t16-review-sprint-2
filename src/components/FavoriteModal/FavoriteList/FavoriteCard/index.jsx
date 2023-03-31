import { StyledButton } from "../../../../styles/buttons"
import { StyledLabel, StyledTitleThree } from "../../../../styles/typography"

export const FavoriteCard = ({favoriteNew, removeNewFromFavoriteList}) => {
    return(
        <li>
            <StyledLabel>{favoriteNew.category}</StyledLabel>
            <StyledTitleThree fontSize="three">{favoriteNew.title}</StyledTitleThree>
            <StyledButton onClick={() => removeNewFromFavoriteList(favoriteNew.id)}>Desfavoritar</StyledButton>
        </li>
    )
}