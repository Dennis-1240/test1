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
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        _this.gameOver = false;
        return _this;
    }
    Object.defineProperty(Board.prototype, "Nums", {
        get: function () {
            return this.numsArray;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "GameOver", {
        get: function () {
            return this.gameOver;
        },
        set: function (g) {
            this.gameOver = g;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "Input", {
        get: function () {
            return this.input;
        },
        set: function (num) {
            this.input = num;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.Prompt = function (message) {
        if (message === void 0) { message = "Your next move:\n"; }
        do {
            this.Input = +(prompt(message + this.Show("Please enter integer number between 1 - 9 !\n")));
            if (isNaN(b.Input) || b.Input < 1 || b.Input > 9) {
                alert("Please enter integer number between 1 - 9 !");
            }
        } while (isNaN(this.Input) || this.Input < 1 || this.Input > 9);
    };
    // פונקציה שבודקת אם המקום פנוי ומציבה במקום סימון
    Board.prototype.CheckFreeSpaceAndMove = function (input, sign) {
        if (this.Nums[input - 1] == input) {
            this.Nums[input - 1] = sign;
            return true;
        }
        else {
            return false;
        }
    };
    // פונקציה שבודקת האם המשתמש ניצח
    Board.prototype.CheckForHumanWin = function (sign, n1, n2, n3) {
        return (this.Nums[n1 - 1] == sign &&
            this.Nums[n2 - 1] == sign &&
            this.Nums[n3 - 1] == sign);
    };
    // פונקציה שבודקת האם המחשב יכול לנצח ומציבה סימון
    Board.prototype.CheckforComputerWin = function (sign, n1, n2, n3) {
        if (this.Nums[n1 - 1] == sign && this.Nums[n2 - 1] == sign) {
            if (this.CheckFreeSpaceAndMove(n3, sign)) {
                return true;
            }
        }
        else if (this.Nums[n1 - 1] == sign && this.Nums[n3 - 1] == sign) {
            if (this.CheckFreeSpaceAndMove(n2, sign)) {
                return true;
            }
        }
        else if (this.Nums[n2 - 1] == sign && this.Nums[n3 - 1] == sign) {
            if (this.CheckFreeSpaceAndMove(n1, sign)) {
                return true;
            }
        }
        return false;
    };
    // פונקציה שבודקת האם המחשב יכול לחסום
    Board.prototype.ComputerBlockHuman = function (signO, signX, n1, n2, n3) {
        if (this.Nums[n1 - 1] == signX && this.Nums[n2 - 1] == signX) {
            if (this.CheckFreeSpaceAndMove(n3, signO)) {
                return true;
            }
        }
        else if (this.Nums[n1 - 1] == signX && this.Nums[n3 - 1] == signX) {
            if (this.CheckFreeSpaceAndMove(n2, signO)) {
                return true;
            }
        }
        else if (this.Nums[n2 - 1] == signX && this.Nums[n3 - 1] == signX) {
            if (this.CheckFreeSpaceAndMove(n1, signO) == true) {
                return true;
            }
        }
        return false;
    };
    Board.prototype.Show = function (message) {
        return message +
            ("-----------\n| " + b.Nums[0] + " | " + b.Nums[1] + " | " + b.Nums[2] + " |\n") +
            ("-----------\n| " + b.Nums[3] + " | " + b.Nums[4] + " | " + b.Nums[5] + " |\n") +
            ("-----------\n| " + b.Nums[6] + " | " + b.Nums[7] + " | " + b.Nums[8] + " |");
    };
    return Board;
}(Player));
//# sourceMappingURL=Board.js.map