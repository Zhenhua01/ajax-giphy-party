// get the value of the search term

// call the api with the proper parameters
const API_KEY = '47SoFht1UKvCbTBankcrDzcTocRDu5Xr';
// append the dat to the dom

async function getGiphyData(e) {
  e.preventDefault();
  const searchTerm = $('input').val();

  const parameters = { params: { api_key: API_KEY, q: searchTerm, limit: 1 } };

  const response = await axios.get('https://api.giphy.com/v1/gifs/search', parameters);
  const imageSource = response.data.data[0];
  console.log(imageSource.embed_url);
  const $img = $('<img>');
  $img.attr('src', imageSource.embed_url);
  $img.attr({ width: '100px', height: "100px" });
  $('.giffs').append($img);


}
/** add event listener */
$('form').on('submit', getGiphyData);

