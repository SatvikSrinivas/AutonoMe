
export function round(num) {
    return Math.round((num + Number.EPSILON) * 10) / 10
}
