const Directions = ({
    up: "up",
    down: "down",
    right: "right",
    left: "left"
});

export function printInConsole(astralObjectList) {
    for (let x = 0; x < 29; x++) {
        let row = "";
        for (let y = 0; y < 29; y++) {
            const element = astralObjectList.filter((item) => (item.row == x && item.column == y));
            if (!!element[0]) {
                if (element[0].type === "cometh") {
                    if (element[0].direction === Directions.left)
                        row += " <";
                    else if (element[0].direction === Directions.right)
                        row += " >";
                    else if (element[0].direction === Directions.down)
                        row += " v";
                    else 
                        row += " ^";
                } else if (element[0].type === "polyanet") {
                    row += ' X';
                } else {
                    row += ' @';
                }
            } else {
                row += '  ';
            }
        }
        console.log(row);
    }
}
