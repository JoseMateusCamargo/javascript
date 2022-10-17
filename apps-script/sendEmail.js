/**
 * Sends emails with data from the current spreadsheet.
 * https://developers.google.com/apps-script/articles/sending_emails
 */
function sendEmails() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const startRow = 2; // First row of data to process
    const numRows = 2; // Number of rows to process
    const dataRange = sheet.getRange(startRow, 1, numRows, 2); // Fetch the range of cells A2:B3
    const data = dataRange.getValues(); // Fetch values for each row in the Range.

    for (let i in data) {
        let row = data[i];
        let emailAddress = row[0]; // First column
        let message = row[1]; // Second column
        let subject = 'Sending emails from a Spreadsheet';
        MailApp.sendEmail(emailAddress, subject, message);
    }
}

// This constant is written in column C for rows for which an email
// has been sent successfully.
const EMAIL_SENT = 'EMAIL_SENT';

/**
 * Sends non-duplicate emails with data from the current spreadsheet.
 */
function sendEmails2() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const startRow = 2; // First row of data to process
    const numRows = 2; // Number of rows to process
    const dataRange = sheet.getRange(startRow, 1, numRows, 3); // Fetch the range of cells A2:B3
    const data = dataRange.getValues(); // Fetch values for each row in the Range.

    for (let i = 0; i < data.length; ++i) {
        let row = data[i];
        let emailAddress = row[0]; // First column
        let message = row[1]; // Second column
        let emailSent = row[2]; // Third column

        if (emailSent !== EMAIL_SENT) { // Prevents sending duplicates
            let subject = 'Sending emails from a Spreadsheet';
            MailApp.sendEmail(emailAddress, subject, message);
            sheet.getRange(startRow + i, 3).setValue(EMAIL_SENT);

            // Make sure the cell is updated right away in case the script is interrupted
            SpreadsheetApp.flush();
        }
    }
}

function sendEmails3() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const startRow = 2; // primeira linha de dados a ser processada

    // D2 contem a quantidade de email a ser enviada (= countif(A:A;"<>")-1)
    const numRows = sheet.getRange("D2").getValue(); // numero de linhas a serem processadasna celula D2

    // buscar no intervalo as celulas A2:B3 (matriz a ser utilizada)
    const dataRange = sheet.getRange(startRow, 1, numRows, 3);

    // buscar valores para linha no intervalo
    const data = dataRange.getValues();

    for (let i in data) {
        let row = data[i];
        let emailAddress = row[0];// coluna 1 - email
        let subject = row[1]; // colina 2 - assunto
        let message = row[2]; // coluna 3 - mensagem
        let expired = row[3]; // coluna 4 - expiração

        // função para enviar os e-mails
        MailApp.sendEmail(emailAddress, subject, message);
    }
}

/**
 * Meu método personalizado.
 */
const EMAIL_SENT_USED = 'EMAIL_SENT';

function sendEmailsTrigger() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();

    for (let i = 1; i < data.length; ++i) {
        let row = data[i];
        let emailAddress = row[1];
        let message = row[3];
        let emailSent = row[2];

        if (emailSent !== EMAIL_SENT_USED) {
            let subject = 'Hello, you have a new Action Tracker! is about...';
            MailApp.sendEmail(emailAddress, subject, message);
            sheet.getRange(i + 1, 3).setValue(EMAIL_SENT);
            SpreadsheetApp.flush();
        }
    }
}