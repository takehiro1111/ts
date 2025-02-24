"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sushi = "syake";
function favorite_sushi(neta) {
    switch (neta) {
        case "syake": {
            var message = "".concat(neta, "\u306F1\u756A\u76EE\u306B\u597D\u304D\u3067\u3059\u3002");
            console.log(message);
            break;
        }
        case "maguro": {
            var message = "".concat(neta, "\u306F1\u756A\u76EE\u306B\u597D\u304D\u3067\u3059\u3002");
            console.log(message);
            break;
        }
        default:
            console.log("\u8A72\u5F53\u306A\u3057\u3067\u3059\u3002");
    }
}
favorite_sushi(sushi);
