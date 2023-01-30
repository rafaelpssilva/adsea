import axios from "axios";
import React, { useState } from "react";

function PostConfig() {
    const [duration, setDuration] = useState(0);
    const [spped, setSpeed] = useState(0);
    const [animation, setAnimation] = useState("fade");

    const dataConfig = {
        duration,
        spped,
        animation,
    };

    const sendPost = () =>
        axios.post(
            "https://63d591cedc3c55baf42a3ffe.mockapi.io/configads",
            dataConfig
        );

    const deleteConfig = () =>
        axios.delete("https://63d591cedc3c55baf42a3ffe.mockapi.io/configads/1");
    return (
        <div className="flex flex-col">
            <label htmlFor="input">Duration: </label>
            <input
                id="duration"
                type="number"
                placeholder="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />

            <label htmlFor="input">Speed: </label>
            <input
                id="speed"
                type="number"
                placeholder="speed"
                value={spped}
                onChange={(e) => setSpeed(e.target.value)}
            />
            <select
                name=""
                id=""
                value={animation}
                onChange={(e) => setAnimation(e.target.value)}
            >
                <option value="zoom">Zoom</option>
                <option value="fade">Fade</option>
            </select>

            <button onClick={() => sendPost()}>Enivar</button>
            <button onClick={() => deleteConfig()}>Deletar Config</button>
        </div>
    );
}

export default PostConfig;
