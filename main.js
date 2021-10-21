let listTodo = [
    {
        work: 'Hoc lap trinh',
        date: 'abc',
    },
    {
        work: 'Hoc JS',
        date: 'abc',
    },
    {
        work: 'Hoc Ruby',
        date: 'asgasg',
    }
]

for(let i = 0; i < listTodo.length; i++) {
    let divTable = `
    <tr>
        <td><input type="checkbox"></td>
        <td>${listTodo[i].work}</td>
        <td>${listTodo[i].date}</td>
    </tr>
    `
    $('.content-table').append(divTable)
}

$('#button').on('click', function(){
    let button = $('#typeTask').val()
    console.log(button)
})

