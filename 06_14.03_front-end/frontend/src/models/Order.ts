import { Person } from "./Person"
import { Products } from "./Products"

export type Order ={
    id:number,
    created:Date,
    person: Person,
    products:Products[],
    totalSum:number

}