function calcularNivel() {
    let nomeHeroi = document.getElementById("nomeHeroi").value;
    let nivelHeroi = parseInt(document.getElementById("nivelHeroi").value);
    let xp = "";

    if (nivelHeroi <= 1000) {
        xp = "Ferro";
    } else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
        xp = "Bronze";
    } else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
        xp = "Prata";
    } else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
        xp = "Ouro";
    } else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
        xp = "Platina";
    } else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
        xp = "Ascendente";
    } else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
        xp = "Imortal";
    } else {
        xp = "Radiante"
    }

    document.getElementById("resultado").textContent = `O Herói de nome ${nomeHeroi} está no nivel de ${xp}.`
    console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${xp}.`)
}