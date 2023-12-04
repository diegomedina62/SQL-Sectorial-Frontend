const SingleSubject = ({ item }) => {
  return (
    <section className="ml-20 border border-gray-300 p-2">
      {" "}
      <div className="  my-4 flex">
        <h2>{item.SubjectName}</h2>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-300"
          onClick={() => {
            //   removeSubcategory(item.id_key)
          }}
        >
          Borrar
        </button>
      </div>
    </section>
  )
}
export default SingleSubject
