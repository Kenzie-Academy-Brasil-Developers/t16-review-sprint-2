import { HeaderControls } from "./HeaderControls"

export const Header = ({setIsFavoriteModalVisible, favoritesList, setSearch}) => {
   return(
      <header>
        <img src="" alt="Logo" />
        <HeaderControls setIsFavoriteModalVisible={setIsFavoriteModalVisible} favoritesList={favoritesList} setSearch={setSearch} />
      </header>
   )
}