import { ComponentType } from "react";
import { JsxElement } from "typescript";

export default interface routerType {
    name: string;
    path: string;
    component: JSX.Element;
}
