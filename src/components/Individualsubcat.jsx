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
    <section className="my-2 ml-20 border border-purple-500 p-2">
      <div className="  my-4 flex">
        <h2 className="text-2xl">{item.SubcategoryName}</h2>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-purple-500"
          onClick={() => {
            if (subjectArray.length != 0) {
              alert(
                "no se puede borrar subcategoria. Primero elimine los temas para continuar",
              )
              return
            }
            removeSubcategory(item.id_key)
          }}
        >
          Borrar Subcategoría
        </button>
      </div>
      <div className="relative ml-16 p-2">
        <h3 className="ml-20">Temas</h3>
        <Formsubject item={item} getSubjects={getSubjects} />
        <Subjects subjectArray={subjectArray} removeSubject={removeSubject} />
      </div>
    </section>
  )
}
export default Individualsubcat
