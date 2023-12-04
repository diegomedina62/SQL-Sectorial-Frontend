const SingleSubject = ({ item, removeSubject }) => {
  return (
    <section className="ml-28">
      {" "}
      <div className="  my-4 flex">
        <h2>{item.SubjectName}</h2>
        <button
          className="mx-4 rounded-full bg-gray-300 px-4 hover:bg-green-300"
          onClick={() => {
            removeSubject(item.id_key)
          }}
        >
          Borrar
        </button>
      </div>
    </section>
  )
}
export default SingleSubject