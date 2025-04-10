/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { data, Route, Routes } from "react-router";
import About from "./components/pages/About";
import Error from "./components/pages/Error";

import AboutCompany from "./components/pages/AboutCompany";
import AboutPeople from "./components/pages/AboutPeople";
import Product from "./components/pages/Product";
import ProductForm from "./components/pages/ProductForm";

import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";
import axios from "axios";
import Admin from "./components/pages/Admin";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const apiUrl = "http://localhost:3000";
  //state
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const [search, setSearch] = useState("");
  const pageSize = 3;

  //get the data from backend
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await axios.get(`${apiUrl}/menu?_delay=2000`);
      const { data: categoriesData } = await axios.get(`${apiUrl}/categories`);

      setCategories([{ id: 0, name: "All" }, ...categoriesData]);
      setItems(data);
      setLoading(false);
    };
    getData();
  }, []);

  //handlers
  const handleReset = () => {
    //clone
    //edit
    const newItems = items.map((itm) => ({ ...itm, count: 0 }));
    //setState
    setItems(newItems);
  };

  const handleDelete = (id) => {
    //clone
    const newItems = [...items];
    // console.log(newItems)
    const index = newItems.findIndex((itm) => itm.id === id);
    newItems[index] = { ...newItems[index] };
    //edit
    newItems.splice(index, 1);
    //setState
    setItems(newItems);
  };

  const handleIncrement = (id) => {
    //clone
    const newItems = [...items];
    // console.log(newItems)
    const index = newItems.findIndex((itm) => itm.id === id);
    newItems[index] = { ...newItems[index] };
    //edit
    newItems[index].count = newItems[index].count + 1;
    //setState
    setItems(newItems);
  };

  const handleDecrement = (id) => {
    //clone
    const newItems = [...items];
    // console.log(newItems)
    const index = newItems.findIndex((itm) => itm.id === id);
    newItems[index] = { ...newItems[index] };
    //edit
    newItems[index].count = newItems[index].count - 1;
    //setState
    setItems(newItems);
  };

  const handleAddToCart = (id) => {
    //clone
    //edit
    const newItems = items.map((itm) => ({
      ...itm,
      isInCart: id === itm.id ? !itm.isInCart : itm.isInCart,
    }));
    //set state
    setItems(newItems);
  };

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
    setSelectedPage(1);
  };

  const handlePageChange = (page) => setSelectedPage(page);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddNewProduct = (product) => {
    const newItems = [...items, product];
    setItems(newItems);
  };

  const handleDeleteProduct = (id) => {
    const newItems = items.filter((itm) => itm.id !== id);
    setItems(newItems);
  };

  //filteration
  let filteredItems =
    selectedCategory === 0
      ? items
      : items.filter((itm) => itm.category === selectedCategory);

  //pagination
  const noOfPages = Math.ceil(filteredItems.length / pageSize);
  const start = (selectedPage - 1) * pageSize;
  const end = start + pageSize;
  filteredItems = filteredItems.slice(start, end);
  //searching
  filteredItems = filteredItems.filter(
    (itm) => itm.name.toLowerCase().match(search.toLowerCase()) !== null
  );

  //UI
  return (
    <>
      <ToastContainer />
      <div>
        <Navbar
          noOfItems={items.reduce((sum, itm) => itm.count + sum, 0)}
          search={search}
          handleSearch={handleSearch}
        >
          {/* <h2>Ahmed</h2> */}
        </Navbar>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <Admin
                items={items}
                categories={categories}
                handleDeleteProduct={handleDeleteProduct}
              />
            }
          />

          <Route
            path="/"
            element={
              <Menu
                filteredItems={filteredItems}
                handleAddToCart={handleAddToCart}
                loading={loading}
                categories={categories}
                selectedCategory={selectedCategory}
                handleSelectCategory={handleSelectCategory}
                noOfPages={noOfPages}
                selectedPage={selectedPage}
                handlePageChange={handlePageChange}
              />
            }
          />

          <Route
            path="/product/new"
            element={
              <ProductForm
                categories={categories}
                handleAddNewProduct={handleAddNewProduct}
              />
            }
          />

          <Route path="/product/:id" element={<Product />} />

          <Route
            path="/cart"
            element={
              <Cart
                items={items.filter((itm) => itm.isInCart)}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                handleReset={handleReset}
              />
            }
          />

          <Route path="/about" element={<About />}>
            <Route path="company" element={<AboutCompany />} />
            <Route path="people" element={<AboutPeople />} />
            <Route />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
