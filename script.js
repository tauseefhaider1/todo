const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const btn = document.querySelector('.add');
const notes = document.querySelector('.notes');
const search = document.querySelector('#search');

// Add Note
btn.addEventListener('click', () => {
    const head = inp1.value.trim();
    const para = inp2.value.trim();
    if(!head || !para) return alert("Enter both title and description");

    const div = document.createElement('div');
    div.classList.add('note-card');
    div.innerHTML = `
        <h3>${head}</h3>
        <p>${para}</p>
        <div class="btns">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    notes.appendChild(div);
    inp1.value = '';
    inp2.value = '';
});

// Edit / Delete Notes using Event Delegation
notes.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        const card = e.target.closest('.note-card'); // find the parent note
        card.remove(); // remove the note from DOM
    }
});

notes.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-btn')){
        const card = e.target.closest('.note-card');
        const title = card.querySelector('h3').innerText;
        const desc = card.querySelector('p').innerText;

        const newTitle = prompt('Edit title', title);
        const newDesc = prompt('Edit description', desc);

        if(newTitle !== null) card.querySelector('h3').innerText = newTitle;
        if(newDesc !== null) card.querySelector('p').innerText = newDesc;
    }
});

// Search Notes
search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    document.querySelectorAll('.note-card').forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        if(title.includes(term) || desc.includes(term)){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
