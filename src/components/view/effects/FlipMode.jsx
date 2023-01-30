import React from "react";

import { Flip } from "react-reveal";

function FlipMode() {
    return (
        <div className="w-full">
            <Flip>
                <img
                    src="https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg"
                    alt=""
                    className=""
                />
            </Flip>
        </div>
    );
}

export default FlipMode;
