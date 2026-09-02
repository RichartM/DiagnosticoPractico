/* ==========================================
   RENDERER.JS - Generador de Vistas
   Patrón: Renderer/Presenter
   =========================================== */

/**
 * Clase encargada de renderizar componentes
 */
class ProductRenderer {
    /**
     * Constructor del renderer
     */
    constructor() {
        this.products = getProducts();
    }

    /**
     * Crea una tarjeta de producto para vista desktop
     * @param {Object} product - Objeto del producto
     * @returns {string} HTML de la tarjeta
     */
    createDesktopCard(product) {
        return `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card h-100 card-desktop" data-product-id="${product.id}">
                    <div class="position-relative">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        ${product.badge ? `<span class="badge bg-success position-absolute top-0 start-0 m-2">${product.badge}</span>` : ''}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="text-primary fw-bold fs-5">${product.price}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-sm w-100 btn-ver-mas" data-product-id="${product.id}">
                            Ver Más
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Crea una tarjeta de producto para vista tablet
     * @param {Object} product - Objeto del producto
     * @returns {string} HTML de la tarjeta
     */
    createTabletCard(product) {
        return this.createDesktopCard(product);
    }

    /**
     * Crea un elemento de lista para vista mobile
     * @param {Object} product - Objeto del producto
     * @returns {string} HTML del elemento de lista
     */
    createMobileListItem(product) {
        return `
            <div class="mobile-list-item" data-product-id="${product.id}">
                <img src="${product.image}" class="mobile-list-item-image" alt="${product.title}">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h6 class="mobile-list-item-title">${product.title}</h6>
                    ${product.badge ? `<span class="badge bg-success ms-2">${product.badge}</span>` : ''}
                </div>
                <p class="mobile-list-item-text">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-primary fw-bold">${product.price}</span>
                    <button class="btn btn-primary btn-sm btn-ver-mas" data-product-id="${product.id}">
                        Ver Más
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Renderiza todas las tarjetas en vista desktop
     */
    renderDesktopView() {
        const container = document.getElementById('grid-desktop');
        if (!container) return;

        const html = this.products
            .map(product => this.createDesktopCard(product))
            .join('');
        
        container.innerHTML = html;
        this.attachEventListeners();
    }

    /**
     * Renderiza todas las tarjetas en vista tablet
     */
    renderTabletView() {
        const container = document.getElementById('grid-tablet');
        if (!container) return;

        const html = this.products
            .map(product => this.createTabletCard(product))
            .join('');
        
        container.innerHTML = html;
        this.attachEventListeners();
    }

    /**
     * Renderiza todos los elementos en vista mobile (lista)
     */
    renderMobileView() {
        const container = document.getElementById('lista-mobile');
        if (!container) return;

        const html = this.products
            .map(product => this.createMobileListItem(product))
            .join('');
        
        container.innerHTML = html;
        this.attachEventListeners();
    }

    /**
     * Renderiza todas las vistas
     */
    renderAllViews() {
        this.renderDesktopView();
        this.renderTabletView();
        this.renderMobileView();
    }

    /**
     * Adjunta event listeners a los botones
     */
    attachEventListeners() {
        const buttons = document.querySelectorAll('.btn-ver-mas');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                this.handleViewMore(productId);
            });
        });
    }

    /**
     * Manejador para el botón "Ver Más"
     * @param {number} productId - ID del producto
     */
    handleViewMore(productId) {
        const product = getProductById(productId);
        if (product) {
            alert(`Producto: ${product.title}\nPrecio: ${product.price}\n\n${product.description}`);
        }
    }
}

// Crear instancia global del renderer
const renderer = new ProductRenderer();
