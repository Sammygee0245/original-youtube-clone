import React,{useState,useEffect} from "react";
import NavBar from "./Navbar/Nav";
import VidoeDiv from "./Video/Video";
import "./App.css"




function App() {


  let [VidState,setVidState]=useState([])

  let [InputValue,setInputValue]= useState("movies")

  let [Counter, setCounter] = useState(0)

  let replace=(place)=>{
    // console.log(place)
    setInputValue(place)
  }

  console.log(Counter)

  console.log(InputValue)

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q="+InputValue+"&from=2022-11-20&sortBy=publishedAt&apiKey=29759b6aaa11454996b41a8ba2527748")
    .then(res=>res.json())
    .then(data=>setVidState(data.articles))
    .catch(err=>console.log("Unavailable"))
  },[Counter])

  // let Tube = VidState.articles.map((tems)=>{
  //   return <VidoeDiv
  //   tems = {tems}
  //   />
  // })

let vv = VidState?.map((tems)=>{return (
  <VidoeDiv
  title = {tems.title}
  url = {tems.url}
  pic = {tems.urlToImage}
  name = {tems.source.name}
  key = {Math.floor(Math.random()*10000000000)}
  />
)})

console.log(VidState)


 

  return (
    <div className="App">
      <NavBar
      InputValue = {InputValue}
      setInputValue = {setInputValue}
      rep ={replace}
      counter = {Counter}
      setCounter = {setCounter}
      />
      
      <div className="grd1">
      {vv}
      </div>
    </div>
  );
}

export default App;

