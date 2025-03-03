import { Coffee, Clock, Zap, CreditCard, Settings, Heart } from "lucide-react";

const benefits = [
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
  {
    icon: CreditCard,
    title: "Convenient Payment",
    description: "We accept card payments, cash, and customer cards.",
  },
  {
    icon: Settings,
    title: "Regular Service",
    description:
      "We ensure continuous maintenance and replenishment of supplies.",
  },
  {
    icon: Heart,
    title: "Loyalty Program",
    description: "We reward our loyal customers with special offers.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-black text-[#EFE7DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#1A1A1A] rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <benefit.icon className="mx-auto h-16 w-16 text-[#D4A373] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#D4A373]">
                {benefit.title}
              </h3>
              <p className="text-[#EFE7DD]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
