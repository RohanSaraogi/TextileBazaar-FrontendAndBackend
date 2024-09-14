import React from 'react'
import fabric from "./fabric.png"
import yarn from "./yarn.png"
import delivery from "./delivery-car.png"
import fabrication from "./fabrication.png"

const CategoriesMenu = () => {
    const categories = [
        {
          id: 1,
          name: "Yarn",
          image:yarn,
        },
        {
          id: 2,
          name: "Fabric-Cotton",
          image:
            fabric,
        },
        {
          id: 3,
          name: "Finished Goods",
          image:delivery,
        },
        {
          id: 4,
          name: "Machinery",
          image:fabrication,
        },
      ];
      return (
        // <a href="" title="yarn icons">Yarn icons created by berkahicon - Flaticon</a>
        <div className="max-w-[1640px] m-auto px-4 py-12">
          <h1 className="text-green-900 font-bold text-4xl text-center">
            Categories
          </h1>
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-[#ACE1AF] hover:bg-white hover:box-shadow cursor-pointer duration-500 rounded-lg p-4 flex flex-col justify-between items-center "
              >
                <h2 className="font-bold text-green-1000 sm:text-xl text-xl py-2 tracking-wider">{item.name}</h2>
                <img src={item.image} alt={item.name} className="w-20" />
              </div>
            ))}
          </div>
        </div>
      );
}

export default CategoriesMenu

