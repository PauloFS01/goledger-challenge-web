export const endpoints = {
  LIST_ASSETS: {
    url: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/search`,
  },
  NEW_ASSET: {
    url: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset`,
  },
  SEARCH_ASSET: {
    url: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/readAsset`,
  },
  UPDATE_ASSET: {
    url: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset`,
  },
  DELETE_ASSET: {
    url: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/deleteAsset`,
  },
};
