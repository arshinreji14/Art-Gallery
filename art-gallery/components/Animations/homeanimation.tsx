import React, { ReactNode, RefObject } from 'react'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
interface GsapScrollTriggerprops{

  children:ReactNode
  xhigh: RefObject<HTMLElement>;
  high: RefObject<HTMLElement>;
containerRef:RefObject<HTMLElement>
}
const HomeAnimation:React.FC<GsapScrollTriggerprops>=({  children,
  containerRef,
  xhigh,high
})=> {
  useLayoutEffect(() => {
    const context = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "middle to bottom",
          end: "bottom to top",
          scrub: true
        }

      })
      tl.to(xhigh.current,{ duration:1000,x:-900},0)
      tl.to(high.current,{duration:1000,x:900},0)

    })
    return () => context.revert();
  }, [])
return (
  <div>{children}</div>
)
}

export default HomeAnimation



