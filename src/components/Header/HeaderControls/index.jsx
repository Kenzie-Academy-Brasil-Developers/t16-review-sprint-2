import { useState } from "react";
import { StyledHeaderControls } from "./style";
import { MdSearch, MdFavoriteBorder } from "react-icons/md"
import { useNewsContext } from "../../../providers/NewsContext";

export const HeaderControls = ({setIsFavoriteModalVisible, favoritesList}) => {
    const [searchInput, setSearchInput] = useState("");

    const { setSearch } = useNewsContext();

    const submit = (event) => {
        event.preventDefault();
        setSearch(searchInput);
        setSearchInput("");
    }
    
    console.log("Header Controls renderizou.")

    return(
        <StyledHeaderControls>
            <div>
                <form onSubmit={submit}>
                    <input type="search" value={searchInput} placeholder="Buscar" onChange={(e) => setSearchInput(e.target.value)} />
                    <button type="submit"><MdSearch size={26} /></button>
                </form>
            </div>
            <div>
                <button className="favoriteButton" onClick={() => setIsFavoriteModalVisible(true)}><MdFavoriteBorder size={28} /> ({favoritesList.length})</button>
            </div>
        </StyledHeaderControls>
    )
}