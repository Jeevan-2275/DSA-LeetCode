class Product {
  constructor(id, name, description, price, category, image, stock, createdAt = new Date()) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.stock = stock;
    this.createdAt = createdAt;
  }
}

module.exports = Product;
