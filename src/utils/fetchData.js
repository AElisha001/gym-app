export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16f30db64amsh3e45d239b977a62p1d2d5ajsn789e01ae0bd9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '16f30db64amsh3e45d239b977a62p1d2d5ajsn789e01ae0bd9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};





export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
};