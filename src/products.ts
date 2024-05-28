import Product from "./models/Product";


export const products: Product[] = [
    {name: "spoon", price: 1.99},
    {name: "fork", price: 1.99},
    {name: "rope", price: 3.99}
];

export const calcAverageProductPrice = (arrOfProd: Product[]): number => {
    if(arrOfProd.length === 0) {return 0;}
    return parseFloat((arrOfProd.reduce((acc: number, cv: Product) => {
        return acc + cv.price
    }, 0)/arrOfProd.length).toFixed(2));
};