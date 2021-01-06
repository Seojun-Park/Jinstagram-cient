import { Client } from "@googlemaps/google-maps-services-js";
import { googleApi } from "../key";

const client = new Client({});

export const getAddress = (lat: number, lng: number) => {
  client
    .elevation({
      params: {
        locations: [{ lat, lng }],
        key: googleApi.key
      },
      timeout: 1000
    })
    .then((r) => {
      console.log(r.data.results[0].elevation);
    })
    .catch((e) => {
      console.log(e.response.data.error_message);
    });
};
