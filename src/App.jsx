import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListContainer from "./components/ListContainer"

function App() {
  const [noticias, setNews] = useState([])

  useEffect(()=>{
    const consultarAPI = ()=>{
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=5e66791470d043b2a0c9a6026bfa4915
      `;

        fetch(url)
         .then(res=>{
          console.log(res)
          return res.json()
        })
        .then(news => {
          setNews(news.articles)
        })
        .catch(err => console.log(err)) 
    }
    consultarAPI()
  },[])

  

  return (
    <>
      <Header titulo="Noticias del Mundo" />

      <ListContainer noticias={noticias}/>
    </>
  );
}

export default App