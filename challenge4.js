function landMass(name, area) {
    const GLOBAL_MAsS = 148940000;

    const percent = ((area*100)/GLOBAL_MAsS).toFixed(2);

    return {
        "percent": Number.parseFloat(percent),
        "message": `${name} representa el ${percent}% de la masa de la tierra`,
    }
}

module.exports = landMass;