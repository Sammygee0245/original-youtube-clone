import React,{useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch,faPaperclip,faBell,faMoon,faX ,faSun,faLemon,faChampagneGlasses,faCloud} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css"


let NavBar = ()=>{
    const nav = useRef()
    const side2 = useRef()
    const side1 = useRef()

    let [Toggle,setToggle] = useState(false)

    let [Find,setFind]= useState(false)

    let [InputValue,setInputValue] = useState("")

    let [Mode,setMode]=useState(false)

    let [Noti,setNoti]= useState(false)

    
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

    let notify =()=>{
        setNoti(!Noti)
    }

    let fancy = ()=>{
        document.body.style.backgroundImage = "linear-gradient(to right,#fff4a2,#aceccb)"
        nav.current.style.backgroundImage = "linear-gradient(to right,#fff4a2,#aceccb)"
        nav.current.style.color = "black"
        nav.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.backgroundImage = "linear-gradient(to right,#fff4a2,#aceccb)"
        side2.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.color = "black"
        setMode(!Mode)
    }


    let sun = ()=>{
        document.body.style.backgroundImage = "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))"
        nav.current.style.backgroundImage = "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))"
        nav.current.style.color = "black"
        nav.current.style.boxShadow = "0px 5px 5px rgb(223, 223, 223)"
        side2.current.style.backgroundImage = "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))"
        side2.current.style.boxShadow = "5px 5px 5px rgb(223, 223, 223)"
        nav.current.style.boxShadow = "5px 5px 5px rgb(223, 223, 223)"
        side2.current.style.color = "black"
        setMode(!Mode)
    }

    let hacker = ()=>{
        document.body.style.backgroundImage = "linear-gradient(to right,#FBC2EB,#78A3EB)"
        nav.current.style.backgroundImage = "linear-gradient(to right,#FBC2EB,#78A3EB)"
        nav.current.style.color = "black"
        nav.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.backgroundImage = "linear-gradient(to right,#FBC2EB,#78A3EB)"
        side2.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.color = "black"
        setMode(!Mode)
    }

    let dark = ()=>{
        document.body.style.backgroundImage = "linear-gradient(to right,#fdfbfa,#dbc6b4)"
        nav.current.style.backgroundImage = "linear-gradient(to right,#fdfbfa,#dbc6b4)"
        nav.current.style.color = "black"
        nav.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.backgroundImage = "linear-gradient(to right,#fdfbfa,#dbc6b4)"
        side2.current.style.boxShadow = "4px 4px 4px rgb(159, 184, 201)"
        side2.current.style.color = "black"
        setMode(!Mode)
    }

    


    return(
        <div>
            {Find && 
            <div className="find">
                <div className="sfind">
                    <input className="sfind-input" type="text" value={InputValue} onChange={CollectInput}/>
                    {Show &&<FontAwesomeIcon icon={faX} className="clear" onClick={clear}></FontAwesomeIcon>}
                    <FontAwesomeIcon className="fsearch font" onClick={cclick} icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>}


            <div ref={nav} className="nav">
                <div   className="top-nav">
                    <div className="logo-div" >
                    <FontAwesomeIcon className="font" title="menu" onClick={click} icon={faBars}></FontAwesomeIcon>
                        <div className="logo"></div>
                    </div>

                    <div className="search-div">
                        <div className="search"><input type="text" className="inputbox" placeholder="Click the search icon first" readOnly/><FontAwesomeIcon icon={faSearch} className="font" onClick={fclick}></FontAwesomeIcon></div>
                    </div>

                    <div className="profile-div">
                        <FontAwesomeIcon title="clip" className="font" icon={faPaperclip}></FontAwesomeIcon>

                        <FontAwesomeIcon title="notification"  className="font" onClick={notify} icon={faBell}></FontAwesomeIcon>
                        {Noti&& <div className="mode">Notii</div>}

                        <FontAwesomeIcon title="theme" className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        {Mode && 
                        <div  className="mode">
                            <div className="settheme"><h3>Set Theme</h3></div>

                            <div onClick={sun}  className="theme">
                            <FontAwesomeIcon className="font"  icon={faSun}></FontAwesomeIcon>
                            <p>Light Theme</p>
                            </div>
                          
                          <div onClick={dark}  className="theme">
                          <FontAwesomeIcon className="font"  icon={faChampagneGlasses}></FontAwesomeIcon>
                          <p>Champange Theme</p>
                          </div>

                          
                          <div onClick={fancy} className="theme">
                          <FontAwesomeIcon className="font" onClick={modes} icon={faLemon}></FontAwesomeIcon>
                          <p>Lemonade Theme</p>
                          </div>

                          
                          <div onClick={hacker} className="theme">
                          <FontAwesomeIcon className="font" onClick={modes} icon={faCloud}></FontAwesomeIcon>
                          <p>Paoazur Theme</p>
                          </div>

                           
                        </div>}
                    </div>

                </div>

                <div className="bottom-nav"></div>
            </div>


            <div ref={side2} className="sidenav2">
                <br/>
                <br/>
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                <br/>
                <br/>
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                <br/>
                <br/>
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                <br/>
                <br/>
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
            </div>


            {Toggle && 
            <div ref={side1} className="sidenav1">
                <div className="grd home-div">
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Short</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Subscription</p>
                    </div>
                </div>


                <div className="grd libary-div">
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Libary</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>History</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Your Videos</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Watch Later</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Liked videos</p>
                    </div>
                </div>


                <div className="grd subscription-div"></div>


                <div className="grd trending-div">
                <div className="side-nav-div">
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div> 
                </div>


                <div className="grd setting-div">
                <div className="side-nav-div">
                <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className="side-nav-div">
                    <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default NavBar