import { createContext, useState, useEffect, useContext } from "react"; // 1 importar create context
import { api } from "../services/api";

export const NewsContext = createContext({}); // 2 criar a nossa variável de contexto

// 3 criar o nosso componente de provider e trazer a nossa lógica dentro do mesmo
export const NewsProvider = ({ children }) => {
   const [newsList, setNewsList] = useState([]);
   const [search, setSearch] = useState("");
   const [filter, setFilter] = useState("");

   const searchAndFilteredResults = newsList.filter((currentNew) =>
      (currentNew.title.toLowerCase().includes(search.toLowerCase()) ||
         currentNew.category.toLowerCase().includes(search.toLowerCase())) &&
      filter === ""
         ? true
         : currentNew.category === filter
   );

   const loadNews = async () => {
      try {
         const response = await api.get("/news");
         setNewsList(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadNews();
   }, []);

   //prop value age como um exportador
   return (
      <NewsContext.Provider
         value={{
            searchAndFilteredResults,
            newsList,
            search,
            setSearch,
            filter,
            setFilter,
         }}
      >
         {children}
      </NewsContext.Provider>
   );
};

//5 (opcional) - cria um hook específico para o seu contexto para minimizar importações
export const useNewsContext = () => {
   const value = useContext(NewsContext);

   return value;
}

//export const useNewsContext = () => useContext(NewsContext);