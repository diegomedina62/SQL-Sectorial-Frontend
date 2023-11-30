import Singlecategory from "./Singlecategory"

const Categories = ({ categoryArray, removeCategory }) => {
  return (
    <section>
      {categoryArray.map((item) => {
        return (
          <Singlecategory
            key={item.id_key}
            item={item}
            removeCategory={removeCategory}
          />
        )
      })}
    </section>
  )
}
export default Categories
