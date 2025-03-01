"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sushi = "syake";
function favorite_sushi(neta) {
    switch (neta) {
        case "syake": {
            const message = `${neta}は1番目に好きです。`;
            console.log(message);
            break;
        }
        case "maguro": {
            const message = `${neta}は1番目に好きです。`;
            console.log(message);
            break;
        }
        default:
            console.log(`該当なしです。`);
    }
}
favorite_sushi(sushi);
