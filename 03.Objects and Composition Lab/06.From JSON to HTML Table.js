function fromJSONToHTMLTable(json){
    let output = ['<table>']
    let headings = '';

    let data = JSON.parse(json);
    var headingsKeys = Object.keys(data[0]);

    headings = `<tr>${headingsKeys.map(el => `<th>${el}</th>`).join('')}</tr>`;

    output.push(headings);

    for (const keys of data) {
        let values = Object.values(keys);
        let element = `<tr>${values.map(el => `<td>${el}</td>`).join('')}</tr>`;
        output.push(element);
    }

    output.push('</table>');

    return output;
}

const output = fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    "Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`
);

console.log(output);

