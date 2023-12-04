import { useState } from "react"
const activeButton = "mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-300"
const inactiveButton = "invisible"

const SingleSubject = ({ item, removeSubject, parentActivation }) => {
  const [isActive, setIsActive] = useState(parentActivation)
  return (
    <section className="my-2 ml-20 border border-green-300 p-2">
      <div className="  my-4 flex">
        <h2 className="text-2xl">{item.SubjectName}</h2>
        <button
          className={isActive ? activeButton : inactiveButton}
          onClick={() => {
            removeSubject(item.id_key)
          }}
        >
          Borrar
        </button>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-300"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Desactivar" : "Activar"}
        </button>
      </div>
    </section>
  )
}
export default SingleSubject
