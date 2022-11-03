import { PropsWithChildren } from "react";
import DEV_API_URL from "../../constants";
import ELoadStates from "../../enums";
import { QueryProps } from "../../types";
import useServerData from "./../../customHooks/useServerData";

interface Props {
  params: Record<string, string>[] | null;
}
const withUser = (WrappedComponent: React.ComponentType<any>) => {
  return (props: PropsWithChildren<Props>) => {
    const query = {
      url: DEV_API_URL,
      path: "user",
      params: props.params,
    } as QueryProps;

    const { resources, loadState } = useServerData({ query });

    if (loadState === ELoadStates.LOADING) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} user={resources} />;
  };
};

export default withUser;
