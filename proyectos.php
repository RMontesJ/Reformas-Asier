<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyectos</title>
    <link rel="stylesheet" href="css/comun.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/nav.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="css/proyectos.css?v=<?php echo time(); ?>">
    <link rel="shortcut icon" href="img\Logo-reformas-asier.png" />

</head>
<body>
    
<header>
        <div class="container">
            <?php include 'includes/nav.php'; ?>
        </div>
    </header>

    <main>
        <section id="portfolio" class="section">
            <div class="container">
                <h2>Proyectos</h2>
                <p class="muted">Reforma de baño.</p>
                <div class="grid">
                    <a class="card project" href="#"><img class="responsive-img"
                            src="img/fotoBañoAntes.jpeg" alt="Proyecto 1">
                        <p>Antes</p>
                    </a>
                    
                    <a class="card project" href="#"><img class="responsive-img"
                            src="img/fotoBañoDespues.jpeg" alt="Proyecto 2">
                        <p>Despues</p>
                    </a>
                </div>
            </div>
        </section>

</body>
</html>