// שני אובייקטים: לוח ושחקנים
var p = new Player("X", "O");
var b = new Board("X", "O");
var counter = 0;
do {
    // מהלך של משתמש
    var humanMove = false;
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
//# sourceMappingURL=app.js.map