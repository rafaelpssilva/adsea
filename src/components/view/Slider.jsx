import React, { useEffect, useState } from "react";

import Carousel from "nuka-carousel/lib/carousel";
import axios from "axios";

function Slider() {
    const [dataAds, setDataAds] = useState([]);
    const [configs, setConfigs] = useState([]);

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

    const getConfigs = async () => {
        try {
            const responseConfig = await axios.get(
                "https://63d591cedc3c55baf42a3ffe.mockapi.io/configads"
            );

            const config = await responseConfig.data;

            setConfigs(config);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAds();
        getConfigs();
    }, []);

    return (
        <div className="h-screen">
            <Carousel
                wrapAround={true}
                autoplay={true}
                autoplayInterval={2000}
                animation={configs.length > 0 ? configs[0].animation : "fade"}
                speed={configs.length > 0 ? configs[0].speed : 2000}
            >
                {dataAds.length > 0 &&
                    dataAds.map(({ linkImg }) => (
                        <div key={linkImg}>
                            <img src={linkImg} alt="" />
                        </div>
                    ))}
            </Carousel>
        </div>
    );
}

export default Slider;
