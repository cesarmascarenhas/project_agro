export function normalizeString(str){
    return str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function listToMatrix(list, elementsPerSubArray) {

    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }

    return matrix;
}

export function timestampToDateTimeShort(timestamp){
    return new Date(parseInt(timestamp)).toLocaleDateString('pt-BR', { dateStyle: 'short' });
}