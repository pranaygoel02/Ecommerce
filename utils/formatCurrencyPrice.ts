export default function formatToCurreny(price : number) {
    return new Intl.NumberFormat('en-US').format(price)
}