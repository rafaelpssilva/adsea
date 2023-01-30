import axios from "axios";
import React, { useState } from "react";

function DeleteAds() {
    const [idDelete, setIdDelete] = useState("");

    console.log(idDelete);
    return (
        <div className="border text-center p-3">
            <input
                type="number"
                name=""
                value={idDelete}
                onChange={(e) => setIdDelete(e.target.value)}
                id=""
                placeholder="selecionar ID da imagem"
            />
            <button
                onClick={() =>
                    axios.delete(
                        `https://63d591cedc3c55baf42a3ffe.mockapi.io/ads/${idDelete}`
                    )
                }
            >
                Deletar
            </button>
        </div>
    );
}

export default DeleteAds;
