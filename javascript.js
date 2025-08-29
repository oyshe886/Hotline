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


// call button
const callBtns = document.querySelectorAll("#btn-call");
for (const btn of callBtns) {
  btn.addEventListener("click", function (e) {
    const number =
      e.target.closest("#btn-call").parentNode.parentNode.children[1]
        .children[2].innerText;    
    const name =
      e.target.closest("#btn-call").parentNode.parentNode.children[1]
        .children[0].innerText;  
    const nameEnglish = e.target.closest("#btn-call").parentNode.parentNode.children[1]
        .children[1].innerText
    if (coinCount < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    } else {
      coinCount -= 20;
      getElement("coin-count").innerText = coinCount;
      alert(`📞 Calling ${nameEnglish} ${number}...`);
      const time = new Date().toLocaleTimeString();
      const historyContainer = getElement("history-id");
      const history = document.createElement("div");
      history.innerHTML = `
      <div class="bg-gray-100 flex items-center justify-between p-3 rounded-lg">
            <div>
              <p>${name}</p>
              <p class="text-gray-600">${number}</p>
            </div>
            <p>${time}</p>
          </div>
      `;
      historyContainer.append(history);
    }
  });
}

// clear button 
getElement("btn-clear").addEventListener("click", function ()
 {
  getElement("history-id").innerHTML = "";
});
