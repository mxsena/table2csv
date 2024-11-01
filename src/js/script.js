function downloadCSV() {
    const table = document.getElementById('myTable');
    let csvContent = '';

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        let rowData = [];

        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            rowData.push(cell.textContent.replace(/,/g, ''));
        }

        csvContent += rowData.join(',') + '\r\n';
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table-data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
