class Player {
    private human: string;
    set Human(val: string) {
        this.human = val;
    }
    get Human(): string {
        return this.human;
    }

    private computer: string;
    set Computer(val: string) {
        this.computer = val;
    }
    get Computer(): string {
        return this.computer;
    }

    constructor(human: string, computer: string) {
        this.Human = human;
        this.Computer = computer;
    }

    // פונקציה שקוראת לבדיקת נצחון של המשתמש והודעת נצחון
    HumanCheckWin(): boolean {
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
    }

    // פונקציה שקוראת לבדיקת נצחון של המחשב והודעת ניצחון
    ComputerCheckWin(): boolean {
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
    }
    // פונקציה שקוראת לבדיקת חסימה ושולחת פרמטרים
    ComputerCheckBlock(): boolean {
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
    }

    // פונקצית מהלך של המחשב והודעת שוויון
    Move(sign: string) {
        let arrChecked: boolean[] = [false, false, false, false, false, false, false, false, false];
        let result: boolean = false;
        do {
            let randomNum = Math.round(Math.random() * 8 + 1);
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
    }
}

