<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## Trabalhando com apps Sheet

- Convertendo texto em image base64.
- Métodos para envio _automatico_ de e-mail.
- Adicionando menu personalizado
    - Remover linhas duplicadas no aba corrente.
    - Filtro por cor.
    - Deletando linha.
    - Encontrado valores duplicados.
- Encontrando e adicionando um valor.
- Adicionando nova linha na google sheet.
- Como inserir **hyperlink** para navegação.
- Como utilizar **QUERY**.
- REGEX para o CNPJ.
- **ARRAYFORMULA** - Coluna calculada automatica.

---

**Como inserir hyperlink para navegação**

```javascript
function _hyperlink(mySheet) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const planilha = sheet.getSheetByName(mySheet);
    SpreadsheetApp.setActiveSheet(planilha);
}

function btnRegistro() {
    _hyperlink('Página7');
}

function btnIndex() {
    _hyperlink('Index');
}
```

**Como utilizar QUERY**

```mysql
# select usando data
=QUERY(Data;"select B, F where A > date '"&TEXT(DATEVALUE("1/1/2021");"yyyy-mm-dd")&"'";1)

# Example showing filter between two dates
=QUERY(Data!$A$1:$H$136,"select C, B where B > date '"&TEXT(A1,"yyyy-mm-dd")&"' and B <= date '"&TEXT(B1,"yyyy-mm-dd")&"'",1)

# Using today’s date as a filter
=QUERY(Data!$A$1:$H$136,"select C, B where B > date '"&TEXT(TODAY(),"yyyy-mm-dd")&"'",1)

# Referencing a date in a cell
=QUERY(Data!$A$1:$H$136,"select C, B where B > date '"&TEXT(A1,"yyyy-mm-dd")&"'",1)
```

**REGEX para o CNPJ**

```texto
(^\d{2}.\d{3}.\d{3}/\d{4}-\d{2}$)
```

**ARRAYFORMULA - Coluna calculada automatica**

```texto
=ARRAYFORMULA(C:C+1)
```
