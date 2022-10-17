import VoidStatelessComponent from "../constants/types";

export const Divisor: VoidStatelessComponent<{ display: boolean }> = ({
  display,
}) => (display ? <hr /> : null);
