import {
  Truck,
  RotateCcw,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

export default function PerksSection() {
  const perks = [
    {
      icon: <Truck />,
      title: "Free Delivery",
      description: "On orders above ₹499",
    },
    {
      icon: <RotateCcw />,
      title: "Easy Returns",
      description: "No questions asked",
    },
    {
      icon: <ShieldCheck />,
      title: "Best Quality",
      description: "100% Original Products",
    },
    {
      icon: <LockKeyhole />,
      title: "Secure Payment",
      description: "100% Protected",
    },
  ];

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-9">
      <div className="mx-auto w-[95%] rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
          
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-2 py-3 sm:px-4"
            >
              
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef5eb] text-[#17612a]">
                {perk.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                  {perk.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {perk.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}