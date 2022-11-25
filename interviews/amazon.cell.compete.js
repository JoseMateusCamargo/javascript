/*
Cell compete:
Eight houses, represented as a cells, are arranged as a straight line.
Each days every cells competes with adjacent cells. An integer value 1
represents an active cell and a value of 0 represent an inactive cell.
if the neighbour on both the sides of the cell are both active or inactive,
the cell become inactive in the next day, otherwise the become active.
The two cells on each or have a single adjacent cell, so assume that
the unoccupied space in the opposite side is an inactive cell. even after
updating the cell state, consider its previous state when updating the state
of others cells. The state information of the cells should be updated simultaneously.

Write an algorithm to output the state of the cell after the given number of the cell
input: the input to the function consist on two arguments:
states, a list of integer representing the current state of cells;
daisy, an integer representing the number of days

output
Return a list of integers representing the state of the cells after the given number of days.

Note: the elements of the list states contains 0s or 1s only
*/

cellCompete = (cells, days) => {
    // Do the process once per day
    for (let i = 1; i <= days; i++) {
        // Store the temp values
        let dayResults = [];
        // Iterate the last status of the cells
        cells.forEach((_cellState, index) => {
            // Left value: if we are on the first cell, we assume a left value of 0, otherwise we get the value of the previous cell
            let leftValue = (index === 0) ? 0 : cells[index - 1];
            // Right value: if we are on the last cell, we assume a right value of 0, otherwise we get the value of the next cell
            let rightValue = (index === cells.length - 1) ? 0 : cells[index + 1];
            // We store on the temp array the new value, if both neighbors are equal (both 0 or both 1) we store a 1 (inactive), if both neighbors are different each other, we store 1 (active)
            dayResults[index] = (leftValue === rightValue) ? 0 : 1;
        });
        // At the end of the day, we store the new values on the cells array to start the new day process with the new values
        cells = dayResults
    }

    // Return the last value of the cells
    return cells;
}

cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1); // Output: [0,1,0,0,1,0,1,0]
cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2); // Output: [0,0,0,0,0,1,1,0]