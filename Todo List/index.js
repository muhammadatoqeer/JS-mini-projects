// let addBtn = document.querySelector('input[type=submit]');
// let input = document.querySelector('input[type=text]');
// let activity = document.getElementById('activities');
// let trash = document.getElementsByClassName('fa-trash')[0];
// let span = document.querySelector('span');

// addBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     let p = document.createElement('p');

//     if (input.value === '') {
//         alert('Add a valid task please!');
//     } else {
//         p.innerHTML = `<span>${input.value}</span>
//                         <i class="fa-solid fa-trash"></i>`;
//         //activity.appendChild(p); //This will insert the new element at the
//         p.classList.add('activity');
//         activity.insertBefore(p, activity.firstChild); //This will insert the new added element at the top 
//         input.value = ''; //resetting the input field afterwards
//     }

//     p.addEventListener("click", function (e) {
//         if (p.style.textDecoration === 'line-through') {
//             p.style.textDecoration = '';
//         } else {
//             p.style.textDecoration = 'line-through';
//         }
//     });



//     trash.addEventListener("click", function (e) {
//         p.remove();
//     });


// })



let addBtn = document.querySelector('input[type=submit]');
let input = document.querySelector('input[type=text]');
let activity = document.getElementById('activities');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let p = document.createElement('p');

    if (input.value === '') {
        alert('Add a valid task please!');
    } else {
        p.innerHTML = `<span>${input.value}</span>
                        <i class="fa-solid fa-trash"></i>`;
        p.classList.add('activity');
        //activity.appendChild(p); //12,13,14,15
        activity.prepend(p); //15,14,13,12
        //activity.insertBefore(p, activity.firstChild); // This will insert the new added element at the top OutputL 15,14,13,12
        input.value = ''; // Resetting the input field afterwards
    }

    // Add event listener to strike through the span only
    let span = p.querySelector('span');
    span.addEventListener("click", function (e) {
        if (span.style.textDecoration === 'line-through') {
            span.style.textDecoration = '';
        } else {
            span.style.textDecoration = 'line-through';
        }
        e.stopPropagation(); // Prevent event from bubbling up to the parent
    });

    // Add event listener to delete the task
    let trash = p.querySelector('.fa-trash');
    trash.addEventListener("click", function (e) {
        p.remove();
        e.stopPropagation(); // Prevent event from bubbling up to the parent
    });
});
