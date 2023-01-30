import axios from "axios";
import React, { useEffect, useState } from "react";

function GetAds() {
    const [dataAds, setDataAds] = useState([]);

    const getAds = async () => {
        try {
            const response = await axios.get(
                "https://63d591cedc3c55baf42a3ffe.mockapi.io/ads"
            );
            const ads = await response.data;
            setDataAds(ads);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAds();
    }, []);

    console.log(dataAds);
    return (
        <div className="border m-auto text-center text-2xl">
            <h1>Get</h1>
            <div>
                {dataAds.length > 0 &&
                    dataAds.map(({ linkImg, id }) => (
                        <div key={linkImg} className="w-max m-auto">
                            <img src={linkImg} alt="" className=" " />
                            <p>ID: {id}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default GetAds;
