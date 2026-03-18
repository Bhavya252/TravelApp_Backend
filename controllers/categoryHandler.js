import Category from "../model/category.db.js";

const CategoryHandler = async (req, res) => {
  try {
    const category = await Category.find({});
    res
      .status(200)
      .json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "unable to fetch categories" });
  }
};
export default CategoryHandler;
