
// שני אובייקטים: לוח ושחקנים
let p: Player = new Player("X", "O");
let b: Board = new Board("X", "O");

let counter: number = 0;
do {
    // מהלך של משתמש
    let humanMove = false;
    do {
        if (counter == 0) {
            b.Prompt("Welcome to the noughts and crosses game :)\n");
            counter++;
        }
        else {
            b.Prompt();
        }
        humanMove = b.CheckFreeSpaceAndMove(b.Input, p.Human);
        if (!humanMove) {
            alert(b.Show("The place is taken!\n"));
        }
    } while (humanMove == false);

    // בדיקת ניצחון של המשתמש
    if (p.HumanCheckWin()) {
        break;
    }

    // בדיקת ניצחון של המחשב
    if (p.ComputerCheckWin()) {
        break;
    }

    // בדיקת חסימה של המחשב ומהלך
    if (p.ComputerCheckBlock() == false) {
        b.Move(p.Computer);
    }
} while (b.GameOver == false);

