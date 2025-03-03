import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const specialItems = [
  {
    name: "Pumpkin Spice Flat White",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-rQhOnEAsIJ7w6r4Xwd5H95Eiij4YGy.png",
    isLimited: true,
    badge: "LIMITED OFFER!",
    badgeColor: "bg-orange-600",
  },
  {
    name: "Moccacino",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-vGskkxXGiMDz4cgf8biWGe3cYULXsK.png",
    quality: "33% Cocoa Beans",
  },
  {
    name: "Chai Latte",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-79dTyADkVaYgzKbfh6hU8WvZK5xWOY.png",
    isNew: true,
    badge: "NEW RECIPE",
  },
  {
    name: "Hot Chocolate",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-7EwjbPSiSJ8zcO6lkluw88Nat0sxIl.png",
    isBestSeller: true,
    quality: "Over 33% Cocoa",
  },
  {
    name: "Pumpkin Spice Latte",
    volume: "250 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-bH51uRWn0oV3Te0cUE75LeEhrUxQYG.png",
    isLimited: true,
    badge: "LIMITED OFFER!",
    badgeColor: "bg-orange-600",
  },
  {
    name: "Pumpkin Spice Cappuccino",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-R4z9n7qUEZq7JJTJ5CENGs5nLK514M.png",
    isLimited: true,
    badge: "LIMITED OFFER!",
    badgeColor: "bg-orange-600",
  },
  {
    name: "Caramel Matcha Latte",
    volume: "200 ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-4BnEC2XZl2rToRZryIJOtD1H4FMI0X.png",
    isBestSeller: true,
    isNew: true,
    badge: "NEW RECIPE",
  },
];

export default function Specials() {
  return (
    <section id="specials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Our Specials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialItems.map((item, index) => (
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
                {/* Top-left badge for Best Seller */}
                {item.isBestSeller && (
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white border-none">
                    BEST SELLER
                  </Badge>
                )}
                {/* Top-right badge for Limited Offer */}
                {item.isLimited && (
                  <Badge
                    className={`absolute top-4 right-4 ${item.badgeColor} text-white border-none`}
                  >
                    {item.badge}
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
                <div className="flex justify-end gap-2">
                  {item.quality && (
                    <Badge
                      variant="outline"
                      className="bg-[#D4A373] text-black border-none text-xs"
                    >
                      {item.quality}
                    </Badge>
                  )}
                  {item.isNew && !item.isLimited && (
                    <Badge className="bg-pink-600 text-white border-none text-xs">
                      {item.badge}
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
