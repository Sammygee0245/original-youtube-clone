import React,{useState,useRef} from "react";
import "./Nav.css"

let NavBar = ()=>{

    let [Toggle,setToggle] = useState(false)

    let [Find,setFind]= useState(false)

    let [InputValue,setInputValue] = useState("")

    let [Mode,setMode]=useState(false)

    let [Noti,setNoti]= useState(false)

    const nav = useRef()
    const top = useRef()
    const mode = useRef()
    const side2 = useRef()
    const side1 = useRef()


    let fclick = ()=>{
        setFind(!Find)
    }

    let cclick = ()=>{
        alert(InputValue)
        setFind(!Find)
    }



    let click = ()=>{
        setToggle(!Toggle)
    }

    let CollectInput = (event)=>{
        setInputValue(event.target.value)
    }

    let Show = InputValue.length>0

    let clear = ()=>{
        setInputValue("")
    }

    let modes = ()=>{
        setMode(!Mode)
    }

    let moon =()=>{
        nav.current.style.backgroundColor="rgb(42, 42, 46)"
        nav.current.style.boxShadow = "3px 3px 3px black "
        top.current.style.backgroundColor = "rgb(42, 42, 46)"
        top.current.style.color = "white"
        side2.current.style.backgroundColor="rgb(42, 42, 46)"
        side2.current.style.color = "white"
        side2.current.style.boxShadow = "3px 3px 3px black "
        side1.current.style.color = "rgb(42, 42, 46)"
        side1.current.style.boxShadow = "3px 3px 3px black "
        document.html.style.backgroundColor="rgb(42, 42, 46)"
        
    }

    let sun = ()=>{
        nav.current.style.backgroundColor="white"
        nav.current.style.boxShadow = "5px 5px 5px rgb(223, 223, 223) "
        top.current.style.backgroundColor = "white"
        top.current.style.color = "black"
        side2.current.style.backgroundColor="white"
        side2.current.style.color = "black"
        side2.current.style.boxShadow = "5px 0px 5px rgb(223, 223, 223) "
        side1.current.style.color = "black"
        side1.current.style.boxShadow = "5px 0px 5px rgb(223, 223, 223) "
        document.body.style.backgroundColor="rgb(242, 245, 245)"
    }

    let notify =()=>{
        setNoti(!Noti)
    }


    return(
        <div>
            {Find && 
            <div className="find">
                <div className="sfind">
                    <input className="sfind-input" type="text" value={InputValue} onChange={CollectInput}/>
                    {Show &&<i className="fa-solid fa-x clear" onClick={clear}></i>}
                    <i className="fa-solid fa-search fsearch" onClick={cclick}></i>
                </div>
            </div>}


            <div ref={nav}  className="nav">
                <div ref={top} className="top-nav">
                    <div className="logo-div" >
                        <i title="menu" className="fa-solid fa-bars" onClick={click}></i>
                        <div className="logo"></div>
                    </div>

                    <div className="search-div">
                        <div className="search"><input type="text" className="inputbox" placeholder="Click the search icon first" readOnly/><i className="fa-solid fa-search" onClick={fclick}></i></div>
                    </div>

                    <div className="profile-div">
                        <i title="create video" className="fa-solid fa-book"></i>

                        <i title="notification" className="fa-solid fa-bell" onClick={notify}></i>
                        {Noti&& <div  className="mode">Notii</div>}

                        <i title="modes" className="fa-solid fa-sun" onClick={modes}></i>
                        {Mode && 
                        <div ref={mode} className="mode">
                            <i className="fa-solid fa-moon" onClick={moon}></i>

                            <i className="fa-solid fa-sun" onClick={sun}></i>

                            <i className="fa-solid fa-moon" onClick={moon}></i>

                            <i className="fa-solid fa-moon" onClick={moon}></i>
                        </div>}
                    </div>

                </div>

                <div className="bottom-nav"></div>
            </div>


            <div ref={side2} className="sidenav2">
                <br/>
                <br/>
                <i className="fa-solid fa-home"></i>
                <br/>
                <br/>
                <i className="fa-solid fa-home"></i>
                <br/>
                <br/>
                <i className="fa-solid fa-home"></i>
                <br/>
                <br/>
                <i className="fa-solid fa-home"></i>
            </div>


            {Toggle && 
            <div ref={side1} className="sidenav1">
                <div className="grd home-div">
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-thunderstorm"></i>
                        <p>Short</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Subscription</p>
                    </div>
                </div>


                <div className="grd libary-div">
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Libary</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>History</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Your Videos</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Watch Later</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-car"></i>
                        <p>Liked videos</p>
                    </div>
                </div>


                <div className="grd subscription-div"></div>


                <div className="grd trending-div">
                <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div> 
                </div>


                <div className="grd setting-div">
                <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                        <i className="fa-solid fa-home"></i>
                        <p>Home</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default NavBar