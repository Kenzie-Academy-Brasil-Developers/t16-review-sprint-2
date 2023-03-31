import { NewsCard } from "./NewsCard"

export const NewsFeed = ({newsList, addNewToFavoriteList, setCurrentSelectedNew, searchAndFilteredResults, search, setSearch, filter}) => {
    const currentNewsList = search !== "" || filter !== "" ? searchAndFilteredResults : newsList
    
    return(
        <div>
            <h2>{search !== "" ? `Resultados para: ${search}` : "Recentes"}</h2>
            {search !== "" ? <button onClick={() => setSearch("")}>Limpar busca</button> : null}
            <ul>
                {currentNewsList.map(currentNew => (
                    <NewsCard key={currentNew.id} currentNew={currentNew} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectedNew={setCurrentSelectedNew} />
                ))}
            </ul>
        </div>
    )
}