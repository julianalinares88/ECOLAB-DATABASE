const supabase = require("../services/supabase.service");

const searchPostsByTitle = async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Falta el parámetro 'keyword'" });
  }

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .ilike("title", `%${keyword}%`); // busca parcial, insensible a mayúsculas

  if (error) {
    console.error("Error al buscar posts:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

module.exports = {
  searchPostsByTitle,
};
