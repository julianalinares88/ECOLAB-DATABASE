const supabase = require("../services/supabase.service");

// 1. Obtener todos los productos
const getAllProducts = async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// 2. Obtener productos con precio menor a 50
const getProductsUnder50 = async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .lt("price", 50); // lt = less than

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};


module.exports = {
  getAllProducts,
  getProductsUnder50,
  
};
