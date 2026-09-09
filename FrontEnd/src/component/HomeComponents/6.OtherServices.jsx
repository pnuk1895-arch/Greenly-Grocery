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
          <h2 className="text-xl font-bold text-[#1f2937] drop-shadow-[0_0_0.5px] sm:text-2xl">
            Why Choose Greenly?
          </h2>

          <button className="text-xs font-medium text-[#f97316] transition hover:text-[#ea580c] sm:text-sm">
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
              border-[#e5e7eb]
              bg-white
              px-3
              py-5
              text-center
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:border-[#fed7aa]
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
                bg-[#fff7ed]
                text-[#f97316]

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
                text-[#1f2937]
                drop-shadow-[0_0_0.5px]

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
                text-[#6b7280]
                drop-shadow-[0_0_0.5px]

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