import Image from 'next/image'

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui'

import IMG1 from './image/1.webp'
import IMG2 from './image/2.png'
import IMG3 from './image/3.jpg'
import IMG4 from './image/4.webp'

export default function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex h-[400] w-full items-center justify-center p-6">
                <Image fill alt="Banner" className="object-cover" src={image} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
