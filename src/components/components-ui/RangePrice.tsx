import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
 
type SliderProps = React.ComponentProps<typeof Slider>
 
export function SliderDemoPrice({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[0]}
      max={100}
      step={1}
      className={cn("w-[60%] rounded-xl", className)}
      {...props}
    />
  )
}