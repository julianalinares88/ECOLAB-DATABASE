const supabase = require("../services/supabase.service");

const getBasicUserInfo = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("username, email");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

module.exports = {
  getBasicUserInfo,
};
