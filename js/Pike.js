import { Fish } from "./Fish.js";

export class Pike extends Fish {
    grantWish(wish) {
        return `${this.name}: Your wish "${wish}" is granted!`;
    }
}