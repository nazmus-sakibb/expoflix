import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchExpoflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    }, []);
    return (
        <header>

        </header>
    );
};

export default Banner;