import { Coffee, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description:
      "We use only the highest quality coffee from verified suppliers.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Our machines are available around the clock, whenever you crave.",
  },
  {
    icon: Zap,
    title: "Quick Preparation",
    description:
      "Your drink is prepared in seconds, exactly to your preferences.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black text-[#EFE7DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Why Coffee Break Station?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto h-16 w-16 text-[#D4A373] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#D4A373]">
                {feature.title}
              </h3>
              <p className="text-[#EFE7DD]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
