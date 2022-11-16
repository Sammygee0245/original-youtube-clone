import React from "react";
import "./Video.css"

let VidoeDiv = (props)=>{

    return(
        <div>
           
        <div>
            <a href={props.tems.url} className="video-div">
                <div><img src={props.tems.urlToImage} alt="" className="video-pre"/></div>
                <div className="video-info">
                    <div><img src={props.tems.urlToImage} alt="" className="channel-img"/></div>
                    <div>
                    <p className="video-title">{props.tems.title}</p>
                    <p className="video-author">{props.tems.source.name}</p>
                    </div>
                </div>
            </a>
        </div>

            
        </div>
    )
}

export default VidoeDiv

        // <div>
        //     <a href={props.tems.url} className="video-div">
        //         <div><img src={props.tems.urlToImage} alt="" className="video-pre"/></div>
        //         <div className="video-info">
        //             <div><img src={props.tems.urlToImage} alt="" className="channel-img"/></div>
        //             <div>
        //             <p className="video-title">{props.tems.title}</p>
        //             <p className="video-author">{props.tems.source.name}</p>
        //             </div>
        //         </div>
        //     </a>
        // </div>

