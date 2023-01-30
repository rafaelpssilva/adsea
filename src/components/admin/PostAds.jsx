import axios from "axios";
import React, { useState } from "react";

function PostAds() {
    const [linkImg, setLinkImg] = useState("");
    const [durationAds, setDurantionAds] = useState("00:00:00");
    const [effectAds, setEffectAds] = useState("slider");

    const dataAdsPost = {
        linkImg,
        durationAds,
        effectAds,
    };

    const sendPost = () =>
        axios.post(
            "https://63d591cedc3c55baf42a3ffe.mockapi.io/ads",
            dataAdsPost
        );

    return (
        <div className="flex flex-col gap-1 border">
            <h1 className="text-xl text-center">Post</h1>
            <input
                type="text"
                placeholder="link"
                value={linkImg}
                onChange={(e) => setLinkImg(e.target.value)}
            />

            <input
                type="time"
                name=""
                id=""
                value={durationAds}
                onChange={(e) => setDurantionAds(e.target.value)}
                step="2"
            />

            <select
                name=""
                id=""
                value={effectAds}
                onChange={(e) => setEffectAds(e.target.value)}
            >
                <option value="slider">Slider</option>
                <option value="fade-in">Fade In</option>
                <option value="out">Out</option>
            </select>

            <button onClick={() => sendPost()}>Enivar</button>

            <div className="m-auto">
                <h2>Pré visualizar</h2>
                <img src={linkImg} alt="" />
            </div>
        </div>
    );
}

export default PostAds;
