import { useState } from "react"
import Formcategory from "./components/Formcategory"

function App() {
  return (
    <>
      <h1 className="text-3xl">Gestion de base de datos SQL, Sectorial S.A</h1>
      <div className="border border-gray-300 p-2">
        <h2 className="text-xl">Categorías </h2>
        <Formcategory />
      </div>
    </>
  )
}

export default App
