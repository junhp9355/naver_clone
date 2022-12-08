import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoilUser",
  storage: sessionStorage,
});

export const recoilUser = atom({
  key: "recoilUser",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
