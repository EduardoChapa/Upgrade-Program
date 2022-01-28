import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

function useFetchGifs(searchTerm) {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(searchTerm)
        .then((gif) => {
            setState({
                data: gif,
                loading: false
            });
        });
    }, [searchTerm]);

    console.log(state)

    return state;
}

export default useFetchGifs;