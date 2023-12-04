import { useState } from "react"
import axios from "axios"
const url = "http://localhost:3000/subjects"

const Formsubject = ({ item }) => {
  const [newItemName, setNewItemName] = useState("")

  console.log(item)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newItemName) return
    try {
      const response = await axios.post(url, {
        SubjectName: newItemName,
        SubcategoryIdKey: item.id_key,
      })
      setNewItemName("")
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
          className="rounded-full border border-black p-1"
          onChange={(e) => {
            setNewItemName(e.target.value)
          }}
        />
        <button
          type="submit"
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-400"
        >
          agregar
        </button>
      </div>
    </form>
  )
}
export default Formsubject
