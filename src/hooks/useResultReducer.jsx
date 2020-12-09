import { useReducer } from "react";

import Fuse from "fuse.js";

import { mockMaps, mockShapes } from "../constants/mockObjects";

const initialResultState = {
  fuseMaps: new Fuse(mockMaps, {
    keys: ["name", "ownerName", "collaborators"],
    includeScore: true,
  }),
  fuseShapes: new Fuse(mockShapes, {
    keys: ["name", "ownerName", "collaborators"],
    includeScore: true,
  }),
  searchResult: [],
};

function resultReducer(state, action) {
  switch (action.type) {
    case "updateFuseMaps":
      state.fuseMaps.setCollection(action.payload);
      return { ...state };
    case "updateFuseShapes":
      state.fuseShapes.setCollection(action.payload);
      return { ...state };
    case "updateMapsSearch":
      return {
        ...state,
        searchResult: state.fuseMaps
          .search(action.payload)
          .map((res) => res.item),
      };
    case "updateShapesSearch":
      return {
        ...state,
        searchResult: state.fuseShapes
          .search(action.payload)
          .map((res) => res.item),
      };
    case "resetSearchResult":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "filterFavorites":
      return {
        ...state,
        searchResult: state.searchResult.filter((object) =>
          object.favorite ? object : null
        ),
      };
    default:
      throw new Error();
  }
}

const useResultReducer = () => useReducer(resultReducer, initialResultState);

export default useResultReducer;
