import { useGetScrollbarWidth } from "./get-scrollbar-width";

export function useBodyLock(lock) {
   const htmlBlock = document.documentElement;
   const header = document.querySelector(".header")
   if (lock) {
      htmlBlock.style.overflow = "hidden"
      htmlBlock.style.paddingRight = `${useGetScrollbarWidth()}px`;
      header.style.paddingRight = `${useGetScrollbarWidth()}px`;
   } else {
      htmlBlock.style.overflow = "";
      htmlBlock.style.paddingRight = "";
      header.style.paddingRight = "";
   }
}

