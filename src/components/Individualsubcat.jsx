import { useState, useEffect } from "react"
import axios from "axios"
import Formsubject from "./subjectComponent/Formsubject"
import Subjects from "./subjectComponent/Subjects"

const url = "http://localhost:3000/subjects"

const Individualsubcat = ({ item, removeSubcategory }) => {
  const [subjectArray, setSubjectArray] = useState([])

  const getSubjects = async () => {
    try {
      const response = await axios.get(url + `/${item.id_key}`)
      setSubjectArray(response.data.result)
    } catch (error) {}
  }

  useEffect(() => {
    getSubjects()
  }, [])

  const removeSubject = async (subjectid) => {
    try {
      const response = await axios.delete(url + `/${subjectid}`)
      getSubjects()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="ml-20 border border-gray-300 p-2">
      <div className="  my-4 flex">
        <h2>{item.SubcategoryName}</h2>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-300"
          onClick={() => {
            removeSubcategory(item.id_key)
          }}
        >
          Borrar
        </button>
      </div>
      <div className="relative ml-16 border border-gray-300 p-2">
        <h3>Temas</h3>
        <Formsubject item={item} getSubjects={getSubjects} />
        <Subjects subjectArray={subjectArray} removeSubject={removeSubject} />
      </div>
    </section>
  )
}
export default Individualsubcat
