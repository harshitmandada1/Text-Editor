let boldBtn = document.getElementById('bold-btn');
let italicBtn = document.getElementById('italic-btn');
let underlineBtn = document.getElementById('underline-btn');
let leftalignBtn = document.getElementById('leftalign-btn');
let rightalignBtn = document.getElementById('rightalign-btn');
let justifyBtn = document.getElementById('justify-btn');
let div = document.querySelector('.text-editor');

//.................BOLD......................
let boldClickListener = (event) => {
    let selection = window.getSelection();
   // let data = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;
    

    if(parent == div){
        let newspan = document.createElement('span');
        newspan.classList.add('text-bold');
        newspan.textContent=selection;
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        boldBtn.style.backgroundColor="blue";
        
    }
    else
    {
    if(parent.classList.contains('text-bold')){
        let newspan = document.createElement('span');
        newspan.classList.add('text-unbold');
        newspan.textContent=selection;
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        boldBtn.style.backgroundColor="white";
    }

        else{
            let newspan = document.createElement('span');
            newspan.classList.add('text-bold');
            newspan.textContent=selection;
            console.log(newspan.innerHTML);
            range.deleteContents();
            range.insertNode(newspan);
            boldBtn.style.backgroundColor="blue";

        }

    }
}
//.................ITALIC......................
let italicClickListener = (event) => {
    let selection = window.getSelection();
   // let data = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;
    

    if(parent == div){
        let newspan = document.createElement('span');
        newspan.classList.add('text-italic');
        newspan.textContent=selection;
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        italicBtn.style.backgroundColor="blue";
        
    }
    else
    {
    if(parent.classList.contains('text-italic')){
        let newspan = document.createElement('span');
        newspan.classList.add('text-unitalic');
        newspan.textContent=selection;
        console.log(parent);
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        italicBtn.style.backgroundColor="white";
    }

        else{
            let newspan = document.createElement('span');
            newspan.classList.add('text-italic');
            newspan.textContent=selection;
            console.log(parent);
            console.log(newspan.innerHTML);
            range.deleteContents();
            range.insertNode(newspan);
            italicBtn.style.backgroundColor="blue";

        }

    }
}

//.................UNDERLINE......................
let underlineClickListener = (event) => {
    let selection = window.getSelection();
   // let data = selection.toString();
    let range = selection.getRangeAt(0);
    let parent = selection.anchorNode.parentElement;
    

    if(parent == div){
        let newspan = document.createElement('a');
        newspan.classList.add('text-underline');
        newspan.textContent=selection;
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        underlineBtn.style.backgroundColor="blue";
        
    }
    else
    {
    if(parent.classList.contains('text-underline')){
        let newspan = document.createElement('a');
        newspan.style.textDecoration='none';
        newspan.textContent=selection;
        console.log(newspan.innerHTML);
        range.deleteContents();
        range.insertNode(newspan);
        underlineBtn.style.backgroundColor="white";
    }

        else{
            let newspan = document.createElement('a');
            newspan.classList.add('text-underline');
            newspan.textContent=selection;
            console.log(newspan.innerHTML);
            range.deleteContents();
            range.insertNode(newspan);
            underlineBtn.style.backgroundColor="blue";

        }

    }
}

//.................LEFT_ALIGN......................
let leftalignClickListener = (event) => {
    //let selection = window.getSelection();
    div.style.textAlign = "left";
    leftalignBtn.style.backgroundColor="blue";


}

//.................RIGHT_ALIGN......................
let rightalignClickListener = (event) => {
    let selection = window.getSelection();
    //let data = selection.toString();
   div.style.textAlign="right";
   rightalignBtn.style.backgroundColor="blue";
}
    



//.................JUSTIFY......................
let justifyClickListener = (event) => {
    let selection = window.getSelection();
    //let data = selection.toString();
    div.style.textAlign="justify";
    justifyBtn.style.backgroundColor="blue";
}
    

boldBtn.addEventListener('click', boldClickListener);
italicBtn.addEventListener('click', italicClickListener);
underlineBtn.addEventListener('click', underlineClickListener);
leftalignBtn.addEventListener('click',leftalignClickListener);
rightalignBtn.addEventListener('click', rightalignClickListener);
justifyBtn.addEventListener('click', justifyClickListener);


function calculate(n,PA){
    var p = n.parentElement;
    if(p.tagName == 'SPAN'|| p.tagName == 'A'){
        PA.push(p.className);
        calculate(p,PA);
    }
    else if(p.tagName == 'div'){
        console.log("hello")
        PA.push(p.style.textAlign);
        console.log(PA);
    }
    }


div.addEventListener('keyup', highlight);
div.addEventListener('click', highlight);



    //let highlight = function()
    function highlight(){
        var selection = window.getSelection();
        var list = [];
        calculate(selection.getRangeAt(0).commonAncestorContainer, list);
        console.log(list);

    if(list.includes("text-bold"))
    //console.log("hello");
    boldBtn.style.backgroundColor="blue";
    else
    boldBtn.style.backgroundColor="white";
   
    if(list.includes("text-italic"))
    italicBtn.style.backgroundColor="blue";
    else
    italicBtn.style.backgroundColor="white";

    if(list.includes("text-underline"))
    underlineBtn.style.backgroundColor="blue";
    else
    underlineBtn.style.backgroundColor="white";


    if(list.includes("left"))
    leftalignBtn.style.backgroundColor="blue";
    else
    leftalignBtn.style.backgroundColor="white";

    if(list.includes("right"))
    rightalignBtn.style.backgroundColor="blue";
    else
    rightalignBtn.style.backgroundColor="white";

    if(list.includes("justify"))
    justifyBtn.style.backgroundColor="blue";
    else
    justifyBtn.style.backgroundColor="white";

    }
