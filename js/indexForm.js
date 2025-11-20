function submitForm(e){
            e.preventDefault();
            const status = document.getElementById('formStatus');
            const data = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            console.log('Solicitud de presupuesto', data);
            status.textContent = 'Solicitud enviada. En breve nos pondremos en contacto.';
            document.getElementById('contactForm').reset();
        }