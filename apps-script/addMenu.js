// _v1.1 - 19/03/2019 - stackZmenu 

function onOpen() {
    const spreadsheet = SpreadsheetApp.getActive();
    const menuItems = [
        {name: 'Removes duplicate rows from the current sheet...', functionName: 'removeDuplicates'},
        {name: 'Filter by Color...', functionName: 'msg_getHex'},
        {name: 'Delete Row ...', functionName: 'deleteRows'},
        {name: 'Find Duplicates...', functionName: 'findDuplicates'},
    ];
    spreadsheet.addMenu('Mateus v1.1', menuItems);
}

function removeDuplicates() {
    /**
     * Remove a linha onde todas as informações são iguais
     */
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const newData = [];

    for (let i in data) {
        let row = data[i];
        let duplicate = false;

        for (let j in newData) {
            if (row.join() === newData[j].join()) {
                duplicate = true;
            }
        }

        if (!duplicate) {
            newData.push(row);
            var quant = data.length - newData.length;
        }
    }

    sheet.clearContents();
    sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
    Browser.msgBox('Eita! Removed: ' + quant);
}

function getHex(input) {
    return SpreadsheetApp.getActiveSpreadsheet().getRange(input).getBackgrounds();
}

function msg_getHex() {
    Browser.msgBox('Digite em uma célula em branco =getHex("A:A")');
    const myvalor = Browser.inputBox("Digite a coluna: ");
    const sheet = SpreadsheetApp.getActiveSheet();
    sheet.getRange(myvalor).setValue('=getHex("A:A")');
}

function deleteRows() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const rows = sheet.getDataRange();
    const numRows = rows.getNumRows();
    const values = rows.getValues();
    const seaching = Browser.inputBox("Searching value?"); // var seaching = sheet.getRange("B1").getValue();
    let rowsDeleted = 0;

    for (let i = 0; i <= numRows - 1; i++) {
        let row = values[i];

        // This searches all cells in columns A (change to row[1] for columns B and so on) and deletes row if cell is empty or has value 'delete'.
        if (row[0] === 'delete' || row[0] === seaching) {
            sheet.deleteRow((parseInt(i) + 1) - rowsDeleted);
            rowsDeleted++;
        }
    }
    Browser.msgBox('Erased lines: ' + rowsDeleted);
}

function findDuplicates() {
    // List the columns you want to check by number (A = 1)
    const CHECK_COLUMNS = [2, 3, 5, 6];

    // Get the active sheet and info about it
    const sourceSheet = SpreadsheetApp.getActiveSheet();
    const numRows = sourceSheet.getLastRow();
    const numCols = sourceSheet.getLastColumn();

    // Create the temporary working sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const newSheet = ss.insertSheet("FindDupes");

    // Copy the desired rows to the FindDupes sheet
    for (let i = 0; i < CHECK_COLUMNS.length; i++) {
        let sourceRange = sourceSheet.getRange(1, CHECK_COLUMNS[i], numRows);
        let nextCol = newSheet.getLastColumn() + 1;
        sourceRange.copyTo(newSheet.getRange(1, nextCol, numRows));
    }

    // Find duplicates in the FindDupes sheet and color them in the main sheet
    let dupes = false;
    let data = newSheet.getDataRange().getValues();

    for (i = 1; i < data.length - 1; i++) {
        for (j = i + 1; j < data.length; j++) {
            if (data[i].join() === data[j].join()) {
                dupes = true;
                sourceSheet.getRange(i + 1, 1, 1, numCols).setBackground("red");
                sourceSheet.getRange(j + 1, 1, 1, numCols).setBackground("red");
            }
        }
    }

    // Remove the FindDupes temporary sheet
    ss.deleteSheet(newSheet);

    // Alert the user with the results
    if (dupes) {
        Browser.msgBox("Possible duplicate(s) found and colored red.");
    } else {
        Browser.msgBox("No duplicates found.");
    }
}

function test() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    Browser.msgBox(data);
}


