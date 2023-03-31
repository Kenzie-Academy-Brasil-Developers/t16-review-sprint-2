import { StyledLabel, StyledTitleThree } from "../../../styles/typography"

export const NewsCard = ({currentNew, addNewToFavoriteList, setCurrentSelectedNew}) => {
    return(
        <li>
            <button onClick={() => addNewToFavoriteList(currentNew)}>Favoritar</button>
            <StyledLabel>{currentNew.category}</StyledLabel>
            <StyledTitleThree fontSize="two">{currentNew.title}</StyledTitleThree>
            <button onClick={() => setCurrentSelectedNew(currentNew)}>Saiba mais</button>
        </li>
    )
}