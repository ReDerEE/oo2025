import { Category } from "./Category"

export type Products = {
    id: number,
    name: string,
    active: boolean,
    img: string,
    price: number,
    category:Category
}