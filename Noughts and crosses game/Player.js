var Player = /** @class */ (function () {
    function Player(human, computer) {
        this.Human = human;
        this.Computer = computer;
    }
    Object.defineProperty(Player.prototype, "Human", {
        get: function () {
            return this.human;
        },
        set: function (val) {
            this.human = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "Computer", {
        get: function () {
            return this.computer;
        },
        set: function (val) {
            this.computer = val;
        },
        enumerable: false,
        configurable: true
    });
    // פונקציה שקוראת לבדיקת נצחון של המשתמש והודעת נצחון
    Player.prototype.HumanCheckWin = function () {
        if (b.CheckForHumanWin(this.Human, 1, 2, 3) ||
            b.CheckForHumanWin(this.Human, 4, 5, 6) ||
            b.CheckForHumanWin(this.Human, 7, 8, 9) ||
            b.CheckForHumanWin(this.Human, 1, 4, 7) ||
            b.CheckForHumanWin(this.Human, 2, 5, 8) ||
            b.CheckForHumanWin(this.Human, 3, 6, 9) ||
            b.CheckForHumanWin(this.Human, 1, 5, 9) ||
            b.CheckForHumanWin(this.Human, 3, 5, 7)) {
            alert(b.Show("The human has won!\n"));
            alert(b.Show("Gmane Over!!!\n"));
            b.GameOver = true;
            return true;
        }
    };
    // פונקציה שקוראת לבדיקת נצחון של המחשב והודעת ניצחון
    Player.prototype.ComputerCheckWin = function () {
        if (b.CheckforComputerWin(this.Computer, 1, 2, 3) ||
            b.CheckforComputerWin(this.Computer, 4, 5, 6) ||
            b.CheckforComputerWin(this.Computer, 7, 8, 9) ||
            b.CheckforComputerWin(this.Computer, 1, 4, 7) ||
            b.CheckforComputerWin(this.Computer, 2, 5, 8) ||
            b.CheckforComputerWin(this.Computer, 3, 6, 9) ||
            b.CheckforComputerWin(this.Computer, 1, 5, 9) ||
            b.CheckforComputerWin(this.Computer, 3, 5, 7)) {
            alert(b.Show("The computer has won!\n"));
            alert(b.Show("Gmane Over!!!\n"));
            b.GameOver = true;
            return true;
        }
    };
    // פונקציה שקוראת לבדיקת חסימה ושולחת פרמטרים
    Player.prototype.ComputerCheckBlock = function () {
        if (b.ComputerBlockHuman(this.Computer, this.Human, 1, 2, 3) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 4, 5, 6) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 7, 8, 9) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 1, 4, 7) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 2, 5, 8) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 3, 6, 9) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 1, 5, 9) ||
            b.ComputerBlockHuman(this.Computer, this.Human, 3, 5, 7)) {
            return true;
        }
        return false;
    };
    // פונקצית מהלך של המחשב והודעת שוויון
    Player.prototype.Move = function (sign) {
        var arrChecked = [false, false, false, false, false, false, false, false, false];
        var result = false;
        do {
            var randomNum = Math.round(Math.random() * 8 + 1);
            if (arrChecked[randomNum - 1]) {
                continue;
            }
            result = b.CheckFreeSpaceAndMove(randomNum, sign);
            if (result == false) {
                arrChecked[randomNum - 1] = true;
            }
            if (arrChecked.indexOf(false) < 0) {
                alert(b.Show("You are equals!\n"));
                alert(b.Show("Gmane Over!!!\n"));
                b.GameOver = true;
                break;
            }
        } while (result == false);
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map