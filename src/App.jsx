import { useState } from "react";
import { CategoryList } from "./components/CategoryList";
import { Header } from "./components/Header";
import { NewsFeed } from "./components/NewsFeed";
import { FavoriteModal } from "./components/FavoriteModal";
import { NewModal } from "./components/NewModal";
import { api } from "./services/api";
import { useEffect } from "react";

const App = () => {
   const localStorageFavoriteList = localStorage.getItem("@FAVORITELIST");
   const [newsList, setNewsList] = useState([]);
   const [favoritesList, setFavoritesList] = useState(localStorageFavoriteList ? JSON.parse(localStorageFavoriteList): []);
   const [categoriesList, setCategoriesList] = useState([]);
   const [isFavoriteModalVisible, setIsFavoriteModalVisible] = useState(false);
   const [currentSelectedNew, setCurrentSelectedNew] = useState(null);
   const [search, setSearch] = useState(""); //termo de busca
   const [filter, setFilter] = useState("");
   
   /*
   const searchAndFilteredResults = newsList.filter((currentNew) =>
      currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
      currentNew.category.toLowerCase().includes(search.toLowerCase())
   );
   */

   const searchAndFilteredResults = newsList.filter((currentNew) =>
      (currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
      currentNew.category.toLowerCase().includes(search.toLowerCase())) &&
      filter === "" ? true : currentNew.category === filter
   );

   const loadNews = async () => {
      try {
         const response = await api.get("/news");
         setNewsList(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   const loadCategories = async () => {
      try {
         const response = await api.get("/categories");
         setCategoriesList(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadNews();
      loadCategories();
   }, []); //montagem

   useEffect(() => {
    localStorage.setItem("@FAVORITELIST", JSON.stringify(favoritesList))
   }, [favoritesList]) //atualização

   const addNewToFavoriteList = (currentNew) => {
      const newFavoriteList = [...favoritesList, currentNew];
      if (!favoritesList.some((favoriteNew) => favoriteNew.id === currentNew.id)) {
         setFavoritesList(newFavoriteList);
      } else {
         console.log("Notícia já favoritada.");
      }
   };

   const removeNewFromFavoriteList = (currentNewId) => {
      const newFavoriteList = favoritesList.filter(
         (favoriteNew) => favoriteNew.id !== currentNewId
      );
      setFavoritesList(newFavoriteList);
   };

   return (
      <div className="App">
        {filter}
         <Header
            setIsFavoriteModalVisible={setIsFavoriteModalVisible}
            favoritesList={favoritesList}
            setSearch={setSearch}
         />
         <CategoryList categoriesList={categoriesList} setFilter={setFilter} />
         <NewsFeed
            newsList={newsList}
            searchAndFilteredResults={searchAndFilteredResults}
            search={search}
            setSearch={setSearch}
            filter={filter}
            addNewToFavoriteList={addNewToFavoriteList}
            setCurrentSelectedNew={setCurrentSelectedNew}
         />
         {isFavoriteModalVisible ? (
            <FavoriteModal
               favoritesList={favoritesList}
               removeNewFromFavoriteList={removeNewFromFavoriteList}
            />
         ) : null}
         {currentSelectedNew ? (
            <NewModal
               currentSelectedNew={currentSelectedNew}
               setCurrentSelectedNew={setCurrentSelectedNew}
            />
         ) : null}
      </div>
   );
}

export default App;
