<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript e JQuery

## Trabalhando com [DataTables](https://datatables.net/)

Adicione controles de interação avançados às suas tabelas HTML de forma fácil e gratuita.

#### _Let's Code!_

- Botão exportar
    - Exportando com conjunto de caracteres UTF8.
- `columns.render` Exibir imagem em uma das colunas.
- Personalização da janela de visualização de impressão.

---

**Botão exportar**

```Javascript
$(document).ready(function () {
    $('#example').DataTable({
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });
});
```

```Javascript
// Exportando com conjunto de caracteres UTF8
buttons: [
    {
        extend: 'csv', text: 'Export csv', charset: 'utf-8', extension: '.csv',
        fieldSeparator: ';', fieldBoundary: '', filename: 'export', bom: true
    }
]
```

> https://code.jquery.com/jquery-3.5.1.js
https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js
https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js
https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js
https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js
https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js
https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js
https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js

> https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css
https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css

**`columns.render` Exibir imagem em uma das colunas**

```Javascript
$('#matchOrderedTable').dataTable({
    "ajax": {
        "url": TippNett.Api.Url + "Match/DataTable",
        "data": function (d) {
            d.token = authToken;
        }
    },
    "columns": [{"data": "Created"}, {"data": "OrderLoc", render: getImg}, {"data": "OrderMatchLoc", render: getImg}]
});

function getImg(data, type, full, meta) {
    var orderType = data.OrderType;
    if (orderType === 'Surplus') {
        return '<img src="image path here" />';
    } else {
        return '<img src="image path here" />';
    }
}
```

**Personalização da janela de visualização de impressão**

```Javascript
$(document).ready(function () {
    $('#example').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body)
                        .css('font-size', '10pt')
                        .prepend(
                            '<img src="http://datatables.net/media/images/logo-fade.png" style="position:absolute; top:0; left:0;" />'
                        );

                    $(win.document.body).find('table').addClass('compact').css('font-size', 'inherit');
                }
            }
        ]
    });
});
```

> https://code.jquery.com/jquery-3.5.1.js
https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js
https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js
https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js

> https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css
https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css