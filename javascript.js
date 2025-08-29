function getElement(id)
 {
  return document.getElementById(id);
}
let heartCount=0;
let copyCount= 0;
let coinCount=100;

// heart button 
const heartBtns=document.querySelectorAll("#btn-heart");
for (const btn of heartBtns) {
  btn.addEventListener("click", function () 
  {   
    heartCount++;
    getElement("heart-count").innerText=heartCount;
  });
}

// copy button 
const copyBtns = document.querySelectorAll("#btn-copy");
for (const btn of copyBtns) {
  btn.addEventListener("click", function (e) {
    const number =
      e.target.closest("#btn-copy").parentNode.parentNode.children[1]
        .children[2].innerText;
    copyCount++;
    getElement("copy-count").innerText = copyCount;
    navigator.clipboard.writeText(number);
    alert(`নম্বর কপি হয়েছেঃ ${number}`);
  });
}
