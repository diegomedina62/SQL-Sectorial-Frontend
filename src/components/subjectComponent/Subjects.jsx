import { nanoid } from "nanoid"
import SingleSubject from "./SingleSubject"

const Subjects = ({ subjectArray, removeSubject, parentActivation }) => {
  return (
    <section>
      {subjectArray.map((item) => {
        return (
          <SingleSubject
            key={nanoid()}
            item={item}
            removeSubject={removeSubject}
            parentActivation={parentActivation}
          />
        )
      })}
    </section>
  )
}
export default Subjects
