import { Tank } from "./Tank.js";
export class UserTank extends Tank {
    constructor(name) {
        super();
        this.name = '玩家坦克';
        this.width = 40;
    }
    run() {
        return 0;
    }
}
