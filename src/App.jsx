import { useState } from "react";
import { CategoryList } from "./components/CategoryList";
import { Header } from "./components/Header";
import { NewsFeed } from "./components/NewsFeed";
import { FavoriteModal } from "./components/FavoriteModal";
import { NewModal } from "./components/NewModal";
import { HeaderControls } from "./components/Header/HeaderControls";
import { MobileCategoryList } from "./components/CategoryList/Mobile";
import { api } from "./services/api";
import { useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledContainer } from "./styles/grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { DesktopCategoryList } from "./components/CategoryList/Desktop";

const App = () => {
   const localStorageFavoriteList = localStorage.getItem("@FAVORITELIST");
   const [favoritesList, setFavoritesList] = useState(
      localStorageFavoriteList ? JSON.parse(localStorageFavoriteList) : []
   );
   const [categoriesList, setCategoriesList] = useState([]);
   const [isFavoriteModalVisible, setIsFavoriteModalVisible] = useState(false);
   const [currentSelectedNew, setCurrentSelectedNew] = useState(null);   

   const loadCategories = async () => {
      try {
         const response = await api.get("/categories");
         setCategoriesList(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadCategories();
   }, []); //montagem

   useEffect(() => {
      localStorage.setItem("@FAVORITELIST", JSON.stringify(favoritesList));
   }, [favoritesList]); //atualização

   const addNewToFavoriteList = (currentNew) => {
      const newFavoriteList = [...favoritesList, currentNew];
      if (!favoritesList.some((favoriteNew) => favoriteNew.id === currentNew.id)) {
         setFavoritesList(newFavoriteList);
         toast.success("Notícia favoritada com sucesso!");
      } else {
         toast.error("Notícia já favoritada.");
      }
   };

   const removeNewFromFavoriteList = (currentNewId) => {
      const newFavoriteList = favoritesList.filter(
         (favoriteNew) => favoriteNew.id !== currentNewId
      );
      setFavoritesList(newFavoriteList);
      toast.success("Favorito removido com sucesso!");
   };

   return (
      <div className="App">
         <GlobalStyles />

         <Header>
            <HeaderControls
               favoritesList={favoritesList}
               setIsFavoriteModalVisible={setIsFavoriteModalVisible}
            />
         </Header>

         <CategoryList
            mobileList={
               <MobileCategoryList
                  categoriesList={categoriesList}                  
               />
            }
            desktopList={
               <DesktopCategoryList
                  categoriesList={categoriesList}
               />
            }
         />
         <StyledContainer>
            <NewsFeed              
               addNewToFavoriteList={addNewToFavoriteList}
               setCurrentSelectedNew={setCurrentSelectedNew}
            />
         </StyledContainer>
         {isFavoriteModalVisible ? (
            <FavoriteModal
               favoritesList={favoritesList}
               removeNewFromFavoriteList={removeNewFromFavoriteList}
               setIsFavoriteModalVisible={setIsFavoriteModalVisible}
            />
         ) : null}
         {currentSelectedNew ? (
            <NewModal
               currentSelectedNew={currentSelectedNew}
               setCurrentSelectedNew={setCurrentSelectedNew}
            />
         ) : null}
         <ToastContainer position="bottom-left" />
      </div>
   );
};

export default App;