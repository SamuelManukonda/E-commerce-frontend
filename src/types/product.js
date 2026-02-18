/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {string} description
 * @property {string} category
 * @property {string} [specs]
 */

/**
 * Map product JSON from products.json to a normalized Product.
 * @param {any} product
 * @returns {Product}
 */
export function mapToProduct(product) {
  return {
    id: Number(product.id),
    name: String(product.name),
    price: Number(product.price),
    image: String(product.image),
    description: String(product.description),
    category: String(product.category),
    specs: typeof product.specs === 'string' ? product.specs : undefined,
  };
}

