export function FormatCurrency(number) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
}