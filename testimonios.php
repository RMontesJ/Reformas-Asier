<?php

// Página de testimonios — pega las opiniones reales dentro de cada <blockquote>
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Testimonios — Reformas Asier</title>
    <link rel="stylesheet" href="css/nav.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/comun.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/testimonios.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/footer.css?v=<?php echo time(); ?>">
    <link rel="shortcut icon" href="img\Logo-reformas-asier.png" />
</head>
<body>
        <header>
        <div class="container">
           <?php include 'includes/nav.php'; ?>
        </div>
    </header>


    <main class="container" role="main">
        <section class="testimonios" id="testimonios">
            <h1>Opiniones de nuestros clientes</h1>

            <div class="grid testimonials-grid">
                <article class="testimonial card">
                    <blockquote>
                        <!-- Pega aquí la opinión original sin modificar -->
                        He realizado obra en la cocina con Reformas Asier y el resultado ha sido excelente, el compromiso con los plazos y la profesionalidad de Isidro, Juan y Jesús es lo que más destacaría, es de agradecer, gracias. 100% recomendable.
                    </blockquote>
                    <footer class="test-author">— Oscar, hace 3 años</footer>
                </article>

                <article class="testimonial card">
                    <blockquote>
                        <!-- Pega aquí la opinión original sin modificar -->
                        La experiencia con ellos ha sido muy buena. Calidad precio inmejorable!!! Te saben aconsejar para ofrecerte la mejor opción!!! Son muy detallistas con los acabados y trabajan de manera muy limpia!!! Cosa que se agradece, el no pegarte un palizón limpiando!! En general muy bien y muy recomendable.
                    </blockquote>
                    <footer class="test-author">— Roberto, hace 3 años</footer>
                </article>

                <article class="testimonial card">
                    <blockquote>
                        <!-- Pega aquí la opinión original sin modificar -->
                        Muy satisfecho con la reforma del patio y la piscina de mi chalet. Isidro y Juan se han esforzado al máximo para dejar un trabajo muy fino y bien terminado. Espero seguir haciendo más obras con ellos
                    </blockquote>
                    <footer class="test-author">— Andres, hace 3 años</footer>
                </article>

                <article class="testimonial card">
                    <blockquote>
                        <!-- Pega aquí la opinión original sin modificar -->
                        Encantado con el trabajo realizado en mi vivienda. Muy profesionales y cercanos, han cumplido con creces mis expectativas, me han asesorado en todo momento en lo referente a la reforma, decoración, etc y el resultado final ha sido increíble, estoy encantado con mi nueva casa. Les recomiendo al 200%.
                    </blockquote>
                    <footer class="test-author">— Jesús Sánchez, hace 3 años</footer>
                </article>

                <article class="testimonial card">
                    <blockquote>
                        <!-- Pega aquí la opinión original sin modificar -->
                        Compre una casa la cual necesitaba una buena reforma. Esta empresa diseñó y me asesoró en dicha reforma. La casa ha quedado espectacular. Moderna, funcional e increiblemente bonita. Recomiendo a esta empresa para cualquier reforma. Yo he quedado encantada.
                    </blockquote>
                    <footer class="test-author">— Maria Jose, hace 2 semanas</footer>
                </article>

            </div>

            <p class="muted">Pega las opiniones aquí en el chat y las insertaré exactamente tal cual en esta página.</p>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>