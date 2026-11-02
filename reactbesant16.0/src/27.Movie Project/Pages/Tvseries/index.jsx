
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
import { tvseries, searchTvSeries } from '../../api';

const Tvseries = ({ search = '' }) => {
  const { currentPage, handleNext, handlePrev } = usePagination();
  const { debouncevalue } = useDebounce(search);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchTvSeries = async () => {
      try {
        setLoading(true);
        setError('');

        let series;

        if (debouncevalue.trim()) {
          series = await searchTvSeries({
            currentPage,
            search: debouncevalue.trim(),
          });
        } else {
          series = await tvseries(currentPage);
        }

        if (!cancelled) {
          setData(series || []);
        }
      } catch (err) {
        console.error('TV series request failed:', err);

        if (!cancelled) {
          setData([]);
          setError('Unable to load TV series. Please try again.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchTvSeries();

    return () => {
      cancelled = true;
    };
  }, [currentPage, debouncevalue]);

  return (
    <div className="Tvseries">
      {loading && <p>Loading TV series...</p>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && data.length === 0 && (
        <p>
          {debouncevalue.trim()
            ? `No TV series found for "${debouncevalue}".`
            : 'No TV series available.'}
        </p>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="movie-grid">
          {data.map((item) => (
            <MovieCard key={item.id}>
              <Link to={`/tv/${item.id}`}>
                <MovieImage
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : ''
                  }
                  alt={item.name || item.original_name || 'TV poster'}
                />
              </Link>

              <MovieTitle
                title={item.name || item.original_name}
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

export default Tvseries;
