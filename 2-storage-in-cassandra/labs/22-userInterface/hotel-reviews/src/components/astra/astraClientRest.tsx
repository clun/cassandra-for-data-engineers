const { createClient } = require("@astrajs/rest");

let astraClient: any = null;

/**
 * Initialization of REST API
 * @returns client
 */
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
 */
const getHotelsByCountry = async () => {
  const restClient = await getAstraClient();
  return restClient.searchTable("data_exploration", "hotels_by_city", {
    country: { $eq: "Italy" },
  });
};

export type {createClient};
exports = { getAstraClient, getHotelsByCountry };