import { useMobile } from "../../hooks/useMobile"
import { DesktopCategoryList } from "./Desktop";
import { MobileCategoryList } from "./Mobile"

export const CategoryList = ({categoriesList, setFilter}) => {
    const isMobile = useMobile(800);

    return(
        <>
            {isMobile ? <MobileCategoryList categoriesList={categoriesList} setFilter={setFilter}/> : <DesktopCategoryList categoriesList={categoriesList} setFilter={setFilter} />}
            
        </>
    )
}