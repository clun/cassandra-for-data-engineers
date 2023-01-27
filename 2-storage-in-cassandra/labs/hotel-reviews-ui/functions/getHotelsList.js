const { getRestClient, requestWithRetry, wait } = require("./utils/astraRestClient");
const qs = require("qs");

exports.handler = async (event, context) => {

  // Parsing parameters
  var queryParameters = {};
  qs.stringify(event.queryStringParameters).split("&").forEach(function(part) {
    var item = part.split("=");
    queryParameters[item[0]] = decodeURIComponent(item[1]);
  });

  let pageSize = queryParameters.size
  if (pageSize === undefined) {
    pageSize =10;
  }

  const client = await getClient();
  let res;
  try {
    res = await client.get('/api/rest/v2/keyspaces/' 
        + process.env.ASTRA_DB_KEYSPACE 
        + '/hotels_by_city?where='
        + '\{"country":\{"$eq":"' + queryParameters.country + '"\}, '
        + '"city":\{"$eq":"' 
        + queryParameters.city + '"\}\}'
        + '&page-size=' + pageSize
        + '&fields=hotel_name,hotel_address,hotel_thumbnail,rate,hotel_price')
    const locations = Object.keys(res.data).map((item) => res.data[item]);
    return {
      headers: '{Content-Type: application/json}',
      statusCode: 200,
      body: JSON.stringify(locations),
      headers: {
        'Content-Type': 'application/json'
      },
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

async function getClient() {
  let client = await getRestClient();
  if (client === null) {
    wait(1000)
    return getClient()
  }
  return client
}
