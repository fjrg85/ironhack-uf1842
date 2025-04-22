/** 
 * Disponemos de una función que debe formatear un string, en función del resultado de un partido de fútbol (es para una página Web deportiva). 
 * 
 * 
 * @param {array<string>} teams Los competidores del partido, en un array de strings, siempre de dos posiciones
 * @param {array<number>} scores Las goles que han metido cada equipo, respectivamente.
 * 
 * @returns {string} Resultado del partido, siguiendo el formato indicado en los comentarios, según si ha ganado el primer equipo, el segundo, o ha habido empate.   
*/
function uefaEuro2016(teams, scores) {
    // Comprobamos que el array de equipos tiene exactamente 2 elementos
    if (teams.length !== 2) {
        throw new Error("El array de equipos debe tener exactamente 2 elementos.");
    }

    // Comprobamos que el array de scores tiene exactamente 2 elementos
    if (scores.length !== 2) {
        throw new Error("El array de scores debe tener exactamente 2 elementos.");
    }

    // Desestructuramos los arrays para facilitar la lectura
    const [team1, team2] = teams;
    const [score1, score2] = scores;

    // Comparamos los scores y formateamos el resultado
    if (score1 > score2) {
        return `At match ${team1} - ${team2}, ${team1} won!`;
    } else if (score1 < score2) {
        return `At match ${team1} - ${team2}, ${team2} won!`;
    } else {
        return `At match ${team1} - ${team2}, teams played draw.`;
    }
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])) // "At match Portugal - Iceland, teams played draw."
console.log(uefaEuro2016(['Italy', 'Spain'], [2, 0])) // "At match Italy - Spain, Italy won!"
