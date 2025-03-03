import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    name: "Espresso",
    volume: "30 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Opp81um9iZWVsbopaWOyKArxBSPa53.png",
    isBestSeller: false,
  },
  {
    name: "Double Espresso",
    volume: "60 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-dwC2V0qzpbVnogXO8aroLLkHL9wBeT.png",
    isBestSeller: true,
  },
  {
    name: "Espresso Lungo",
    volume: "90 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-w3QVygmEV4GME2k1VvBcADRQj6qV7P.png",
    isBestSeller: false,
  },
  {
    name: "Americano",
    volume: "150 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-9WfM69d4qmWZFPHFO680UcRNqSX90z.png",
    isBestSeller: true,
  },
  {
    name: "Cappuccino",
    volume: "150 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-rsaxQFx24qnQEAQpWeVuLFhg57VWGl.png",
    isBestSeller: false,
  },
  {
    name: "Vanilla Cappuccino",
    volume: "150 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-0536d4nKTIPm19D88o0SoIHJzvyfoR.png",
    isBestSeller: false,
  },
  {
    name: "Caramel Cappuccino",
    volume: "150 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-7LZYZIqqdhul1mihApBymVktKD73vp.png",
    isBestSeller: true,
  },
  {
    name: "Caffe Latte",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-DLJOYGdoxjqSPUTmWIdfJkJGvlPZ0b.png",
    isBestSeller: false,
  },
  {
    name: "Vanilla Caffe Latte",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-bgMf0GHpYX5fbpRC1Vb8QK8oTQStV3.png",
    isBestSeller: true,
  },
  {
    name: "Caramel Caffe Latte",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-6KyT7UghQEkTC22OuSx6b7WUnTubng.png",
    isBestSeller: false,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#1A1A1A] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover p-4"
                />
                {item.isBestSeller && (
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white border-none">
                    BEST SELLER
                  </Badge>
                )}
              </div>
              <div className="p-4 bg-[#1A1A1A]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-[#D4A373]">
                    {item.name}
                  </h3>
                  <span className="text-sm text-[#A89F91]">{item.volume}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge
                    variant="outline"
                    className="bg-[#D4A373] text-black border-none text-xs"
                  >
                    100% Arabica
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
