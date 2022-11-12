import React from "react";

const Menu = () => {
  const menus = [
    "Waffles",
    "Rice Meals",
    "Finger Foods",
    "Sandwiches",
    "Hot Drinks",
    "Iced Coffee",
    "Frappe",
    "Fruit Series",
    "Milk Tea",
    "Yogurt",
    "Soda",
  ];

  return (
    <div className="bg-[url('/bg-rock.png')] w-full h-[120vh] sm:h-[80vh] lg:h-[55vh] bg-cover bg-no-repeat bg-center flex flex-col py-14 gap-6 justify-center items-center" id="menu">
      <div className="flex justify-center items-center">
        <h1 className="font-[Sugar] text-3xl text-white tracking-wider">
          Food and Drink Menu
        </h1>
      </div>
      <div className="max-w-[1240px] flex justify-center items-center flex-wrap gap-8">
        {menus.map((menu) => {
          return (
            <div
              key={menu}
              className="outline outline-white text-white tracking-wider font-[Sugar] text-xl px-10 py-3 rounded-xl cursor-pointer hover:scale-105 duration-75 w-[250px] text-center"
            >
              {menu}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div className="bg-white  font-[Sugar] text-xl px-10 py-3 rounded-xl cursor-pointer hover:scale-105 duration-75 active:scale-95">
          <a href="https://drive.google.com/drive/folders/12nj-AeJKdy7CTM8VGq2N93paZ0n9Yoza?usp=sharing" target='_blank' rel="noreferrer">View Menu</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
