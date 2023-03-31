import { FavoriteCard } from "./FavoriteCard"
import { StyledFavoriteList } from "./style"

export const FavoriteList = ({favoritesList, removeNewFromFavoriteList}) => {
    return(
        <StyledFavoriteList>
            {favoritesList.map(favoriteNew => (
                <FavoriteCard key={favoriteNew.id} favoriteNew={favoriteNew} removeNewFromFavoriteList={removeNewFromFavoriteList} />
            ))}            
        </StyledFavoriteList>
    )
}