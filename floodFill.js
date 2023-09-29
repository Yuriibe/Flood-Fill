
    var grid = generateGridArray();
    console.log(grid);


    function colorCell(cell, color) {
    cell.style.background = color;
    return cell.style.background;

}

    function reset(cell) {
    if (cell !== undefined) {
    return cell.style.background;
}
}

    function getColorCell(cell) {
    if (cell !== undefined) {
    return cell.style.background;
}
    return '';
}

    function generateGridArray() {
    var cells = document.querySelectorAll('.cell');
    var grid = [];
    var x = 0;
    var y = 0;
    for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];

    //var x = (i % 10);
    //var y = Math.floor(i / 10);
    // Wenn in noch kein Array in grid[x] initialisiert wurde, tun wir das.
    if (!grid[x]) {
    grid[x] = [];
}
    grid[x][y] = cell;
    x++;
    if (x > 9) {
    x = 0;
    y++;
}
}
    return grid;
}

    const farbe = ["#00f1f1", "#00008b", "#efa002", "#efa002", "#00f000", "#00f000", "#f00100"]
    globalThis.newColor = farbe[Math.floor(Math.random() * farbe.length)]
    draw()

    function draw() {
    i = 0
    i2 = 0
    i3 = 0;
    while (i < 10) {
    colorCell(grid[i][13], "#000000")
    i++;
}
    while (i3 < 10) {
    colorCell(grid[i3][10], "#000000")
    i3++;
}
    while (i2 < 10) {
    colorCell(grid[5][i2], "#000000")
    i2++;
}
    colorCell(grid[5][13], "")
    colorCell(grid[4][10], "")
    colorCell(grid[8][10], "")
}





    n = grid.length
    m = grid[0].length
    x = 4;
    y = 7;
    //newColor = farbe[Math.floor(Math.random() * farbe.length)]
    newColor = "blue"
    oldColor = getColorCell(grid[x][y]);
    flood(x, y, newColor, oldColor)

    async function flood(x, y, newColor, oldColor) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
    return;
}
    if (getColorCell(grid[x][y]) != oldColor) {
    return;

} else {
    colorCell(grid[x][y], newColor)
    console.log("X: " + x)
    console.warn("Y: " + y)
    await sleep(0.4)
    flood(x + 1, y, newColor, oldColor)
    flood(x - 1, y, newColor, oldColor)
    console.log("X: " + x)
    console.warn("Y: " + y)
    flood(x, y + 1, newColor, oldColor)
    flood(x, y - 1, newColor, oldColor)

}

}

    async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}


