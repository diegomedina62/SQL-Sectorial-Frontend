import SingleSubject from "./SingleSubject"

const Subjects = ({ subjectArray }) => {
  return (
    <section>
      {subjectArray.map((item) => {
        return (
          <section>
            <SingleSubject item={item} />
          </section>
        )
      })}
    </section>
  )
}
export default Subjects
