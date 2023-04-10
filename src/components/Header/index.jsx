import { StyledContainer } from "../../styles/grid";
import Logo from "../../assets/Logo.png";
import { StyledHeader } from "./style";

export const Header = ({ children }) => {
   console.log("Header renderizou");
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <img src={Logo} alt="Logo" />
               {children}
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
