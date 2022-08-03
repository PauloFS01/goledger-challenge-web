import axios from "axios";
import { endpoints } from "../endpoints";

export const useTeams = (options) => {};

export const fetchAssets = async (params) => {
  try {
    const { url } = endpoints.LIST_ASSETS;
    const response = await axios.post(url, params);

    return response.data.result;
  } catch (error) {
    return error.response;
  }
};

export const createAsset = async (params) => {
  try {
    const { url } = endpoints.NEW_ASSET;
    const response = await axios.put(url, params);

    return response.data.result;
  } catch (error) {
    return error.response;
  }
};

export const updateAsset = async (params) => {
  try {
    const { url } = endpoints.UPDATE_ASSET;
    const response = await axios.put(url, params);
    console.info(JSON.stringify(response.data.result));
    return response.data.result;
  } catch (error) {
    return error.response;
  }
};
export const deleteAsset = async (params) => {
  try {
    const { url } = endpoints.DELETE_ASSET;
    const response = await axios.post(url, params);

    return response.data.result;
  } catch (error) {
    return error.response;
  }
};
