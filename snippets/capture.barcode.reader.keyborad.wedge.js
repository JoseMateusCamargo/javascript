$(() => {
    const barcodes_scanner = {barcodeData: '', deviceId: '', symbology: '', timestamp: 0, dataLength: 0}

    function onScannerNavigate(barcodeData, deviceId, symbology, timestamp, dataLength) {
        barcodes_scanner.barcodeData = barcodeData
        barcodes_scanner.deviceId = deviceId
        barcodes_scanner.symbology = symbology
        barcodes_scanner.timestamp = timestamp
        barcodes_scanner.dataLength = dataLength
        $(barcodes_scanner).trigger('scan')
    }

    barcodes_scanner.tmpTimestamp = 0
    barcodes_scanner.tmpData = ''

    $(document).on('keypress', function (e) {
        e.stopPropagation()
        let keycode = (e.keyCode ? e.keyCode : e.which)

        if (barcodes_scanner.tmpTimestamp < Date.now() - 500) {
            barcodes_scanner.tmpData = ''
            barcodes_scanner.tmpTimestamp = Date.now()
        }

        if (keycode === 13 && barcodes_scanner.tmpData.length > 0) {
            onScannerNavigate(barcodes_scanner.tmpData, 'FAKE_SCANNER', 'WEDGE', barcodes_scanner.tmpTimestamp, barcodes_scanner.tmpData.length)
            barcodes_scanner.tmpTimestamp = 0
            barcodes_scanner.tmpData = ''
        } else if (e.charCode && e.charCode > 0) {
            barcodes_scanner.tmpData += String.fromCharCode(e.charCode)
        }
    })

    $(barcodes_scanner).on('scan', function (e) {
        alert(barcodes_scanner.barcodeData)
    })
})