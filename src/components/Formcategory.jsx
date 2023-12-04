import { useState } from "react"
import axios from "axios"
const url = "http://localhost:3000/categories"

const Formcategory = ({ getCategories }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newItemName) return
    try {
      const response = await axios.post(url, {
        CategoryName: newItemName,
      })
      setNewItemName("")
      getCategories()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-2">
        <input
          type="text"
          value={newItemName}
          className="rounded-full border border-black p-2"
          onChange={(e) => {
            setNewItemName(e.target.value)
          }}
        />
        <button
          type="submit"
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-sky-700"
        >
          Agregar Categoria
        </button>
      </div>
    </form>
  )
}
export default Formcategory
