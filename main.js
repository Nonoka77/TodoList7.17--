'use strict'
{
    const $text = document.getElementById('text');
    const $btn = document.getElementById('add');
    const $tasks = document.getElementById('tasks');

    $btn.addEventListener('click', () => {
        if (!$text.value) {
            alert('Please Enter a task!')
        } else {
            //taskクラス、button要素を追加する
            $tasks.innerHTML += ` 
             <div class="task">          
                  <span> ${$text.value} </span> <br />
               <button class= "delete">
                  <i class="far fa-trash-alt"></i>
               </button>
             </div>
             `;

            const del = document.querySelectorAll('.delete');
            for (let i = 0; i < del.length; i++) {
                del[i].onclick = function () {
                    this.parentNode.remove();
                }
            }
            const task = document.querySelectorAll('.task');
            for (let i = 0; i < task.length; i++) {
                task[i].addEventListener('click', () => {
                    task[i].classList.toggle('completed');
                });
            }
            $text.value = "";
        }
    })

}