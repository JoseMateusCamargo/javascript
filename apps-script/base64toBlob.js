// Converter text base 64 in image

function base64toBlob() {
    //by MATEUS 2019/08/08

    const CONVERTED = 'CONVERTED';
    // pasta de imagens convertidas
    const SOURCE = 'https://drive.google.com/drive/u/0/folders/1q0lxcODTxD0qNC_U-tcoPaiGMgVQX1kr';
    const currentFolder = DriveApp.getFolderById("1q0lxcODTxD0qNC_U-tcoPaiGMgVQX1kr");
    var sheet = SpreadsheetApp.getActiveSheet();
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();

    for (let i = 1; i < data.length; ++i) {

        let row = data[i];
        let converter = row[4];
        if (converter !== 'CONVERTED') {

            let a = i + 1;

            let sheet = SpreadsheetApp.getActiveSheet();
            let firstName = sheet.getRange('B' + a).getValue();  //get value in cell of row number VALUE
            let lastName = sheet.getRange('C' + a).getValue();   //get value in cell of row number VALUE
            let date = sheet.getRange('A' + a).getValue();   //get value in cell of row number VALUE
            let fullName = firstName + ' ' + lastName + ' ' + date;
            let asignature = sheet.getRange('F' + a).getValue(); //get value in cell of row number VALUE

            asignature = asignature.split(","); //split value in (,)
            asignature = asignature[asignature.length - 1]; //get last value after (,)

            let base64 = asignature;
            let decoded = Utilities.base64Decode(base64);

            let blob = Utilities.newBlob(decoded, MimeType.JPEG, fullName);
            currentFolder.createFile(blob);

            sheet.getRange(i + 1, 5).setValue(CONVERTED);
            SpreadsheetApp.flush();
        }
    }
}

