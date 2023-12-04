import SingleSubject from "./SingleSubject"

const Subjects = ({ subjectArray, removeSubject }) => {
  return (
    <section>
      {subjectArray.map((item) => {
        return (
          <section>
            <SingleSubject item={item} removeSubject={removeSubject} />
          </section>
        )
      })}
    </section>
  )
}
export default Subjects
