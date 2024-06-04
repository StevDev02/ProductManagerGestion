import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({ delay: 2000, Autoplay, stopOnInteraction: true })
  )

  const Links = [
    'https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717295248358-4b8f2c8989d6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1715546658566-601d321f6ff7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className=" w-[80%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="bg-red-300 w-full h-[70vh]">
        {Links.map((image, link) => (
          <CarouselItem key={link}>
              <img
            className="container"
              src={image} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}