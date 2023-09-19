import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getInfo } from 'get';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [response, setResponse] = useState({ results: [] });

  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getInfo(`/movie/${id}`);
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <img src={response.results.backdrop_path} alt="movieImg" />
      <p>{response.results.original_title}</p>
      <p>{response.results.overview}</p>
    </div>
  );
};

export default MovieDetails;

// adult
// :
// false
// backdrop_path
// :
// "/23HvwdsAQeL0MxN9fm3d8m1NaPw.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 0
// genres
// :
// (2) [{…}, {…}]
// homepage
// :
// "https://www.amazon.com/dp/B0CC85MZD6"
// id
// :
// 1002185
// imdb_id
// :
// "tt21940010"
// original_language
// :
// "en"
// original_title
// :
// "A Million Miles Away"
// overview
// :
// "A migrant farmworker, José Hernández, defies all odds to fulfill his lifelong dream of becoming a NASA astronaut and going to space."
// popularity
// :
// 79.062
// poster_path
// :
// "/kMI3tgxLAZbzGOVlorUBva0kriS.jpg"
// production_companies
// :
// (3) [{…}, {…}, {…}]
// production_countries
// :
// (2) [{…}, {…}]
// release_date
// :
// "2023-09-08"
// revenue
// :
// 0
// runtime
// :
// 121
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "It takes more than a dream to reach the stars."
// title
// :
// "A Million Miles Away"
// video
// :
// false
// vote_average
// :
// 8.007
// vote_count
// :
// 74
