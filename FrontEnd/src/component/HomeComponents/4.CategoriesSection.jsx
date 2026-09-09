import {
  Apple,
  Milk,
  Sandwich,
  CookingPot,
  Beef,
  CupSoda,
  Wheat,
  ShoppingBasket,
} from "lucide-react";
import vegetableImage from '../../asset/shopByCategory/vegetable.png'
import fruitImage from '../../asset/shopByCategory/fruitImage.png'
import BeverageImage from '../../asset/shopByCategory/Beverage.png'
import bakeryImage from '../../asset/shopByCategory/bakery.png'
import DairyImage from '../../asset/shopByCategory/Dairy.png'
import SnacksImage from '../../asset/shopByCategory/Snacks.png'
import OrganicImage from '../../asset/shopByCategory/Organic.png'

export default function CategorySection() {
  const categories = [
    {
      name: "Fruits",
      icon: fruitImage
    },
    {
      name: "Vegetables",
      icon: vegetableImage
    },
    {
      name: "Dairy",
      icon: DairyImage
    },
    {
      name: "Bakery",
      icon: bakeryImage
    },
    {
      name: "Beverages",
      icon:  BeverageImage
    },
    {
      name: "Snacks",
      icon: SnacksImage
    },
    {
      name: "Organic",
      icon: OrganicImage
    },
  ];

  return (
    <section className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12">

      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1f2d3d] drop-shadow-[0_0_0.5px] sm:text-2xl">
          Shop by Category
        </h2>

        {/* <button className="flex items-center gap-1 text-sm font-semibold text-[#f97316] transition-colors hover:text-[#ea580c] sm:text-base">
          View All
          <span className="text-lg">→</span>
        </button> */}
      </div>

      {/* Categories Grid */}
      <div
        className="
      grid
      grid-cols-3
      gap-3

      sm:grid-cols-4
      sm:gap-4

      md:grid-cols-5

      lg:grid-cols-6

      xl:grid-cols-8
    "
      >
        {categories.map((category, index) => {

          return (
            <button
              key={index}
              className="
            group
            flex
            flex-col
            items-center
            justify-center
            

            rounded-xl
            border
            border-[#e8edf3]

            bg-white

            px-3
            py-4

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-[#fdba74]
            hover:shadow-md
          "
            >
              {/* image container */}
                <img

                src={category.icon}
                alt=""

                className="
                h-26.5
                w-30
                text-[#f97316]
                object-fill
                object-bottom

                sm:h-26.5
                sm:w-30
              "
                />

              {/* Category Name */}
              <p
                className="
              text-center
              text-xs
              font-medium
              text-[#334155]
              drop-shadow-[0_0_0.5px]

              sm:text-sm
            "
              >
                {category.name}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}