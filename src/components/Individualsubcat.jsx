const Individualsubcat = ({ item, removeSubcategory }) => {
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
      </div>
    </section>
  )
}
export default Individualsubcat
