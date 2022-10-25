import React, { useReducer } from "react";
import ELoadStates from "../enums";
import { QueryProps } from "../types";

type ReducerAction = {
  type: ELoadStates;
  payload?: any;
};

const init = (data: any) => data;

const formatUrl = (query: QueryProps) => {
  const { url, path, params } = query;
  let queryParams = "";
  if (params) {
    queryParams = params
      .map((item) => {
        const [key, value] = Object.entries(item)[0];
        return `${value}`;
      })
      .join("/");
  }

  console.log(`${url}${path}/${queryParams}`);
  return `${url}${path}/${queryParams}`;
};

const reducer = (state: any, action: ReducerAction) => {
  switch (action.type) {
    case ELoadStates.LOADING:
      return {
        ...state,
        status: ELoadStates.LOADING,
      };
    case ELoadStates.SUCCESS:
      return {
        ...{ data: init(action.payload) },
        status: ELoadStates.SUCCESS,
      };
    case ELoadStates.ERROR:
      return {
        ...state,
        status: ELoadStates.ERROR,
      };
    default:
      return state;
  }
};

const initialState = {
  status: ELoadStates.NOT_LOADED,
  data: null,
};

const useServerData = ({ query }: { query: QueryProps }) => {
  const [resources, dispatchResources] = useReducer(
    reducer,
    initialState,
    init
  );

  const fetchResources = async () => {
    try {
      dispatchResources({ type: ELoadStates.LOADING });
      const url = formatUrl(query);
      const response = await fetch(url);
      const data = await response.json();
      dispatchResources({ type: ELoadStates.SUCCESS, payload: data });
    } catch (_error) {
      console.log({ _error });
      dispatchResources({ type: ELoadStates.ERROR });
    }
  };

  if (resources.status === ELoadStates.NOT_LOADED) {
    fetchResources();
  }

  console.log({ data: resources.data });

  return { resources: resources.data, loadState: resources.status };
};

export default useServerData;
