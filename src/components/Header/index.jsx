import { StyledContainer } from "../../styles/grid";
import { HeaderControls } from "./HeaderControls";
import Logo from "../../assets/Logo.png";
import { StyledHeader } from "./style";

export const Header = ({ setIsFavoriteModalVisible, favoritesList, setSearch }) => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <img src={Logo} alt="Logo" />
               <HeaderControls
                  setIsFavoriteModalVisible={setIsFavoriteModalVisible}
                  favoritesList={favoritesList}
                  setSearch={setSearch}
               />
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
