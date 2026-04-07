import { useSyncExternalStore } from "react";

export default function useClientReady() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
