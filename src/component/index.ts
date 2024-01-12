import Loadable from "react-loadable";
import { Loading } from "./Loading";

export const AsyncOneCounter = Loadable({
    loader: () => import("./OneCounter"),
    loading: Loading,
});

export const AsyncTwoCounter = Loadable({
    loader: () => import("./TwoCounter"),
    loading: Loading,
});