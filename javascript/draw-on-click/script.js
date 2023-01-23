window.addEventListener('click', (e) => {
    console.log(e);
    let topValue = e.clientY;
    let leftValue = e.clientX;

    let newEl = document.createElement('div');
    newEl.style.background = 'red';
    newEl.style.height = '200px';
    newEl.style.width = '200px';
    newEl.style.position = 'absolute';
    newEl.style.left = `${leftValue}px`;
    newEl.style.top = `${topValue}px`
    document.querySelector('body').appendChild(newEl);
})