/* ==========================================
   MAIN.JS - Lógica Principal de la Aplicación
   Patrón: Application Controller
   =========================================== */

/**
 * Aplicación Principal
 */
class App {
    /**
     * Constructor de la aplicación
     */
    constructor() {
        this.renderer = renderer;
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        this.setupEventListeners();
        this.renderContent();
        this.setupResponsiveHandler();
    }

    /**
     * Configura los event listeners globales
     */
    setupEventListeners() {
        // Detectar cambios en la ventana (resize)
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Detectar cambios de orientación
        window.addEventListener('orientationchange', () => this.onOrientationChange());
    }

    /**
     * Renderiza el contenido inicial
     */
    renderContent() {
        this.renderer.renderAllViews();
        console.log('✓ Contenido renderizado exitosamente');
    }

    /**
     * Manejador para redimensionamiento de ventana
     */
    onWindowResize() {
        const width = window.innerWidth;
        console.log(`Ancho de ventana: ${width}px`);
        
        // Aquí puedes agregar lógica adicional si es necesaria
    }

    /**
     * Manejador para cambio de orientación
     */
    onOrientationChange() {
        const orientation = window.matchMedia("(orientation: portrait)").matches ? 'Portrait' : 'Landscape';
        console.log(`Orientación: ${orientation}`);
    }

    /**
     * Configura el manejador responsivo
     */
    setupResponsiveHandler() {
        const mediaQueryDesktop = window.matchMedia('(min-width: 992px)');
        const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 991.98px)');
        const mediaQueryMobile = window.matchMedia('(max-width: 767.98px)');

        // Función para manejar cambios
        const handleMediaChange = () => {
            if (mediaQueryDesktop.matches) {
                console.log('📱 Vista: Desktop');
            } else if (mediaQueryTablet.matches) {
                console.log('📱 Vista: Tablet');
            } else if (mediaQueryMobile.matches) {
                console.log('📱 Vista: Mobile');
            }
        };

        // Ejecutar al cargar
        handleMediaChange();

        // Escuchar cambios
        mediaQueryDesktop.addEventListener('change', handleMediaChange);
        mediaQueryTablet.addEventListener('change', handleMediaChange);
        mediaQueryMobile.addEventListener('change', handleMediaChange);
    }

    /**
     * Retorna información de la aplicación
     */
    getAppInfo() {
        return {
            name: 'MyApp - Proyecto Responsivo',
            version: '1.0.0',
            author: 'Developer',
            description: '3 vistas responsivas: Desktop (grid 3 col), Tablet (grid 2 col), Mobile (lista)',
            frameworks: ['Bootstrap 5', 'Vanilla JS', 'CSS3']
        };
    }

    /**
     * Imprime información de la aplicación en consola
     */
    printAppInfo() {
        const info = this.getAppInfo();
        console.log('%c=== APP INFO ===', 'color: #007bff; font-weight: bold; font-size: 14px;');
        console.log(`%cNombre: ${info.name}`, 'color: #28a745;');
        console.log(`%cVersión: ${info.version}`, 'color: #28a745;');
        console.log(`%cAutor: ${info.author}`, 'color: #28a745;');
        console.log(`%cDescripción: ${info.description}`, 'color: #28a745;');
        console.log(`%cFrameworks: ${info.frameworks.join(', ')}`, 'color: #28a745;');
    }
}

// ==========================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Crear instancia de la aplicación
    const app = new App();
    
    // Exponer globalmente para debug
    window.app = app;
    
    // Imprimir información de la aplicación
    app.printAppInfo();
    
    console.log('%c✓ Aplicación cargada correctamente', 'color: #28a745; font-weight: bold;');
});
