import { useState } from "react"
import axios from "axios"
const url = "http://localhost:3000/subcategories"

const Formsubcategory = ({ item, getSubcategories }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newItemName) return
    try {
      const response = await axios.post(url, {
        SubcategoryName: newItemName,
        CategoryIdKey: item.id_key,
      })
      setNewItemName("")
      getSubcategories()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-2 ml-20">
        <input
          type="text"
          value={newItemName}
          className="rounded-full border border-black p-1"
          onChange={(e) => {
            setNewItemName(e.target.value)
          }}
        />
        <button
          type="submit"
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-purple-500"
        >
          Agregar Subcategoria
        </button>
      </div>
    </form>
  )
}
export default Formsubcategory
