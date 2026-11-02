import axios from 'axios'

const BaseUrl = 'https://api.themoviedb.org/3/'
const Api_Key = 'ebd8e1a76a0916363b7941df57ffc0da'

export async function popularMovies(currentPage) {
  const response = await axios.get(`${BaseUrl}movie/popular`, {
    params: {
      api_key: Api_Key,
      page: currentPage,
    },
  });
  return response.data.results;
}

export async function tvseries(currentPage) { 
  const response = await axios.get(`${BaseUrl}trending/tv/day`, {
    params: {
      api_key: Api_Key,
      page: currentPage,
    },
  });
  return response.data.results;
}


export async function searchMovies({currentPage,search}) { 
  const response = await axios.get(`${BaseUrl}search/movie`, {
    params: {
      api_key: Api_Key,
      page: currentPage,
      query: search,
    },
  });
  return response.data.results;
}

export async function movieDetails(id) { 
  const response = await axios.get(`${BaseUrl}movie/${id}`, {
    params: {
      api_key: Api_Key
    },
  });
  return response.data;
}

export async function searchTvSeries({ currentPage, search }) {
  const response = await axios.get(`${BaseUrl}search/tv`, {
    params: {
      api_key: Api_Key,
      page: currentPage,
      query: search,
    },
  });

  return response.data.results;
}


export async function Trailer(id) {
  const response = await axios.get(`${BaseUrl}movie/${id}/videos`, {
    params: {
      api_key: Api_Key,
    },
  });

  return response.data.results;
}


export async function movieCast(id) { 
  const response = await axios.get(`${BaseUrl}movie/${id}/credits`, {
    params: {
      api_key: Api_Key
    },
  });
  return response.data.cast;
}