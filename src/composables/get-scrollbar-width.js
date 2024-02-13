export function useGetScrollbarWidth() {
   const outer = document.createElement('div')
   outer.style.visibility = 'hidden'
   outer.style.overflow = 'scroll'
   // outer.style.msOverflowStyle = 'scroll';
   document.body.appendChild(outer)

   const inner = document.createElement('div')
   outer.appendChild(inner)

   const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
   outer.parentNode?.removeChild(outer)
   return scrollbarWidth
}
