// Find and add value

function Entrada() {
    const abaEntrada = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("entrada");
    const abaEstoque = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data_base");
    const abaHistorico = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("historico");
    const produto = abaEntrada.getRange("A2").getValue();
    const busca = Procura(produto, abaEstoque.getRange("A2:A"));

    if (busca != null) {
        const linha = busca.getRow();
        const estoque = abaEstoque.getRange(linha, 2).getValue();
        const entrada = abaEntrada.getRange("B2").getValue();

        if (Browser.msgBox('Confirma entrada de ' + entrada + ' ' + produto + ' ?', Browser.Buttons.YES_NO) === 'yes') {
            abaEstoque.getRange(linha, 2).setValue(estoque + entrada);
            abaHistorico.appendRow([new Date(), produto, entrada, Session.getActiveUser().getEmail()]);
            abaEntrada.getRange("A2").setValue("");
            abaEntrada.getRange("B2").setValue("");
            Browser.msgBox("Entrada registrada no estoque e no histórico!");
        }
    } else {
        Browser.msgBox("Produto não encontrado!");
    }
}

function Procura(valor, intervalo) {
    const valores = intervalo.getValues();

    for (let i = 0; i < valores.length; i++) {
        for (let j = 0; j < valores[i].length; j++) {
            if (valores[i][j] === valor) {
                return intervalo.getCell(i + 1, j + 1);
            }
        }
    }
    return null;
}