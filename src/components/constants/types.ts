import { ReactElement, ReactNode, FC } from "react";

interface VoidStatelessComponent<P = {}> {
  (props: P): ReactElement | null;
}

export default VoidStatelessComponent;
