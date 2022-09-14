const axios = require('axios').default;
var item = 'flour';

var settings = {
  
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/api.kroger.com/v1/connect/oauth2/token",
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic Zm9vZGFwcGRpZ2l0YWxjcmFmdHMtMzc3MDhhM2IxMTllMDZjNzZkMGMyZWMyNjFhZGFkYTc0NjY0MTYzMTQ2NzQ4NTk0NDY5OjQ2MVF5OEhUdjl0WWdyS3Jwc2o4bVpHaS1HbUhQQ3NtWEVjeDJpQkg="
  },
  "data": {
    "grant_type": "client_credentials",
    "scope": "product.compact"
  }
}


// $.ajax(settings).done(function (response) {return response})
// .then(token => {getProductInfo(token)})
function callKroger() {
  console.log('hello')
  axios.post('https://api.kroger.com/v1/connect/oauth2/token', {
    headers: {
    Authorization: 'Basic ' + "Zm9vZGFwcGRpZ2l0YWxjcmFmdHMtMzc3MDhhM2IxMTllMDZjNzZkMGMyZWMyNjFhZGFkYTc0NjY0MTYzMTQ2NzQ4NTk0NDY5OjQ2MVF5OEhUdjl0WWdyS3Jwc2o4bVpHaS1HbUhQQ3NtWEVjeDJpQkg=" //the token is a variable which holds the token
    }
  })
  .then(function (response) {
  console.log(response);
  })
.catch(function (error) {
  console.log(error);
});
//   axios.post("https://api.kroger.com/v1/products?filter.term=milk")
// .then(response => {console.log(response)})
}


// .then(data => {console.log(data)})

callKroger()




function getProductInfo(token) {
  console.log(token)
  settings = {
    
    "async": true,
    "crossDomain": true,
    "url": buildProductLink(),
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer " + token.access_token
    }
    
  }

  $.ajax(settings).done(function (data) {
    console.log(data);
    return data
  })
  .then(data => {addPrices(data)})
}


function buildProductLink() {
  return "http://localhost:8080/http://api.kroger.com/v1/products?filter.term=" + item + "&filter.locationId=01400413";
}

function addPrices(data) {
  
}