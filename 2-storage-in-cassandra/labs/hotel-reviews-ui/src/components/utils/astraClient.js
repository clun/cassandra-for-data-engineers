/*
const { createClient } = require("@astrajs/rest");

let astraClient = null;

const getAstraClient = async () => {
  if (astraClient === null) {
     astraClient = await createClient({
        astraDatabaseId: 'f861e773-ab1b-4313-bf3c-8a47412c9ecd',
        astraDatabaseRegion: 'us-east1',
        applicationToken: 'AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b'    
      },
      30000
    );
  }
  return astraClient;
};

/**
 * Accessing the hotels.
 * @returns 
 *    hotels
const getHotelsByCountry = async () => {
  const restClient = await getAstraClient();
  return restClient.searchTable("data_exploration", "hotels_by_city", {
    country: { $eq: "Italy" },
  });
};

exports = { getAstraClient, getHotelsByCountry };
*/

const fetch = require('node-fetch')

const getHotelsByCountry = async () => {

  const response = await fetch("https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city/rows?pageSize=20", {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": "AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b"
    }
  })

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
  
};

