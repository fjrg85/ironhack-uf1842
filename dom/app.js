// ¿En tu páis de origen es normal dejar propina?
CalcularPropina = (total, propina) => {
    return (parseFloat(total) * parseFloat(propina)) / 100;
}

CalculateTotal = (total, propina) => {
    return parseFloat(total) + CalcularPropina(total, propina);
}

Calculate = () => {
    let total = document.getElementById("bill-amount").value;
    let propina = document.getElementById("percentage-tip").value;
    document.getElementById("tip-amount").value = CalcularPropina(total, propina).toFixed(2);
    document.getElementById("total").value = CalculateTotal(total, propina).toFixed(2);
}