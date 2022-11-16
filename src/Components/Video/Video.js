import React from "react";
import "./Video.css"

let VidoeDiv = (props)=>{

    return(
        <div>
            <a href={props.url}  className="video-div">
                <div><img src={props.pic} alt="" className="video-pre"/></div>
                <div className="video-info">
                    <div><img src={props.pic}  alt="" className="channel-img"/></div>
                    <div>
                    <p className="video-title">{props.title}</p>
                    <p className="video-author">{props.name}</p>
                    </div>
                </div>
            </a>

            
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

