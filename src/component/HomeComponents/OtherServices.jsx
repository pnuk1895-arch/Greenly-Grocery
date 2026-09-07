import {
  ShieldCheck,
  Truck,
  CreditCard,
  RotateCcw,
} from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "High Quality",
      description: "Products",
    },
    {
      icon: Truck,
      title: "Fast & Reliable",
      description: "Delivery",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "100% Safe",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "& Refunds",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      
      {/* Main Container */}
      <div className="mx-auto w-full max-w-360">
        
        {/* Section Heading */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Why Choose Greenly?
          </h2>

          <button className="text-xs font-medium text-green-700 transition hover:text-green-900 sm:text-sm">
            View All →
          </button>
        </div>

        {/* Features Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:gap-4

            md:grid-cols-4
            md:gap-5

            lg:gap-6
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  px-3
                  py-5
                  text-center
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md

                  sm:px-4
                  sm:py-6

                  lg:py-7
                "
              >
                {/* Icon Circle */}
                <div
                  className="
                    mb-3
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-green-700

                    sm:h-14
                    sm:w-14

                    lg:h-16
                    lg:w-16
                  "
                >
                  <Icon
                    className="
                      h-5
                      w-5

                      sm:h-6
                      sm:w-6

                      lg:h-7
                      lg:w-7
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-gray-800

                    sm:text-base

                    lg:text-lg
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-1
                    text-xs
                    text-gray-500

                    sm:text-sm
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}