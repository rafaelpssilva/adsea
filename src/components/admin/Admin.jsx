import React from "react";
import DeleteAds from "./DeleteAds";
import GetAds from "./GetAds";
import PostAds from "./PostAds";
import PostConfig from "./PostConfig";

function Admin() {
    return (
        <div>
            <PostAds />
            <GetAds />
            <DeleteAds />
            <PostConfig />
        </div>
    );
}

export default Admin;
