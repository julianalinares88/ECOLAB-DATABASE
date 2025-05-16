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

const getFilteredProductsByPriceAndCategory = async (req, res) => {
  const { category, minPrice } = req.query;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .gt("price", minPrice); // gt = greater than (>)

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// http://localhost:5050/api/products/filter?minPrice=30
const filterProducts = async (req, res) => {
  const { minPrice } = req.query;

  if (!minPrice) {
    return res.status(400).json({ error: "Falta el parámetro 'minPrice'" });
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "Electronics")
    .gt("price", Number(minPrice));

  if (error) {
    console.error("Error al filtrar productos:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

//http://localhost:5050/api/products/paginated
const getPaginatedProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .range(from, to); // Supabase usa .range en lugar de .limit + .offset

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const getProductsByUser = async (req, res) => {
  const userId = parseInt(req.params.userId);

  if (!userId) {
    return res.status(400).json({ error: "Se requiere un ID de usuario válido" });
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", userId); // Filtrar por ID del usuario

  if (error) {
    console.error("Error al obtener productos del usuario:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};




module.exports = {
  getAllProducts,
  getProductsUnder50,
  getFilteredProductsByPriceAndCategory,
  filterProducts, 
  getPaginatedProducts,
  getProductsByUser
  
};
