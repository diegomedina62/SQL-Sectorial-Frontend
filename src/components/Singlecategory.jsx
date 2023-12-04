import { useState, useEffect } from "react"
import axios from "axios"
import Formsubcategory from "./Formsubcategory"
import Subcategories from "./Subcategories"

const url = "http://localhost:3000/subcategories"
const activeButton = "mx-4 rounded-full bg-gray-300 px-4 hover:bg-sky-400"
const inactiveButton = "invisible"

const Singlecategory = ({ item, removeCategory }) => {
  const [subcategoryArray, setsubcategoryArray] = useState([])
  const [isActive, setIsActive] = useState(true)

  const getSubcategories = async () => {
    try {
      const response = await axios.get(url + `/${item.id_key}`)
      setsubcategoryArray(response.data.result)
    } catch (error) {}
  }

  useEffect(() => {
    getSubcategories()
  }, [])

  const removeSubcategory = async (categoryid) => {
    try {
      const response = await axios.delete(url + `/${categoryid}`)
      getSubcategories()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="my-2 ml-20 border border-sky-700 p-2">
      <div className="  my-4 flex">
        <h2 className="text-3xl">{item.CategoryName}</h2>
        <button
          className={isActive ? activeButton : inactiveButton}
          onClick={() => {
            if (subcategoryArray.length != 0) {
              alert(
                "no se puede borrar la categoría. Primero elimine las subcategorias para continuar",
              )
              return
            }
            removeCategory(item.id_key)
          }}
        >
          Borrar Categoría
        </button>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-sky-400"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Desactivar categoría" : "Activar categoría"}
        </button>
      </div>
      <div className="relative ml-16 p-2">
        <h3 className="ml-20 ">Subcategorias</h3>
        {isActive && (
          <Formsubcategory getSubcategories={getSubcategories} item={item} />
        )}

        <Subcategories
          subcategoryArray={subcategoryArray}
          removeSubcategory={removeSubcategory}
          parentActivation={isActive}
        />
      </div>
    </section>
  )
}
export default Singlecategory
