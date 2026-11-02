
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  MovieCard,
  MovieImage,
  MovieRating,
  MovieTitle,
} from '../../Components/Card';
import Pagination from '../../Components/Pagination';
import usePagination from '../../hooks/usePagination';
import useDebounce from '../../hooks/useDebounce';
import { popularMovies, searchMovies } from '../../api';

const Home = ({ search = '' }) => {
  const { currentPage, handleNext, handlePrev } = usePagination();
  const { debouncevalue } = useDebounce(search);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError('');

        let movies;

        if (debouncevalue.trim()) {
          movies = await searchMovies({
            currentPage,
            search: debouncevalue.trim(),
          });
        } else {
          movies = await popularMovies(currentPage);
        }

        if (!cancelled) {
          setData(movies || []);
        }
      } catch (err) {
        console.error('Movie request failed:', err);

        if (!cancelled) {
          setData([]);
          setError('Unable to load movies. Please check your connection.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      cancelled = true;
    };
  }, [currentPage, debouncevalue]);

  return (
    <div className="Home">
      {loading && <p>Loading movies...</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && data.length === 0 && (
        <p>
          {debouncevalue.trim()
            ? `No movies found for "${debouncevalue}".`
            : 'No movies available.'}
        </p>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="movie-grid">
          {data.map((item) => (
            <MovieCard key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <MovieImage
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : ''
                  }
                  alt={item.title || item.original_title || 'Movie poster'}
                />
              </Link>

              <MovieTitle
                title={item.title || item.original_title}
              />

              <MovieRating
                rating={Number(item.vote_average || 0).toFixed(1)}
              />
            </MovieCard>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Home;
