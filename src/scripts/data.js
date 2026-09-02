/* ==========================================
   DATA.JS - Datos de Ejemplo
   Patrón: Data Repository
   =========================================== */

const PRODUCTS_DATA = [
    {
        id: 1,
        title: 'Producto Premium 1',
        description: 'Descripción detallada del producto número 1 con características excepcionales.',
        image: './src/img/audi.jpeg',
        price: '$99.99',
        category: 'Premium',
        badge: 'Destacado'
    },
    {
        id: 2,
        title: 'Producto Premium 2',
        description: 'Descripción detallada del producto número 2 con excelentes reseñas.',
        image: './src/img/audifonos.webp',
        price: '$79.99',
        category: 'Standard',
        badge: 'Nuevo'
    },
    {
        id: 3,
        title: 'Producto Premium 3',
        description: 'Descripción detallada del producto número 3 con mejor relación calidad-precio.',
        image: './src/img/audi.jpeg',
        price: '$59.99',
        category: 'Economy',
        badge: 'Oferta'
    },
    {
        id: 4,
        title: 'Producto Premium 4',
        description: 'Descripción detallada del producto número 4 con innovación de última generación.',
        image: './src/img/audifonos.webp',
        price: '$129.99',
        category: 'Premium',
        badge: null
    },
    {
        id: 5,
        title: 'Producto Premium 5',
        description: 'Descripción detallada del producto número 5 recomendado por expertos.',
        image: './src/img/audi.jpeg',
        price: '$89.99',
        category: 'Premium',
        badge: 'Top Ventas'
    },
    {
        id: 6,
        title: 'Producto Premium 6',
        description: 'Descripción detallada del producto número 6 con garantía extendida.',
        image: './src/img/audifonos.webp',
        price: '$74.99',
        category: 'Standard',
        badge: null
    }
];

/**
 * Retorna todos los productos
 * @returns {Array} Array de productos
 */
function getProducts() {
    return PRODUCTS_DATA;
}

/**
 * Retorna un producto por ID
 * @param {number} id - ID del producto
 * @returns {Object|null} Producto encontrado o null
 */
function getProductById(id) {
    return PRODUCTS_DATA.find(product => product.id === id) || null;
}

/**
 * Retorna productos por categoría
 * @param {string} category - Categoría a filtrar
 * @returns {Array} Array de productos filtrados
 */
function getProductsByCategory(category) {
    return PRODUCTS_DATA.filter(product => product.category === category);
}
