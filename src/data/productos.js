const productos = [
  // ========== TORTAS CIRCULARES (10 productos) ==========
  {
    id: "TT001",
    nombre: "Torta Circular de Vainilla",
    descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    precio: 25000,
    imagen: "https://www.aki.com.ec/wp-content/uploads/2021/01/torta-vainilla-foto.jpg",
    categoria: "circular"
  },
  {
    id: "TT002",
    nombre: "Torta Circular de Manjar",
    descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    precio: 42000,
    imagen: "https://cdn0.recetasgratis.net/es/posts/8/0/2/torta_milhojas_24208_orig.jpg",
    categoria: "circular"
  },
  {
    id: "TT003",
    nombre: "Torta Circular de Chocolate",
    descripcion: "Exquisita torta de chocolate con cobertura de ganache oscuro, perfecta para los amantes del cacao.",
    precio: 23000,
    imagen: "https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/f28878bd5ffe5c05f6aa3c5ffac21024.jpg",
    categoria: "circular"
  },
  {
    id: "TT004",
    nombre: "Torta Circular de Fresa",
    descripcion: "Torta circular con fresas frescas y crema chantilly, una combinación refrescante y deliciosa.",
    precio: 29990,
    imagen: "https://encasamty.com/cdn/shop/products/LaDivinata-100_1024x1024_2x_f5b9d6c5-6605-41ce-92fe-37e91e2f2bb6_1024x1024.jpg?v=1607639635",
    categoria: "circular"
  },
  {
    id: "TT005",
    nombre: "Torta Circular de Tres Leches",
    descripcion: "Clásica torta empapada en tres tipos de leche, coronada con merengue italiano y canela.",
    precio: 32000,
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    categoria: "circular"
  },
  {
    id: "TT006",
    nombre: "Torta Circular de Lúcuma",
    descripcion: "Sabor tradicional chileno con crema de lúcuma y bizcocho esponjoso, un verdadero tesoro nacional.",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "circular"
  },
  {
    id: "TT007",
    nombre: "Torta Circular Red Velvet",
    descripcion: "Elegante torta de terciopelo rojo con frosting de queso crema, perfecta para ocasiones especiales.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    categoria: "circular"
  },
  {
    id: "TT008",
    nombre: "Torta Circular de Zanahoria",
    descripcion: "Torta húmeda de zanahoria con nueces y cobertura de queso crema con canela.",
    precio: 31000,
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    categoria: "circular"
  },
  {
    id: "TT009",
    nombre: "Torta Circular de Limón",
    descripcion: "Refrescante torta de limón con crema de limón y merengue italiano tostado.",
    precio: 28000,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "circular"
  },
  {
    id: "TT010",
    nombre: "Torta Circular Selva Negra",
    descripcion: "Clásica torta alemana con chocolate, cerezas y crema chantilly, decorada con virutas de chocolate.",
    precio: 40000,
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    categoria: "circular"
  },

  // ========== TORTAS CUADRADAS (10 productos) ==========
  {
    id: "TC001",
    nombre: "Torta Cuadrada de Chocolate",
    descripcion: "Deliciosa torta cuadrada de chocolate con ganache intenso, ideal para celebraciones especiales.",
    precio: 48000,
    imagen: "https://cocinerosargentinos.com/content/recipes/original/recipes.20871.jpg",
    categoria: "cuadrada"
  },
  {
    id: "TC002",
    nombre: "Torta Cuadrada de Vainilla y Frambuesa",
    descripcion: "Elegante torta de vainilla con relleno de frambuesa y decoración floral comestible.",
    precio: 52000,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC003",
    nombre: "Torta Cuadrada Mármol",
    descripcion: "Combinación perfecta de vainilla y chocolate en un diseño marmoleado único.",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC004",
    nombre: "Torta Cuadrada de Manjar y Coco",
    descripcion: "Exquisita combinación de manjar con coco rallado y crema de mantequilla.",
    precio: 49000,
    imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC005",
    nombre: "Torta Cuadrada Oreo",
    descripcion: "Torta de chocolate con galletas Oreo trituradas y crema de queso con Oreo.",
    precio: 50000,
    imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC006",
    nombre: "Torta Cuadrada de Café Moka",
    descripcion: "Torta de café con crema de moka y decoración de granos de café caramelizados.",
    precio: 47000,
    imagen: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC007",
    nombre: "Torta Cuadrada de Piña Colada",
    descripcion: "Tropical torta con piña natural, coco y un toque de ron, decorada con crema de coco.",
    precio: 46000,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC008",
    nombre: "Torta Cuadrada Tiramisu",
    descripcion: "Versión en torta del clásico italiano con capas de café, mascarpone y cacao.",
    precio: 53000,
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC009",
    nombre: "Torta Cuadrada de Frutos del Bosque",
    descripcion: "Torta con mezcla de arándanos, frambuesas y moras frescas con crema chantilly.",
    precio: 51000,
    imagen: "https://images.unsplash.com/photo-1588195538326-c5b1e5b80857?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },
  {
    id: "TC010",
    nombre: "Torta Cuadrada de Chocolate Blanco",
    descripcion: "Delicada torta de chocolate blanco con relleno de crema y fresas.",
    precio: 54000,
    imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop",
    categoria: "cuadrada"
  },

  // ========== POSTRES INDIVIDUALES (10 productos) ==========
  {
    id: "PI001",
    nombre: "Flan de Caramelo",
    descripcion: "Postre individual de flan con caramelo casero y frutos rojos frescos.",
    precio: 5000,
    imagen: "https://cocinemosjuntos.com.co/media/catalog/product/cache/5773068ed9b4f222a4301212c252d702/f/l/flan-de-caramelo-con-frutos-rojos_1__1.jpg",
    categoria: "individual"
  },
  {
    id: "PI002",
    nombre: "Cheesecake de Fresa Individual",
    descripcion: "Mini cheesecake con base de galleta y cobertura de fresa natural.",
    precio: 6500,
    imagen: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI003",
    nombre: "Mousse de Chocolate",
    descripcion: "Suave mousse de chocolate belga servido en copa con crema batida.",
    precio: 5500,
    imagen: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI004",
    nombre: "Tiramisú Individual",
    descripcion: "Clásico postre italiano en porción individual con café y mascarpone.",
    precio: 7000,
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI005",
    nombre: "Panna Cotta de Vainilla",
    descripcion: "Cremosa panna cotta con coulis de frutos rojos y menta fresca.",
    precio: 6000,
    imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI006",
    nombre: "Profiteroles Rellenos",
    descripcion: "Tres profiteroles rellenos de crema pastelera con salsa de chocolate caliente.",
    precio: 5800,
    imagen: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI007",
    nombre: "Brownie con Helado",
    descripcion: "Brownie tibio de chocolate con helado de vainilla y salsa de caramelo.",
    precio: 6200,
    imagen: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI008",
    nombre: "Tartaleta de Limón",
    descripcion: "Delicada tartaleta con crema de limón y merengue tostado.",
    precio: 5500,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI009",
    nombre: "Crème Brûlée",
    descripcion: "Postre francés con crema de vainilla y costra de azúcar caramelizada.",
    precio: 7500,
    imagen: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
    categoria: "individual"
  },
  {
    id: "PI010",
    nombre: "Mini Pavlova",
    descripcion: "Merengue crujiente con crema chantilly y frutas tropicales frescas.",
    precio: 6800,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "individual"
  },

  // ========== PRODUCTOS SIN AZÚCAR (10 productos) ==========
  {
    id: "SA001",
    nombre: "Torta Sin Azúcar de Chocolate",
    descripcion: "Torta de chocolate endulzada con stevia, sin comprometer el sabor intenso del cacao.",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA002",
    nombre: "Torta Sin Azúcar de Zanahoria",
    descripcion: "Saludable torta de zanahoria con nueces y frosting sin azúcar de queso crema.",
    precio: 33000,
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA003",
    nombre: "Cheesecake Sin Azúcar",
    descripcion: "Cremoso cheesecake endulzado naturalmente con eritritol y frutos rojos.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA004",
    nombre: "Brownies Sin Azúcar",
    descripcion: "Pack de 6 brownies de chocolate sin azúcar añadida, endulzados con sucralosa.",
    precio: 15000,
    imagen: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA005",
    nombre: "Muffins Sin Azúcar de Arándanos",
    descripcion: "Pack de 4 muffins con arándanos frescos y endulzante natural.",
    precio: 12000,
    imagen: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA006",
    nombre: "Torta Sin Azúcar de Limón",
    descripcion: "Refrescante torta de limón sin azúcar con glaseado natural.",
    precio: 32000,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA007",
    nombre: "Galletas Sin Azúcar Mix",
    descripcion: "Caja con 12 galletas variadas sin azúcar: avena, chocolate y coco.",
    precio: 10000,
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA008",
    nombre: "Pie Sin Azúcar de Manzana",
    descripcion: "Pie de manzana con canela, endulzado naturalmente con manzanas y stevia.",
    precio: 28000,
    imagen: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA009",
    nombre: "Mousse Sin Azúcar de Chocolate Oscuro",
    descripcion: "Postre individual de mousse de chocolate 70% cacao sin azúcar añadida.",
    precio: 6500,
    imagen: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },
  {
    id: "SA010",
    nombre: "Torta Sin Azúcar Red Velvet",
    descripcion: "Elegante red velvet sin azúcar con frosting de queso crema endulzado naturalmente.",
    precio: 40000,
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    categoria: "sinazucar"
  },

  // ========== PASTELERÍA TRADICIONAL (10 productos) ==========
  {
    id: "PT001",
    nombre: "Mil Hojas Clásica",
    descripcion: "Tradicional torta chilena de mil hojas con manjar y hojaldre crujiente.",
    precio: 45000,
    imagen: "https://cdn0.recetasgratis.net/es/posts/8/0/2/torta_milhojas_24208_orig.jpg",
    categoria: "tradicional"
  },
  {
    id: "PT002",
    nombre: "Brazo de Reina",
    descripcion: "Clásico brazo de reina relleno con manjar y espolvoreado con azúcar flor.",
    precio: 18000,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT003",
    nombre: "Pie de Limón",
    descripcion: "Tradicional pie con relleno de limón y merengue italiano tostado.",
    precio: 30000,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT004",
    nombre: "Kuchen de Manzana",
    descripcion: "Tradicional kuchen alemán con manzanas caramelizadas y canela.",
    precio: 25000,
    imagen: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT005",
    nombre: "Chilenitos Rellenos",
    descripcion: "Docena de chilenitos tradicionales rellenos con manjar.",
    precio: 12000,
    imagen: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT006",
    nombre: "Torta de Hojas",
    descripcion: "Clásica torta de hojas con crema de mantequilla y nueces.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT007",
    nombre: "Alfajores Artesanales",
    descripcion: "Caja de 8 alfajores artesanales rellenos con manjar y bañados en chocolate.",
    precio: 14000,
    imagen: "https://images.unsplash.com/photo-1590080876761-5e8f3e2b5a2a?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT008",
    nombre: "Torta Lúcuma Tradicional",
    descripcion: "Auténtica torta de lúcuma con bizcocho de vainilla y crema de lúcuma.",
    precio: 36000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT009",
    nombre: "Empanadas de Manzana",
    descripcion: "Media docena de empanadas dulces rellenas con manzana y canela.",
    precio: 10000,
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },
  {
    id: "PT010",
    nombre: "Sopaipillas Pasadas",
    descripcion: "Docena de sopaipillas pasadas con chancaca tradicional.",
    precio: 8000,
    imagen: "https://images.unsplash.com/photo-1509365390695-33aec2071693?w=400&h=300&fit=crop",
    categoria: "tradicional"
  },

  // ========== PRODUCTOS SIN GLUTEN (10 productos) ==========
  {
    id: "SG001",
    nombre: "Torta Sin Gluten de Chocolate",
    descripcion: "Deliciosa torta de chocolate elaborada con harinas sin gluten certificadas.",
    precio: 42000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG002",
    nombre: "Torta Sin Gluten de Zanahoria",
    descripcion: "Húmeda torta de zanahoria sin gluten con nueces y frosting de queso crema.",
    precio: 40000,
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG003",
    nombre: "Brownies Sin Gluten",
    descripcion: "Pack de 6 brownies intensos de chocolate sin gluten.",
    precio: 16000,
    imagen: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG004",
    nombre: "Muffins Sin Gluten de Frambuesa",
    descripcion: "Pack de 4 muffins esponjosos con frambuesas frescas, sin gluten.",
    precio: 13000,
    imagen: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG005",
    nombre: "Cheesecake Sin Gluten",
    descripcion: "Cremoso cheesecake con base de galletas sin gluten y frutos rojos.",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG006",
    nombre: "Torta Sin Gluten de Limón",
    descripcion: "Refrescante torta de limón con harina de almendras, completamente sin gluten.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG007",
    nombre: "Galletas Sin Gluten Variadas",
    descripcion: "Caja de 12 galletas sin gluten: chocolate chip, avena y coco.",
    precio: 11000,
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG008",
    nombre: "Cupcakes Sin Gluten",
    descripcion: "Set de 6 cupcakes decorados, elaborados con ingredientes sin gluten.",
    precio: 18000,
    imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG009",
    nombre: "Pie Sin Gluten de Manzana",
    descripcion: "Pie de manzana con masa sin gluten y relleno de manzanas con canela.",
    precio: 32000,
    imagen: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
    categoria: "singluten"
  },
  {
    id: "SG010",
    nombre: "Torta Sin Gluten Red Velvet",
    descripcion: "Elegante red velvet sin gluten con frosting de queso crema.",
    precio: 46000,
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    categoria: "singluten"
  },

  // ========== PRODUCTOS VEGANOS (10 productos) ==========
  {
    id: "VG001",
    nombre: "Torta Vegana de Chocolate",
    descripcion: "Torta de chocolate 100% vegana, sin huevo ni lácteos, con ganache vegano.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG002",
    nombre: "Torta Vegana de Zanahoria",
    descripcion: "Torta de zanahoria vegana con nueces y frosting de anacardos.",
    precio: 36000,
    imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG003",
    nombre: "Brownies Veganos",
    descripcion: "Pack de 6 brownies veganos con chocolate oscuro y nueces.",
    precio: 14000,
    imagen: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG004",
    nombre: "Muffins Veganos de Arándanos",
    descripcion: "Pack de 4 muffins veganos con arándanos frescos y semillas de chía.",
    precio: 12000,
    imagen: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG005",
    nombre: "Cheesecake Vegano de Fresa",
    descripcion: "Cheesecake vegano con base de dátiles y crema de anacardos, cubierto con fresas.",
    precio: 42000,
    imagen: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG006",
    nombre: "Torta Vegana de Limón",
    descripcion: "Torta vegana de limón con glaseado de limón y leche de coco.",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG007",
    nombre: "Galletas Veganas Mix",
    descripcion: "Caja de 12 galletas veganas: chocolate chip, avena-pasas y coco.",
    precio: 10000,
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG008",
    nombre: "Cupcakes Veganos de Vainilla",
    descripcion: "Set de 6 cupcakes veganos con frosting de vainilla y decoración colorida.",
    precio: 16000,
    imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG009",
    nombre: "Torta Vegana Red Velvet",
    descripcion: "Red velvet vegano con frosting de queso crema vegano a base de anacardos.",
    precio: 44000,
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    categoria: "vegano"
  },
  {
    id: "VG010",
    nombre: "Pie Vegano de Manzana",
    descripcion: "Pie de manzana con masa vegana y relleno de manzanas especiadas.",
    precio: 30000,
    imagen: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
    categoria: "vegano"
  },

  // ========== TORTAS ESPECIALES (10 productos) ==========
  {
    id: "TE001",
    nombre: "Torta de Tres Chocolates",
    descripcion: "Elegante torta con capas de chocolate blanco, con leche y oscuro.",
    precio: 55000,
    imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE002",
    nombre: "Torta Ópera",
    descripcion: "Sofisticada torta francesa con capas de café, ganache y crema de mantequilla.",
    precio: 58000,
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE003",
    nombre: "Torta Sacher Vienesa",
    descripcion: "Clásica torta austriaca de chocolate con mermelada de damasco y chocolate.",
    precio: 52000,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE004",
    nombre: "Torta Unicornio",
    descripcion: "Colorida torta de vainilla con decoración de unicornio y arcoíris comestible.",
    precio: 48000,
    imagen: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE005",
    nombre: "Torta de Maracuyá",
    descripcion: "Tropical torta con mousse de maracuyá y bizcocho de vainilla.",
    precio: 47000,
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE006",
    nombre: "Torta de Té Matcha",
    descripcion: "Exótica torta de té verde matcha con crema de chocolate blanco.",
    precio: 50000,
    imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE007",
    nombre: "Torta Arcoíris",
    descripcion: "Impresionante torta con 6 capas de colores del arcoíris y frosting blanco.",
    precio: 54000,
    imagen: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE008",
    nombre: "Torta Espejo de Chocolate",
    descripcion: "Sofisticada torta con cobertura espejo brillante de chocolate.",
    precio: 62000,
    imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE009",
    nombre: "Torta de Dulce de Leche Argentino",
    descripcion: "Torta especial con auténtico dulce de leche argentino y merengue italiano.",
    precio: 49000,
    imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    categoria: "especial"
  },
  {
    id: "TE010",
    nombre: "Torta de Frambuesa y Pistacho",
    descripcion: "Elegante combinación de frambuesa fresca con crema de pistacho.",
    precio: 56000,
    imagen: "https://images.unsplash.com/photo-1588195538326-c5b1e5b80857?w=400&h=300&fit=crop",
    categoria: "especial"
  }
];

export default productos;