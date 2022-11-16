import React,{useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch,faPaperclip,faBell,faMoon,faX ,faSun} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css"





let NavBar = ()=>{

    const nav = useRef()
    const side2 = useRef()

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

    let moon = ()=>{
        document.body.style.backgroundColor = "rgb(212, 212, 212)"
        nav.current.style.backgroundColor = "rgb(212, 212, 212)"
        side2.current.style.backgroundColor = "rgb(212, 212, 212)"
        setMode(!Mode)
    }

    let sun = ()=>{
        document.body.style.backgroundColor = "white"
        nav.current.style.backgroundColor = "white"
        side2.current.style.backgroundColor = "white"
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
                        <FontAwesomeIcon className="font" icon={faPaperclip}></FontAwesomeIcon>

                        <FontAwesomeIcon className="font" onClick={notify} icon={faBell}></FontAwesomeIcon>
                        {Noti&& <div className="mode">Notii</div>}

                        <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
                        {Mode && 
                        <div  className="mode">
                          <FontAwesomeIcon className="font" onClick={moon} icon={faMoon}></FontAwesomeIcon>

                          <FontAwesomeIcon className="font" onClick={sun} icon={faSun}></FontAwesomeIcon>

                          <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>

                            <FontAwesomeIcon className="font" onClick={modes} icon={faMoon}></FontAwesomeIcon>
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
            <div className="sidenav1">
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