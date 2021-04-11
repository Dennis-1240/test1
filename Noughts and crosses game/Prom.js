var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prom = /** @class */ (function (_super) {
    __extends(Prom, _super);
    function Prom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Prom.prototype.Prom = function () {
        do {
            this.Input = +(prompt("Welcome to the noughts and crosses game :)\nPlease enter number between 1-9\n" +
                ("-----------\n| " + this.Nums[0] + " | " + this.Nums[1] + " | " + this.Nums[2] + " |\n") +
                ("-----------\n| " + this.Nums[3] + " | " + this.Nums[4] + " | " + this.Nums[5] + " |\n") +
                ("-----------\n| " + this.Nums[6] + " | " + this.Nums[7] + " | " + this.Nums[8] + " |")));
        } while (isNaN(this.Input) || this.Input < 1 || this.Input > 9);
    };
    return Prom;
}(Board));
// לפצל את השחקנים ולהוריש אותם, המחשב ירש את האדם ולוח מהמחשב
// ולשחק אם ההורשה בדגש על אלרטים ופרומפט
alert("The computer has won!" +
    ("-----------\n| " + this.Nums[0] + " | " + this.Nums[1] + " | " + this.Nums[2] + " |\n") +
    ("-----------\n| " + this.Nums[3] + " | " + this.Nums[4] + " | " + this.Nums[5] + " |\n") +
    ("-----------\n| " + this.Nums[6] + " | " + this.Nums[7] + " | " + this.Nums[8] + " |"));
//# sourceMappingURL=Prom.js.map