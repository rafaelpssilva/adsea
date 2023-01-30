import React from "react";
import { Zoom } from "react-reveal";

function ZoomMode() {
    return (
        <div className="w-full">
            <Zoom>
                <img
                    src="https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg"
                    alt=""
                    className=""
                />
            </Zoom>
        </div>
    );
}

export default ZoomMode;
