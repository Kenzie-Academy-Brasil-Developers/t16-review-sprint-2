import { StyledDesktopCategoryList, StyledDesktopCategoryListItem } from "./style";
import { StyledContainer } from "../../../styles/grid";

export const DesktopCategoryList = ({ categoriesList, filter, setFilter }) => {
   return (
      <StyledContainer>
         <StyledDesktopCategoryList>
            <StyledDesktopCategoryListItem active={filter === ""}>
               <button onClick={() => setFilter("")}>Recentes</button>
            </StyledDesktopCategoryListItem>
            {categoriesList.map((category) => (
               <StyledDesktopCategoryListItem key={category.id} active={filter === category.slug}>
                  <button onClick={() => setFilter(category.slug)}>
                     {category.label}
                  </button>
               </StyledDesktopCategoryListItem>
            ))}
         </StyledDesktopCategoryList>
      </StyledContainer>
   );
};
