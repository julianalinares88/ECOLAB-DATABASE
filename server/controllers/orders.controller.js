const supabase = require("../services/supabase.service");

const getAllOrdersSorted = async (req, res) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false }); // DESC

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

module.exports = {
  getAllOrdersSorted,
};
