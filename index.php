<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Reformas Asier</title>
    <script src="../js/indexForm.js" defer></script>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/nav.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="shortcut icon" href="img\Logo-reformas-asier.png" />
</head>
<body>
    <header>
        <div class="container">
           <?php include 'includes/nav.php'; ?>
        </div>
    </header>

    <main class="container" role="main">
        <section class="hero" id="inicio">
            <div class="hero-left">
                <h1>Reformas integrales con garantía y presupuesto claro</h1>
                <p class="lead">Transformamos viviendas, cocinas, baños y locales con acabados duraderos y materiales de calidad. Servicio llave en mano.</p>
                <a href="#contacto" class="cta">Solicitar presupuesto</a>

                <div class="services">
                    <div class="service card">
                        <h3>Reformas de cocina</h3>
                        <p class="muted">Diseño, fontanería, electricidad y montaje.</p>
                    </div>
                    <div class="service card">
                        <h3>Baños y alicatados</h3>
                        <p class="muted">Impermeabilización, ducha a ras de suelo y mobiliario a medida.</p>
                    </div>
                    <div class="service card">
                        <h3>Reformas integrales</h3>
                        <p class="muted">Coordinación total: albañilería, carpintería y acabados.</p>
                    </div>
                    <div class="service card">
                        <h3>Locales comerciales</h3>
                        <p class="muted">Adaptaciones, licencias y puesta a punto para apertura.</p>
                    </div>
                </div>
            </div>

            <div class="hero-right">
                <div class="card featured">
                    <img class="responsive-img" src="https://via.placeholder.com/600x400?text=Proyecto+destacado" alt="Proyecto destacado">
                    <strong>Proyecto destacado:</strong>
                    <p class="muted">Reforma integral de vivienda en centro de la ciudad — 4 semanas.</p>
                </div>
            </div>
        </section>

        <section id="portfolio" class="portfolio">
            <h2>Proyectos recientes</h2>
            <p class="muted">Algunos trabajos realizados — haz clic para ver más detalle.</p>
            <div class="grid">
                <a class="card project" href="#"><img class="responsive-img" src="https://via.placeholder.com/600x400?text=Proyecto+1" alt="Proyecto 1"><p>Reforma cocina moderna</p></a>
                <a class="card project" href="#"><img class="responsive-img" src="https://via.placeholder.com/600x400?text=Proyecto+2" alt="Proyecto 2"><p>Baño con plato a ras</p></a>
                <a class="card project" href="#"><img class="responsive-img" src="https://via.placeholder.com/600x400?text=Proyecto+3" alt="Proyecto 3"><p>Local comercial reformado</p></a>
                <a class="card project" href="#"><img class="responsive-img" src="https://via.placeholder.com/600x400?text=Proyecto+4" alt="Proyecto 4"><p>Reforma integral</p></a>
            </div>
        </section>

        <section id="sobre-nosotros" class="about">
            <h2>Sobre nosotros</h2>
            <p class="muted">Empresa familiar con más de 25 años de experiencia en reformas. Trabajamos con materiales certificados y ofrecemos garantía escrita en todos los trabajos.</p>
        </section>

        <section id="contacto" class="contact">
            <h2>Contacto y presupuesto</h2>
            <p class="muted">Rellena el formulario o llámanos para una visita sin compromiso.</p>

            <div class="card">
                <form id="contactForm" onsubmit="submitForm(event)">
                    <div class="row">
                        <input type="text" id="name" name="name" placeholder="Nombre" required>
                        <input type="tel" id="phone" name="phone" placeholder="Teléfono" required>
                    </div>
                    <div class="full">
                        <input type="email" id="email" name="email" placeholder="Email" required>
                    </div>
                    <div class="full">
                        <textarea id="message" name="message" rows="5" placeholder="Cuéntanos tu proyecto (metros, estancias, ideas)" required></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn">Enviar solicitud</button>
                        <a class="tel-link" href="tel:+34900000000">Llámanos: +34 900 000 000</a>
                    </div>
                    <p id="formStatus" class="form-status"></p>
                </form>
            </div>
        </section>
        <?php include 'includes/footer.php'; ?>
    </main>

</body>
</html>
