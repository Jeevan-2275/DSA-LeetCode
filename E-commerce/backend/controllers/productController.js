// Mock database
let products = [
  { id: 1, name: 'Laptop', description: 'Gaming Laptop', price: 999.99, category: 'Electronics', image: 'laptop.jpg', stock: 10 },
  { id: 2, name: 'Mouse', description: 'Wireless Mouse', price: 29.99, category: 'Accessories', image: 'mouse.jpg', stock: 50 }
];

// Get all products
const getProducts = (req, res) => {
  try {
    res.status(200).json({ message: 'Products fetched', data: products });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Get product by ID
const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find(p => p.id == id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product fetched', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

// Create product
const createProduct = (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'Name, description, price, and category are required' });
    }

    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name,
      description,
      price,
      category,
      image: image || 'default.jpg',
      stock: stock || 0
    };

    products.push(newProduct);
    res.status(201).json({ message: 'Product created successfully', data: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

// Update product
const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, image, stock } = req.body;

    const product = products.find(p => p.id == id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;
    if (image) product.image = image;
    if (stock !== undefined) product.stock = stock;

    res.status(200).json({ message: 'Product updated successfully', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

// Delete product
const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;

    const productIndex = products.findIndex(p => p.id == id);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const deletedProduct = products.splice(productIndex, 1);
    res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
