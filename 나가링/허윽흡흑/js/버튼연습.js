const menuWrap = document.querySelector('.tab');

function select(ulEl, liEl){
Array.from(ulEl.children).forEach(
v => v.classList.remove('selected')
)
if(liEl) liEl.classList.add('selected');
}

menuWrap.addEventListener('click', e => {
const selected = e.target;
select(menuWrap, selected);
})
