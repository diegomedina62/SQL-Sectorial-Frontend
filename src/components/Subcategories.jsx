import Individualsubcat from "./Individualsubcat"
import { nanoid } from "nanoid"

const Subcategories = ({ subcategoryArray, removeSubcategory }) => {
  return (
    <section>
      {subcategoryArray.map((item) => {
        return (
          <Individualsubcat
            key={nanoid()}
            item={item}
            removeSubcategory={removeSubcategory}
          />
        )
      })}
    </section>
  )
}
export default Subcategories
