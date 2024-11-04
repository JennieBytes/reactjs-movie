import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
	const { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState();

	const getMovieDetail = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
		);

		const json = await response.json();

		setDetail(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMovieDetail();
	});

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<img src={detail.medium_cover_image} alt=''></img>
					<h2>
						{detail.title} ({detail.year})
					</h2>
					<h4>Rating: {detail.rating}</h4>
					<h4>Runtime: {detail.runtime}</h4>
					{detail.genres && <h4>Genres: {detail.genres.join(', ')}</h4>}
					{detail.description_full ? (
						<h4>Description: {detail.description_full}</h4>
					) : null}
				</div>
			)}
		</div>
	);
}
export default Detail;
