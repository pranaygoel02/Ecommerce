import { getAllCategories } from "@/actions/store";

 async function CategoryList() {
  const categories = await getAllCategories();
    console.log(categories);
    return (
    <div className="flex items-start justify-start flex-wrap gap-4">
        {
            categories.map((category: any) => (
                <div className="btn btn-outline-primary" key={category._id}>
                    <h1>{category.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default CategoryList