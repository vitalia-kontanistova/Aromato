import HowItLooks from "./HowItLooks";
import withWidthRedirect from "../../../hoc/WithWidthRedirect";
import withWidthResizeHandle from "../../../hoc/WithWidthResizeHandle";
import { compose } from "redux";

export let HowItLooksWithWidthRedirect = compose(
  withWidthRedirect,
  withWidthResizeHandle
)(HowItLooks);
