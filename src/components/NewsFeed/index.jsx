import { useNewsContext } from "../../providers/NewsContext"
import { StyledTitleTwo } from "../../styles/typography"
import { NewsCard } from "./NewsCard"
import { StyledNewsFeed } from "./style"

export const NewsFeed = ({addNewToFavoriteList, setCurrentSelectedNew }) => {
    const { newsList, searchAndFilteredResults, search, setSearch, filter} = useNewsContext();
    
    const currentNewsList = search !== "" || filter !== "" ? searchAndFilteredResults : newsList
    
    return(
        <StyledNewsFeed>
            <StyledTitleTwo fontSize="one">{search !== "" ? `Resultados para: ${search}` : "Recentes"}</StyledTitleTwo>
            {search !== "" ? <button onClick={() => setSearch("")}>Limpar busca</button> : null}
            <ul>
                {currentNewsList.map(currentNew => (
                    <NewsCard key={currentNew.id} currentNew={currentNew} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectedNew={setCurrentSelectedNew} />
                ))}
            </ul>
        </StyledNewsFeed>
    )
}