import React from "react";
import { QueryProps } from "../../types";
import useServerData from "../../customHooks/useServerData";
import ELoadStates from "../../enums";

interface ResourcesLoaderProps {
  children: React.ReactElement<{ resources: any }>;
  query: QueryProps;
  resourceName: string;
}

const ResourcesLoader: React.FC<ResourcesLoaderProps> = (props) => {
  const { children, query, resourceName } = props;

  const { resources, loadState } = useServerData({ query });

  if (
    loadState === ELoadStates.LOADING ||
    loadState === ELoadStates.NOT_LOADED
  ) {
    return <div>Loading...</div>;
  }

  if (loadState === ELoadStates.ERROR) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resources });
        }
      })}
    </>
  );
};

export default ResourcesLoader;
