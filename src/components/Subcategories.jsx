import Individualsubcat from "./Individualsubcat"

const Subcategories = ({ subcategoryArray, removeSubcategories }) => {
  return (
    <section>
      {subcategoryArray.map((item) => {
        return (
          <section>
            <Individualsubcat item={item} />
          </section>
        )
      })}
    </section>
  )
}
export default Subcategories
