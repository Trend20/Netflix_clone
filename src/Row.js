import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
	// movies hooks
	const [ movies, setMovies ] = useState([]);

	// run useEffect when a certain consition is met

	useEffect(
		() => {
			async function fetchData() {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				return request;
			}
			fetchData();
		},
		[ fetchUrl ]
	);

	console.log(movies);
	return (
		<div className="row">
			{/* title */}

			<h1>{title}</h1>
			{/* several row poster(s) */}
			<div className="row_posters">
				{movies.map((movie) => 
				<img className="row_poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />)}
			</div>

			{/* container > posters */}
		</div>
	);
}

export default Row;
