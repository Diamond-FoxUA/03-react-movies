import axios from "axios"
import type { Movie } from "../components/types/movie"

interface MoviesHttpResponce {
  data: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response = await axios.get<MoviesHttpResponce>(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        query,
        limit: 10,
        page: 1
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzgzZTE1ODFmMDkzYTMyY2RhMzUwYjI0YjZhMDgwZSIsIm5iZiI6MTc2MjI2OTY2NC43NjQ5OTk5LCJzdWIiOiI2OTBhMTllMDAxMjlhMjAzZjk4MmFkNTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TKk2gm8-t-R0bPYAje8Ch_p26oAqbQz4ZcccjJaLSjM'
      }
    
  });
  return response.data;
};