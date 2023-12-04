import Singlecategory from "./Singlecategory"
import { nanoid } from "nanoid"

const Categories = ({ categoryArray, removeCategory }) => {
  return (
    <section>
      {categoryArray.map((item) => {
        return (
          <Singlecategory
            key={nanoid()}
            item={item}
            removeCategory={removeCategory}
          />
        )
      })}
    </section>
  )
}
export default Categories
