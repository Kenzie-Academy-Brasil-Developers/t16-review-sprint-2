import { useMobile } from "../../hooks/useMobile";
import { DesktopCategoryList } from "./Desktop";
import { MobileCategoryList } from "./Mobile";

export const CategoryList = ({ categoriesList, filter, setFilter }) => {
   const isMobile = useMobile(800);

   return (
      <>
         {isMobile ? (
            <MobileCategoryList categoriesList={categoriesList} setFilter={setFilter} />
         ) : (
            <DesktopCategoryList
               categoriesList={categoriesList}
               filter={filter}
               setFilter={setFilter}
            />
         )}
      </>
   );
};
