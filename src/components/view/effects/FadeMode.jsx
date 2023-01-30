import React from "react";
import { Fade } from "react-reveal";

function FadeMode() {
    return (
        <div className="w-full">
            <Fade bottom>
                <img
                    src="https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg"
                    alt=""
                    className=""
                />
            </Fade>
        </div>
    );
}

export default FadeMode;
