const XLSX = require('xlsx');

const exelWriter = (coinData) => {

    const workSheet = XLSX.utils.json_to_sheet(coinData)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, 'coins')

    XLSX.write(workBook,{bookType:'xlsx', type:'buffer'})

    XLSX.write(workBook, {bookType:'xlsx', type:'binary'})

    XLSX.writeFile(workBook,'coinData.xlsx')

    console.log('write')

}

export default exelWriter;
