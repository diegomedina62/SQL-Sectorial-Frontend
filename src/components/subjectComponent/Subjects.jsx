import { nanoid } from "nanoid"
import SingleSubject from "./SingleSubject"

const Subjects = ({ subjectArray, removeSubject }) => {
  return (
    <section>
      {subjectArray.map((item) => {
        return (
          <SingleSubject
            key={nanoid()}
            item={item}
            removeSubject={removeSubject}
          />
        )
      })}
    </section>
  )
}
export default Subjects
