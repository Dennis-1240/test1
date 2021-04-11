class Board extends Player {
    private numsArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    get Nums() {
        return this.numsArray;
    }

    private gameOver: boolean = false;
    set GameOver(g: boolean) {
        this.gameOver = g;
    }
    get GameOver() {
        return this.gameOver;
    }

    private input: number;
    set Input(num: number) {
        this.input = num;
    }
    get Input() {
        return this.input;
    }

    Prompt(message = "Your next move:\n"): void {
        do {
            this.Input = +(prompt(message + this.Show("Please enter integer number between 1 - 9 !\n")));
            if (isNaN(b.Input) || b.Input < 1 || b.Input > 9) {
                alert("Please enter integer number between 1 - 9 !");
            }
        }
        while (isNaN(this.Input) || this.Input < 1 || this.Input > 9);
    }

    // פונקציה שבודקת אם המקום פנוי ומציבה במקום סימון
    CheckFreeSpaceAndMove(input: number, sign: string): boolean {
        if (this.Nums[input - 1] == input) {
            this.Nums[input - 1] = sign;
            return true;
        }
        else {
            return false;
        }
    }

    // פונקציה שבודקת האם המשתמש ניצח
    CheckForHumanWin(sign: string, n1: number, n2: number, n3: number): boolean {
        return (
            this.Nums[n1 - 1] == sign &&
            this.Nums[n2 - 1] == sign &&
            this.Nums[n3 - 1] == sign);
    }

    // פונקציה שבודקת האם המחשב יכול לנצח ומציבה סימון
    CheckforComputerWin(sign: string,
        n1: number, n2: number, n3: number): Boolean {
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
    }

    // פונקציה שבודקת האם המחשב יכול לחסום
    ComputerBlockHuman(signO, signX: string, n1: number, n2: number, n3: number): Boolean {
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
    }

    Show(message: string): string {
        return message +
            `-----------\n| ${b.Nums[0]} | ${b.Nums[1]} | ${b.Nums[2]} |\n` +
            `-----------\n| ${b.Nums[3]} | ${b.Nums[4]} | ${b.Nums[5]} |\n` +
            `-----------\n| ${b.Nums[6]} | ${b.Nums[7]} | ${b.Nums[8]} |`;
    }

}

