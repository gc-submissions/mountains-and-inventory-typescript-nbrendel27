import InventoryItem from "./models/Inventory";


export const inventory: InventoryItem[] = [
    {product: {name: "motor", price:10.00}, quantity: 10},
    {product: {name: "sensor", price:12.50}, quantity: 4},
    {product: {name: "LED", price:1.00}, quantity: 20},
]

export const calcInventoryValue = (arrOfInvItm: InventoryItem[]): number => {
    return arrOfInvItm.reduce((acc, cv) => {
        return acc += cv.product.price * cv.quantity;
    }, 0);
}