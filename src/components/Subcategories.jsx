import Individualsubcat from "./Individualsubcat"

const Subcategories = ({ subcategoryArray, removeSubcategory }) => {
  return (
    <section>
      {subcategoryArray.map((item) => {
        return (
          <section>
            <Individualsubcat
              item={item}
              removeSubcategory={removeSubcategory}
            />
          </section>
        )
      })}
    </section>
  )
}
export default Subcategories
