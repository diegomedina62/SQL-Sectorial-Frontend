import { useState, useEffect } from "react"
import axios from "axios"
import Formcategory from "./components/Formcategory"
import Categories from "./components/Categories"
const url = "http://localhost:3000/categories"

function App() {
  const [categoryArray, setCategoryArray] = useState([])
  const getCategories = async () => {
    try {
      const response = await axios.get(url)
      setCategoryArray(response.data.result)
    } catch (error) {}
  }
  useEffect(() => {
    getCategories()
  }, [Formcategory])

  const removeCategory = () => {}

  return (
    <>
      <h1 className="text-3xl">Gestion de base de datos SQL, Sectorial S.A</h1>
      <div className="border border-gray-300 p-2">
        <h2 className="text-xl">Categorías </h2>
        <Formcategory getCategories={getCategories} />
        <Categories
          categoryArray={categoryArray}
          removeCategory={removeCategory}
        />
      </div>
    </>
  )
}

export default App
