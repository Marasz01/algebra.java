var tableBegin =
  "<table><thead><tr><th>IME</th><th>PREZIME</th></tr></thead><tbody>";
var tableEnd = "</tbody></table>";

var rowBegin = "<tr>";
var rowEnd = "</tr>";

var rowData = ""; //'<td>ime</td><td>prezime</td>'

var row = "";

for (var i = 1; i <= 20; i++) {
  row += rowBegin;
  rowData = "<td>ime" + i + "</td><td>prezime" + i + "</td>";
  row += rowData; //formirani podaci dodani u varijablu 'row'
  row += rowEnd; // </tr>
  //<tr><td>ime1</td><td>prezime1</td></tr> i onda na svaku vrijednost nadodaje 1
}

document.write(tableBegin + row + tableEnd);
