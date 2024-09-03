/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    const arraysConcatenados = arrA.concat(arrB);
    const arrayOrdenado = arraysConcatenados.sort((a,b) => a - b);
    const arraySinDuplicados = new Set(arrayOrdenado);
    return [...arraySinDuplicados]
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {

    let arrayFinal = [];

    arrs.forEach((array) => {
        arrayFinal = combinarDosArrays(arrayFinal, array)
    })

    return arrayFinal;
}

// exportar ambas funciones
export default {
    combinarDosArrays,
    combinarNArrays
}