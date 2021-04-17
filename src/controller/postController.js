import crud1_EJ from "../models/crud1_EJ";

export const postController = async (req, res) => {
  try {
    const result = await crud1_EJ.find({}, {});
    console.log(result);

    res.render("post", { status: true, list: result });
  } catch (e) {
    console.log(e);
    res.render("post", { status: false, list: [] });
  }
};

export const postCreateController = (req, res) => {
  res.render("post_c");
};

export const postDetailController = (req, res) => {
  res.render("post_d");
};
