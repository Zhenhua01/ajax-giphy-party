'use strict';

// get the value of the search input

// call the api with the proper parameters object

// append the data link to the DOM

// API KEY from Giphy
const API_KEY = '47SoFht1UKvCbTBankcrDzcTocRDu5Xr';

/** Initialize the app */
function initApp() {

  /** add event listener submit button*/
  $('form').on('submit', getGiphyData);

  /** add event listener on delete button */
  $('#delete').on('click', () => {
    $('.giffs').html('');
  })
}

/** Given a giphy data URL, appends the dom with the gif */
function updateDOM(giphyData) {
  const imageLink = giphyData.data[0].images.original.url;
  $('.giffs').append(`<img src = ${imageLink}>`);
}

/** When invoked, calls the giphy API and returns the URL for the gif */
async function getGiphyData(evt) {
  evt.preventDefault();
  const searchTerm = $('input').val();

  const parameters = { params: { api_key: API_KEY, q: searchTerm, limit: 1 } };

  const response = await axios.get('https://api.giphy.com/v1/gifs/search', parameters);

  updateDOM(response.data);
}

initApp();