const fetch = require('node-fetch')
const qs = require("qs");

/**
 * Will be exposed as a Rest API bith GET and POST.
 * 
 * @param event http request
 * @returns http output
 */
exports.handler = async function (event) {
  
  let queryUrl = "https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city?pageSize=20"
  
  // Parsing parameters
  var queryParameters = {};
  qs.stringify(event.queryStringParameters).split("&").forEach(function(part) {
    var item = part.split("=");
    queryParameters[item[0]] = decodeURIComponent(item[1]);
  });
  console.log(queryParameters)

  // Build a REST WHERE CLAUSE BASE 
  let where = "{"
  let first = true;
  if (typeof queryParameters.country !== 'undefined') {
    if (first) {
      first = false;
    } else {
      where = where + ',';
    }
    where = where + '"country":{"$eq":"' + queryParameters.country +'"}';
  }
  if (typeof queryParameters.city !== 'undefined') {
    if (first) {
      first = false;
    } else {
      where = where + ',';
    }
    where = where + '"city":{"$eq":"' + queryParameters.city +'"}';
   
  }
  where = where + '}';

  console.log(queryUrl + '&where=' + encodeURIComponent(where));
  
  const response = await fetch(queryUrl + '&where=' + encodeURIComponent(where), {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "x-cassandra-token": "AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b"
          }
        }
  )

   try {
    const responseBody = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
}