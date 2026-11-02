
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { movieDetails, Trailer,movieCast } from '../../api';
import Modal from '../../Components/Modal';
import useModal from '../../hooks/useModal';
import Button from '../../Components/Button';
import YouTube from 'react-youtube';
import './index.scss';

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const[cast,setCast]=useState([]);
  const [trailerData, setTrailerData] = useState('');


  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    movieDetails(id)
      .then((res) => {setData(res);})
  }, [id]);

 async function handleTrailer(movieId) {
  try {
    const res = await Trailer(movieId);
    if (res && res.length > 0) {
      setTrailerData(res[0].key);
      openModal();
    } else {
      console.log("Trailer not found");
    }
  } catch (error) {
    console.error("Error fetching trailer:", error);
  }
}

useEffect(() => {
    movieCast(id)
      .then((res) => {setCast(res)})
}, [id]);

 




  return (
    <div className="movie-details">
        <div className="movie-backdrop"/>
      <div className="movie-content">
        <div className="movie-left">
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title || 'Movie poster'}/>
        </div>


        <div className="movie-right">
          <span className="movie-label">
            MOVIE DETAILS
          </span>

          <h1 className="title">
            {data.original_title ||
              data.title ||
              'Untitled Movie'}
          </h1>

          <div className="movie-meta">
            <span className="vote">
              ★ {Number(data.vote_average || 0).toFixed(1)} / 10
            </span>

            <span className="release">
              Release: {data.release_date || 'Not available'}
            </span>
          </div>

          <h3 className="overview-heading">
            Overview
          </h3>

          <p className="overview">
            {data.overview ||
              'No overview available for this movie.'}
          </p>

          <div className="movie-extra">
            <span>Original language</span>
            <strong>
              {(data.original_language || 'N/A').toUpperCase()}
            </strong>
          </div>

          <div className='movie-extra-cast'>
            {cast.slice(0,5).map((item,index)=>{
              return(
                <img className='cast-img' key={item.id} src={`https://image.tmdb.org/t/p/original${item.profile_path}`}/>
              )
            })}
          </div>


          <div className="movie-extra">
            <Button onClick={() => handleTrailer(data.id)}>Watch Trailer</Button>
          </div>

        </div>
      </div>



      <Modal isOpen={isOpen} onClose={closeModal} title="Watch Trailer!">
        {trailerData && (<YouTube videoId={trailerData}/>)}
      </Modal>

    </div>
  );
};

export default Index;
