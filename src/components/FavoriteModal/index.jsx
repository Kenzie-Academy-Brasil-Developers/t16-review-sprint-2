import { StyledTitleTwo } from "../../styles/typography"
import { FavoriteList } from "./FavoriteList"

export const FavoriteModal = ({favoritesList, removeNewFromFavoriteList}) => {
    return(
        <div role="dialog">
            <button>Fechar</button>
            <StyledTitleTwo fontSize="two">Favoritos</StyledTitleTwo>
            <FavoriteList favoritesList={favoritesList} removeNewFromFavoriteList={removeNewFromFavoriteList} />
        </div>
    )
}