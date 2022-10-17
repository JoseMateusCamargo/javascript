function Historico() {
    const aba = SpreadsheetApp.getActiveSheet();
    let ultima = aba.getLastRow();

    if (aba.getMaxRows() === ultima) {
        aba.insertRowAfter(ultima);
        ultima = ultima + 1;
    }

    ultima = ultima + 1;

    for (let i = 1; i <= 3; i++) {
        aba.getRange(ultima, i).setValue(aba.getRange(1, i).getValue());
        aba.getRange(1, i).setValue("");
    }

    aba.getRange(1, 1).activate();
}