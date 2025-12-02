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
    <script type="module" src="js/testimonios.js"></script>
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

            <h2>Dejar reseña</h2>

<label>Calificación:</label>
<div id="stars" style="font-size:24px; cursor:pointer;">
  ★★★★★
</div>

<input type="hidden" id="puntuacion" value="5">
<input type="text" placeholder="Tu nombre" id="nombreUsuario">
<textarea id="resenaTexto" placeholder="Escribe tu reseña..."></textarea>
<br>
<button onclick="guardarResena()">Enviar reseña</button>

<hr>

<h2>Reseñas</h2>
<div id="listaResenas"></div>


            <p class="muted"></p>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>