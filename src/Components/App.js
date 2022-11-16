import React,{useState,useEffect} from "react";
import NavBar from "./Navbar/Nav";
import VidoeDiv from "./Video/Video";
import "./App.css"



function App() {

  let [VidState,setVidState]=useState()

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=movies&from=2022-11-16&sortBy=publishedAt&apiKey=29759b6aaa11454996b41a8ba2527748")
    .then(res=>res.json())
    .then(data=>setVidState(data))
  },[])

  let Tube = VidState.articles.map((tems)=>{
    return <VidoeDiv
    tems = {tems}
    />
  })

console.log(VidState.articles.map((tems)=>{return tems}))






  

  



 

  return (
    <div className="App">
      <NavBar/>
      <div className="grd1">
       {Tube}
      </div>
    </div>
  );
}

export default App;



// let [News,setNews]=useState()

// useEffect(()=>{
//   fetch("https://newsapi.org/v2/everything?q=entertainment&from=2022-11-13&sortBy=publishedAt&apiKey=29759b6aaa11454996b41a8ba2527748").then(res=>res.json()).then(data=>setNews(data))
// },[])

// let vid = News.articles.map((tems)=>{
//   return (
//     <VidoeDiv
//     tems = {tems}
//     />
//   )
// })

// console.log(vid)
