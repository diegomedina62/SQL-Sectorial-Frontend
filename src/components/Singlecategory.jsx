const Singlecategory = ({ item, removeCategory }) => {
  return (
    <section className="ml-8 border border-gray-300 p-2">
      <div className="  my-4 flex">
        <h2>{item.CategoryName}</h2>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-sky-700"
          onClick={() => removeCategory(item.id_key)}
        >
          Borrar
        </button>
      </div>
      <h3 className="relative ml-16 border border-gray-300 p-2">
        Subcategorias
      </h3>
    </section>
  )
}
export default Singlecategory
