import i18next from "i18next";
import { authRoles } from "../auth";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "home-component",
    title: "HOME",
    translate: "HOME",
    type: "item",
    icon: "heroicons-outline:star",
    url: "",
  },
  {
    id: "example-component",
    title: "EXAMPLE",
    translate: "EXAMPLE",
    auth: authRoles.staff,
    type: "item",
    icon: "heroicons-outline:star",
    url: "example",
  },
  {
    id: "signIn-component",
    title: "SIGN IN",
    translate: "SIGN IN",
    auth: authRoles.onlyGuest,
    type: "item",
    icon: "heroicons-outline:star",
    url: "sign-in",
  },
  {
    id: "signUp-component",
    title: "SIGN UP",
    translate: "SIGN UP",
    auth: authRoles.onlyGuest,
    type: "item",
    icon: "heroicons-outline:star",
    url: "sign-up",
  },
];

export default navigationConfig;
