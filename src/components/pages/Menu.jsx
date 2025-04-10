/* eslint-disable react/prop-types */
// import React from 'react'
import ToggleButton from "../ToggleButton";

export default function Menu({
  filteredItems,
  handleAddToCart,
  loading,
  categories,
  selectedCategory,
  handleSelectCategory,
  noOfPages,
  selectedPage,
  handlePageChange,
}) {
  const pages = Array(noOfPages)
    .fill(0)
    .map((itm, i) => i + 1);

  // const pages = []
  // for (let i = 1; i < noOfPages + 1; i++) {
  //     pages.push(i)
  // }

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  return (
    <>
      <div className="max-w-lg m-auto">
        <h1 className="text-center bg-amber-200">Menu</h1>

        <div className="grid grid-cols-3 gap-7">
          <div>
            <ul>
              {categories.map((cat) => (
                <li
                  onClick={() => handleSelectCategory(cat.id)}
                  key={cat.id}
                  className={`px-4 py-2 border cursor-pointer ${
                    cat.id !== selectedCategory && "hover:bg-gray-100"
                  } transition-all ${
                    selectedCategory === cat.id && "bg-gray-400"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-x-auto col-span-2">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((itm) => (
                  <tr key={itm.id}>
                    <td>{itm.name}</td>
                    <td>{itm.price}$</td>
                    <td>
                      <ToggleButton
                        handler={handleAddToCart}
                        id={itm.id}
                        active={itm.isInCart}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {noOfPages > 1 && (
              <div className="join float-end mb-4 mt-2">
                {pages.map((pag) => (
                  <button
                    onClick={() => handlePageChange(pag)}
                    key={pag}
                    className={`join-item btn btn-xs ${
                      selectedPage === pag && "btn-active"
                    }`}
                  >
                    {" "}
                    {pag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
