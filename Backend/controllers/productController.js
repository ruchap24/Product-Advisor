const Product = require('../models/Product');

const getRecommendedProducts = async (req, res) => {
  const { skinType, concerns } = req.body;

  try {
    const products = await Product.find({
      skinType: { $in: [skinType] },
      concerns: { $in: concerns },
    }).limit(10).sort({ rating: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRecommendedProducts };