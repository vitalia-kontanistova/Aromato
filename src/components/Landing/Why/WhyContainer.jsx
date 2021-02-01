import Why from "./Why";
import withWidthRedirect from "../../../hoc/WithWidthRedirect";
import withWidthResizeHandle from "../../../hoc/WithWidthResizeHandle";
import { compose } from "redux";

export let WhyWithWidthRedirect = compose(
  withWidthRedirect,
  withWidthResizeHandle
)(Why);
