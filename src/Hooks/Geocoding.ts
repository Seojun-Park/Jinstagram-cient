import React from "react";
import axios from "axios";
import { googleApi } from "../key";

export const getAddress = async (
  lat: number,
  lng: number,
  setLocation: React.Dispatch<React.SetStateAction<string>>
) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApi.key}`;
  try {
    const response = await axios.get(url);
    if (response) {
      setLocation(response.data?.results[0].address_components[2].long_name);
    } else {
      console.log(" no response");
    }
  } catch (e) {
    console.log(e);
  }
};
