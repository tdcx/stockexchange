// External dependencies
import { ObjectId } from "mongodb";
// Class Implementation
export default class Stock {
    constructor(public symbol: string, public id?: ObjectId) {}
}