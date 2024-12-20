document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Resetear errores previos
    clearErrors();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const plan = document.getElementById('plan').value;
    
    let isValid = true;
    
    // Validación del nombre
    if (!nombre) {
        showError('nombre', 'El nombre es obligatorio');
        isValid = false;
    } else if (nombre.length > 50) {
        showError('nombre', 'El nombre no puede exceder 50 caracteres');
        isValid = false;
    }
    
    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email', 'El email es obligatorio');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Por favor ingrese un email válido');
        isValid = false;
    }
    
    // Validación de plan
    if (!plan) {
        showError('plan', 'Por favor seleccione un plan');
        isValid = false;
    }
    
    if (isValid) {
        mostrarResultados(nombre, email, plan);
        this.reset();
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    field.classList.add('error');
    errorDiv.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(div => div.textContent = '');
    document.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
}

function mostrarResultados(nombre, email, plan) {
    const resultadosDiv = document.getElementById('resultados');
    
    const container = document.createElement('div');
    container.className = 'resultado-consulta';
    
    const titulo = document.createElement('h3');
    titulo.textContent = 'Consulta recibida';
    
    const datos = document.createElement('p');
    datos.innerHTML = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Plan:</strong> ${plan}
    `;
    
    container.appendChild(titulo);
    container.appendChild(datos);
    
    resultadosDiv.appendChild(container);
}