'use strict';

// API KEY from Giphy
const API_KEY = 'DYto4Jr52DSI9wmrVk9DUrLW2RON8vhV';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search';

/** When invoked, calls getGiphyData, finds gif link, and updates the DOM*/
async function createGiphy(evt) {
  evt.preventDefault();
  const giphyData = await getGiphyData();
  const gifLink = giphyData.data.data[1].images.original.url;
  updateDOM(gifLink);
}

/** Given a giphy data URL, appends the DOM with the gif */
function updateDOM(gifLink) {
  $('.gifs').append(`<img src = ${gifLink}>`);
}

/** Calls the giphy API and returns the GET data */
async function getGiphyData() {

  const searchTerm = $('input').val();

  const parameters = { params: { api_key: API_KEY, q: searchTerm, limit: 2 } };

  const giphyData = await axios.get(GIPHY_API_URL, parameters);

  return giphyData;
}

$('#delete').on('click', () => $('.gifs').empty());

$('form').on('submit', createGiphy);