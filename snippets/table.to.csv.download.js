// Converter table para arquivo CSV e realize download

// Table element
$("table").tableToCSV();

// Function
jQuery.fn.tableToCSV = function () {

    let clean_text = function (text) {
        text = text.replace(/"/g, '\\"').replace(/'/g, "\\'");
        return '"' + text + '"';
    };

    $(this).each(function () {
        const table = $(this);
        const caption = $(this).find('caption').text();
        let title = [];
        let rows = [];

        $(this).find('tr').each(function () {
            let data = [];
            $(this).find('th').each(function () {
                let text = clean_text($(this).text());
                title.push(text);
            });
            $(this).find('td').each(function () {
                let text = clean_text($(this).text());
                data.push(text);
            });
            data = data.join(",");
            rows.push(data);
        });

        title = title.join(",");
        rows = rows.join("\n");

        let csv = title + rows;
        let uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        let download_link = document.createElement('a');
        download_link.href = uri;
        let ts = new Date().getTime();

        if (caption == "") {
            download_link.download = ts + ".csv";
        } else {
            download_link.download = caption + "-" + ts + ".csv";
        }

        document.body.appendChild(download_link);
        download_link.click();
        document.body.removeChild(download_link);
    });
}