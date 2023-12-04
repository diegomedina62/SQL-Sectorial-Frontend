import Individualsubcat from "./Individualsubcat"
import { nanoid } from "nanoid"

const Subcategories = ({
  subcategoryArray,
  removeSubcategory,
  parentActivation,
}) => {
  return (
    <section>
      {subcategoryArray.map((item) => {
        return (
          <Individualsubcat
            key={nanoid()}
            item={item}
            removeSubcategory={removeSubcategory}
            parentActivation={parentActivation}
          />
        )
      })}
    </section>
  )
}
export default Subcategories
