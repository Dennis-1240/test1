var HumanPlayer = /** @class */ (function () {
    function HumanPlayer(sign) {
        this.name = "Human";
        this.sign = sign;
    }
    HumanPlayer.prototype.CheckWin = function () {
        if (b.CheckForWin(this.sign, 1, 2, 3) ||
            b.CheckForWin(this.sign, 4, 5, 6) ||
            b.CheckForWin(this.sign, 7, 8, 9) ||
            b.CheckForWin(this.sign, 1, 4, 7) ||
            b.CheckForWin(this.sign, 2, 5, 8) ||
            b.CheckForWin(this.sign, 3, 6, 9) ||
            b.CheckForWin(this.sign, 1, 5, 9) ||
            b.CheckForWin(this.sign, 3, 5, 7)) {
            alert(a.Show("The " + name + " has won!\n"));
            b.GameOver = true;
            return true;
        }
    };
    HumanPlayer.prototype.Move = function () {
        ;
    };
    return HumanPlayer;
}());
//# sourceMappingURL=HumanPlayer.js.map