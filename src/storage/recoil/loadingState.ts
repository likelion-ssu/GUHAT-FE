import { atom } from "recoil";

export const loadingState = atom({
    key: "Recoil-loadingStore",
    default: true,
});

export const errorState = atom<string | null>({
    key: "Recoil-errorStore",
    default: null,
});
