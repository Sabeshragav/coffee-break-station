import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const icedDrinks = [
  {
    name: "Iced Caramel Cappuccino",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32-8jfthibZ38vwO6kcJba3IpyJtFbBs2.png",
    hasCaramel: true,
  },
  {
    name: "Double Espresso on Ice",
    volume: "90 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-C5LRqmP9wtpvytFvPzV29i8MZhBdYv.png",
  },
  {
    name: "Iced Flat White",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-brcvaziPboq4rxA6X3CzCYQkPpuC2X.png",
  },
  {
    name: "Iced Caffe Latte",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-mnymZEsd2eY2Mj7Abg9bfQqQDvfYsr.png",
  },
  {
    name: "Iced Matcha Latte",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-f8OV2UernacCPUXNpOWreCrEekpokw.png",
    isNew: true,
    badge: "NEW RECIPE",
  },
  {
    name: "Iced Coconut Caffe Latte",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-2AxaL3IkHGxkCnDAYoAy9kni2E8whC.png",
    hasCoconut: true,
  },
  {
    name: "Iced Coconut Cappuccino",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33-stSISUZC24KbOOZn9DnTvZ4Hel0wD2.png",
    hasCoconut: true,
  },
  {
    name: "Iced Moccacino",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-9YEqtYJICmz1t5ANPD0mll7Fovto2r.png",
    quality: "33% Cocoa Beans",
  },
  {
    name: "Iced Cappuccino",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-uKjMtdDJiwqafBoAwv4VLBE0AwM9vP.png",
  },
  {
    name: "Iced Americano",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-5oRfdsBa8hE0oXcWGVkSlZIPWH2EGY.png",
  },
  {
    name: "Iced Coconut Flat White",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/35-mpmHFrM79KMdt68NbvHfHKXLR0vIuf.png",
    hasCoconut: true,
  },
  {
    name: "Iced Caramel Matcha Latte",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/36-6YUospe85CB9MeuuGyCxnVaOpayiBp.png",
    quality: "Premium Quality Matcha",
    hasCaramel: true,
  },
];

export default function IcedDrinks() {
  return (
    <section id="iced-drinks" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Iced Variants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {icedDrinks.map((drink, index) => (
            <div
              key={index}
              className="relative bg-[#1A1A1A] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
              <div className="relative aspect-square">
                <Image
                  src={drink.image || "/placeholder.svg"}
                  alt={drink.name}
                  fill
                  className="object-cover p-4"
                />
                {drink.isNew && (
                  <Badge className="absolute top-4 right-4 bg-pink-600 text-white border-none">
                    {drink.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4 bg-[#1A1A1A]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-[#D4A373]">
                    {drink.name}
                  </h3>
                  <span className="text-sm text-[#A89F91]">{drink.volume}</span>
                </div>
                <div className="flex justify-end gap-2">
                  <Badge
                    variant="outline"
                    className="bg-[#D4A373] text-black border-none text-xs"
                  >
                    100% Arabica
                  </Badge>
                  {drink.quality && (
                    <Badge
                      variant="outline"
                      className="bg-[#D4A373] text-black border-none text-xs"
                    >
                      {drink.quality}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
