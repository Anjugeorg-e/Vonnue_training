export function createButton(name,fn){
    const btn = document.createElement('button');
    btn.innerText = name;
    btn.onclick = fn;
    btn.style.margin='9px';
    document.body.appendChild(btn)
}