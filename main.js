var msg  = document.title;
var speed = 500;
var endChar = " ";
var pos = 0;

function moveTitle() {
     var ml = msg.length;
    title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
    document.title = title;
    pos++;
    if (pos > ml) pos=0;
    window.setTimeout("moveTitle()",speed);
}

moveTitle();

let listTodo = [
    {
        work: 'Học online',
    },
    {
        work: 'Nấu cơm'
    },
    {
        work: 'Làm bài tập',
    }
]

function render() {
    $('.content-table').html('')
    for(let i = 0; i < listTodo.length; i++) {
        let divTable = `
        <tr>
            <td>${listTodo[i].work}</td>
            <td><button index="${i}" type="button" class="modify btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Modify</button>
            <td><button index="${i}" class="delete">Delete</button>
        </tr>
        `
        $('.content-table').append(divTable)
    }    
    $('input[type="checkbox"]').on('change', function(){
        if (this.checked) {
            $('td').css({'text-decoration': 'line-through'})
            $('.modify').css({"background": 'grey'})
            $('.delete').css({"background": 'grey'})
        }
        else {
            $('td').css({"text-decoration": 'none'})
            $('.modify').css({"background": '#1471CD'})
            $('.delete').css({"background": '#ff5722'})
        }
    })

    // $(document).ready(function(){
    //     $('input[type="checkbox"]').on('click', function() {
    //         var index = $('input[type="checkbox"]:checked')
    //         if(index.length > 0) {
    //                 $('td').css({'text-decoration': 'line-through'})
    //                 $('.modify').css({"background": 'grey'})
    //                 $('.delete').css({"background": 'grey'})
    //         } else {
    //             $('td').css({"text-decoration": 'none'})
    //             $('.modify').css({"background": '#1471CD'})
    //             $('.delete').css({"background": '#ff5722'})
    //         }
    //     })
    // })

    $('#deleteAll').on('click', function() {
        let index = $(this).attr('index')
        listTodo.splice(index, listTodo.length)
        render()
    })
    $('.delete').on('click', function() {
        let index = $(this).attr('index')
        listTodo.splice(index, 1)
        render()
    })
    $('.modify').on('click', function() {
        let index = $(this).attr('index')
        $('button[confirm="confirm"]').attr('index', index)
    })
}

$('#button').on('click', function(){
    let work = $('#typeTask').val()
    if (work === '') {
        $('#button').off('click', function() {
            
        })
    } else listTodo.unshift({work})
    render()
})

$('button[confirm="confirm"]').on('click', function() {
    let newTypeTask = $('#newTypeTask').val()
    let index = $(this).attr('index')
    listTodo[index].work = newTypeTask
    render()
})

render()



