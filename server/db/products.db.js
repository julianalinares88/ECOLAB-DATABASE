let products = [
  {
    id: 1,
    name: "Sample Product",
  },
];

const supabaseCli = require("../services/supabase.service");

// Obtener todos los productos
const getAllProducts = async () => {
  const { data, error } = await supabaseCli.from("products").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};


module.exports = {
  getAllProducts,
  
};
