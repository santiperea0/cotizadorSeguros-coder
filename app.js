function calcularSeguro(marca, modelo, año, precio, tipoSeguro) {
    let precioSeguro = 0;

    switch (marca) {
        case 'Toyota':
            precioSeguro = precio * 0.1;
            break;
        case 'Honda':
            precioSeguro = precio * 0.08;
            break;
        case 'Ford':
            precioSeguro = precio * 0.12;
            break;
        case 'Renault':
            precioSeguro = precio * 0.6;
            break;
        case 'Citroen':
            precioSeguro = precio * 0.10;
            break;
        default:
            precioSeguro = precio * 0.15;
            break;
    }

    if (año < 2000) {
        precioSeguro += precio * 0.1;
    } else {
        precioSeguro += precio * 0.05;
    }

    if (tipoSeguro === 'completo') {
        precioSeguro += precio * 0.2;
    }
    return precioSeguro;
}

const marcaAutomovil = prompt('Ingrese la marca del automóvil:');
const modeloAutomovil = prompt('Ingrese el modelo del automóvil:');
const añoAutomovil = parseInt(prompt('Ingrese el año del automóvil:'));
const precioAutomovil = parseFloat(prompt('Ingrese el precio del automóvil:'));
const tipoSeguroAutomovil = prompt('Ingrese el tipo de seguro (basico/completo):');

const precioSeguroAutomovil = calcularSeguro(marcaAutomovil, modeloAutomovil, añoAutomovil, precioAutomovil, tipoSeguroAutomovil);

alert(`El precio del seguro para un ${marcaAutomovil} ${modeloAutomovil} del año ${añoAutomovil} es de $${precioSeguroAutomovil.toFixed(2)}`);
