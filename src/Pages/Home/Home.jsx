import { Link } from "react-router-dom";
import { getInfo } from "get";
import { useEffect, useState } from "react";


const Home = () => {
  const [response, setResponse] = useState({ results: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getInfo("/trending/movie/day?language=en-US");
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul>
      {response.results.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} >
            {movie.title};
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;