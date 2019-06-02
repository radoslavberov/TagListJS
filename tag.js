const tagContainer = document.querySelector('.tag-container');

const input = document.querySelector('.tag-container input');

var tags = [];

const enterButton = document.querySelector('#enter')

enterButton.addEventListener('click', function(e) {
  tags.push(input.value);
  addTags();
  input.value = '';
})

//the createTag function. It creates tag dynamicly in the html
function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'material-icons');
  closeBtn.setAttribute('data-item', label);
  closeBtn.innerHTML = 'close';

  div.appendChild(span);
  div.appendChild(closeBtn);
  //appends the span and closeBtn to the div as his children
  return div;
}

//removes the last child which was created
function resetTags() {
  document.querySelectorAll('.tag').forEach(function(tag){
    tag.parentElement.removeChild(tag);
  })
}

function addTags(){
  resetTags();
  tags.slice().reverse().forEach(function(tag) {
    const input = createTag(tag)
    tagContainer.prepend(input);
  });
}

input.addEventListener('keyup',function (e) {
  if (e.key == 'Enter') {
    tags.push(input.value);
    addTags();
    input.value = '';
  }
} )

document.addEventListener('click', function (e) {
 if (e.target.tagName === 'I') {
   const value = e.target.getAttribute('data-item');
   const index = tags.indexOf(value);
   tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
   addTags();
  }
})

document.addEventListener('keyup',function (e) {
  if (e.key == 'Backspace') {

    tags = tags.slice(0, tags.length - 1)
    addTags()
  }
} )
