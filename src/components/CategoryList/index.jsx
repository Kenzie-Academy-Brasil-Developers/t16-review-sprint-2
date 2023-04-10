import { useMobile } from "../../hooks/useMobile";

export const CategoryList = ({ mobileList, desktopList }) => {
   const isMobile = useMobile(800);

   return (
      <>
         {isMobile ? mobileList : desktopList}
      </>
   );
};
