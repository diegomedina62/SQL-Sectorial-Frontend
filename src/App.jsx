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
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])

  const removeCategory = async (categoryid) => {
    try {
      const response = await axios.delete(url + `/${categoryid}`)
      getCategories()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className="text-center text-4xl">
        Gestion de base de datos SQL, Sectorial S.A
      </h1>
      <div className="m-8 my-4 ">
        <h2 className="ml-20 text-2xl">Categorías </h2>
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
