import { useState } from "react";

export const HeaderControls = ({setIsFavoriteModalVisible, favoritesList, setSearch}) => {
    const [searchInput, setSearchInput] = useState("");

    const submit = (event) => {
        event.preventDefault();
        setSearch(searchInput);
        setSearchInput("");
    }
    
    return(
        <div>
            <div>
                <form onSubmit={submit}>
                    <input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div>
                <button onClick={() => setIsFavoriteModalVisible(true)}>Favoritos ({favoritesList.length})</button>
            </div>
        </div>
    )
}