interface Price {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

type TypeCalc = (prop: Price) => number | string

const totalPrice: TypeCalc = ({ price, discount, isInstallment, months }): number | string => {
    return isInstallment === true ? ((price - ((price * discount) / 100)) / months) : 'Рассрочка не полагается'
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// 6250