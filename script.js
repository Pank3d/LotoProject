let back = document.getElementById("back");
let contforinput = document.getElementById("00");
contforinput.classList.add("hiden");
let modalWindow = document.querySelectorAll(".modalwidow");
modalWindow.forEach(function (d) {
  d.classList.add("hiden");
});

document.addEventListener("DOMContentLoaded", function () {
  inp1.value = "1";
  function scrstrelku() {
    back.classList.add("hiden");
  }
  scrstrelku();
});

let plus = document.getElementById("btpl");
let znach = document.getElementById("inp1");

plus.addEventListener("click", function () {
  znach = parseInt(inp1.value);
  if (znach >= 0 && znach < 5) {
    znach += 1;
    inp1.value = znach;
  }
});

let minus = document.getElementById("btmin");

minus.addEventListener("click", function () {
  znach = parseInt(inp1.value);
  if (znach > 0 && znach <= 5) {
    znach = znach - 1;
    inp1.value = znach;
  }
});

let gtg = document.getElementById("gtg");
let textcon = document.querySelectorAll(".text-con");
gtg.addEventListener("click", function () {
  if (inp1.value == 1) {
    shownote("You can't play alone");
  } else if (inp1.value == 0) {
    shownote("Specify the number of players");
  } else if (inp1.value > 5) {
    shownote("There cannot be more than 5 people in the game");
    inp1.value = 2;
  } else {
    function scrit() {
      textcon.forEach(function (i) {
        i.classList.add("hiden");
      });
    }
    scrit();

    function otkrstrelku() {
      back.classList.remove("hiden");
    }
    otkrstrelku();
    contforinput.classList.remove("hiden");

    function addNewPlayer() {
      for (let i = 1; i <= inp1.value; i++) {
        let inpandbutcont = document.createElement("div");
        inpandbutcont.className = "inpandbutcont";
        inpandbutcont.id = "0000" + i.toString();
        contforinput.appendChild(inpandbutcont);
        let inputName = document.createElement("input");
        inputName.type = "text";
        inputName.value = " ";
        inputName.placeholder = "New Player " + i.toString();
        inputName.className = "player";
        inputName.id = "00" + i.toString();
        inpandbutcont.appendChild(inputName);
      }
      let containerforbutton = document.createElement("div");
      containerforbutton.className = "containerforbutton";
      let inputButton = document.createElement("button");
      inputButton.id = "btnConf1";
      inputButton.textContent = "Generate Kart";
      contforinput.appendChild(containerforbutton);
      containerforbutton.appendChild(inputButton);

      inputButton.addEventListener("click", function () {
        let inputName1 = document.getElementById("001");
        let inputName2 = document.getElementById("002");
        let inputName3 = document.getElementById("003");
        let inputName4 = document.getElementById("004");
        let inputName5 = document.getElementById("005");
        console.log(inputName1.value);
        if (
          inputName1.value !== " " &&
          inputName2.value !== " " &&
          inputName3 !== " " &&
          inputName4 !== " " &&
          inputName5 !== " "
        ) {
          contforinput.classList.add("hiden");
          if (inp1.value == 2) {
            createTable(lihid2, 9, 3);
            createTable(lihid, 9, 3);
            let p1 = document.createElement("p");
            let p1cont = document.querySelector(".kart1");
            let p2 = document.createElement("p");
            let p2cont = document.querySelector(".kart2");
            p2cont.appendChild(p2);
            p1cont.appendChild(p1);
            p2.className = "p2";
            p1.className = "p1";
            p1.textContent = inputName1.value;
            p2.textContent = inputName2.value;
          }
          if (inp1.value == 3) {
            createTable(lihid3, 9, 3);
            createTable(lihid2, 9, 3);
            createTable(lihid, 9, 3);
            let p1 = document.createElement("p");
            let p1cont = document.querySelector(".kart1");
            p1cont.appendChild(p1);
            let p2 = document.createElement("p");
            let p2cont = document.querySelector(".kart2");
            p2cont.appendChild(p2);
            let p3 = document.createElement("p");
            let p3cont = document.querySelector(".kart3");
            p3cont.appendChild(p3);
            p3.className = "p3";
            p2.className = "p2";
            p1.className = "p1";
            p3.textContent = inputName3.value;
            p2.textContent = inputName2.value;
            p1.textContent = inputName1.value;
          }
          if (inp1.value == 4) {
            createTable(lihid4, 9, 3);
            createTable(lihid3, 9, 3);
            createTable(lihid2, 9, 3);
            createTable(lihid, 9, 3);
            let p1 = document.createElement("p");
            let p1cont = document.querySelector(".kart1");
            p1cont.appendChild(p1);
            let p2 = document.createElement("p");
            let p2cont = document.querySelector(".kart2");
            p2cont.appendChild(p2);
            let p3 = document.createElement("p");
            let p3cont = document.querySelector(".kart3");
            p3cont.appendChild(p3);
            let p4 = document.createElement("p");
            let p4cont = document.querySelector(".kart4");
            p4cont.appendChild(p4);
            p4.textContent = inputName4.value;
            p3.textContent = inputName3.value;
            p2.textContent = inputName2.value;
            p1.textContent = inputName1.value;
            p4.className = "p4";
            p3.className = "p3";
            p2.className = "p2";
            p1.className = "p1";
          }
          if (inp1.value == 5) {
            createTable(lihid5, 9, 3);
            createTable(lihid4, 9, 3);
            createTable(lihid3, 9, 3);
            createTable(lihid2, 9, 3);
            createTable(lihid, 9, 3);
            let p1 = document.createElement("p");
            let p1cont = document.querySelector(".kart1");
            p1cont.appendChild(p1);
            let p2 = document.createElement("p");
            let p2cont = document.querySelector(".kart2");
            p2cont.appendChild(p2);
            let p3 = document.createElement("p");
            let p3cont = document.querySelector(".kart3");
            p3cont.appendChild(p3);
            let p4 = document.createElement("p");
            let p4cont = document.querySelector(".kart4");
            p4cont.appendChild(p4);
            let p5 = document.createElement("p");
            let p5cont = document.querySelector(".kart5");
            p5cont.appendChild(p5);
            p5.textContent = inputName5.value;
            p4.textContent = inputName4.value;
            p3.textContent = inputName3.value;
            p2.textContent = inputName2.value;
            p1.textContent = inputName1.value;
            p5.className = "p5";
            p4.className = "p4";
            p3.className = "p3";
            p2.className = "p2";
            p1.className = "p1";
            1;
          }
        } else {
          shownote("The name field cannot be empty");
        }
      });

      let lihid = document.querySelector(".kart1");
      let lihid2 = document.querySelector(".kart2");
      let lihid3 = document.querySelector(".kart3");
      let lihid4 = document.querySelector(".kart4");
      let lihid5 = document.querySelector(".kart5");
    }
  }

  addNewPlayer();
});

function shownote(message) {
  let not = document.createElement("div");
  not.textContent = message;
  not.className = "notes";
  document.body.appendChild(not);

  setTimeout(function () {
    document.body.removeChild(not);
  }, 3000);
}

back.addEventListener("click", function () {
  let yes = document.getElementById("confirm");
  let no = document.getElementById("discinfirm");

  modalWindow.forEach(function (d) {
    d.classList.remove("hiden");
  });

  yes.addEventListener("click", function () {
    modalWindow.forEach(function (d) {
      d.classList.add("hiden");
    });
    function otkrit() {
      textcon.forEach(function (i) {
        i.classList.remove("hiden");
      });
    }
    let inputRemove = document.querySelectorAll(".player");
    inputRemove.forEach(function (d) {
      d.remove();
      let buttonRemove = document.querySelectorAll("#btnConf");
      buttonRemove.forEach(function (i) {
        i.remove();
      });

      let btnrem = document.querySelectorAll(".inpandbutcont");
      btnrem.forEach(function (i) {
        i.remove();
      });
    });

    back.classList.add("hiden");
    otkrit();
  });

  no.addEventListener("click", function () {
    modalWindow.forEach(function (d) {
      d.classList.add("hiden");
    });
  });
});

function createTable(parent, cols, rows) {
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      td.className = "yacheyka" + (j + 1).toString() + (i + 1).toString();
      td.id = (j + 1).toString() + (i + 1).toString();
      table.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);

  function c1stroka() {
    let idyachstart = ["11", "21", "31", "41", "51", "61", "71", "81", "91"];
    let idend = [];

    while (idend.length !== 5) {
      let elem = Math.floor(Math.random() * 9);
      idend.push(idyachstart[elem]);
      idend.sort();
      if (idend[0] == idend[1]) {
        idend.splice(1, 1);
      }
      if (idend[1] == idend[2]) {
        idend.splice(2, 1);
      }
      if (idend[2] == idend[3]) {
        idend.splice(4, 1);
      }
      if (idend[3] == idend[4]) {
        idend.splice(4, 1);
      }
    }
    console.log(idend);

    for (let i = 0; i <= idend.length; i++) {
      if (idend[i] == "11") {
        let elemfor1stl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let randomchislo = Math.floor(Math.random() * elemfor1stl.length);
        let elem1 = document.getElementById("11").value;
        let elem2 = document.getElementById("11");
        elem1.value = elemfor1stl[randomchislo];
        elem2.textContent = elemfor1stl[randomchislo].toString();
      }
      if (idend[i] == "21") {
        let elemfor2stl = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        let randomchislo = Math.floor(Math.random() * elemfor2stl.length);
        let elem1 = document.getElementById("21").value;
        let elem2 = document.getElementById("21");
        elem1.value = elemfor2stl[randomchislo];
        elem2.textContent = elemfor2stl[randomchislo].toString();
      }

      if (idend[i] == "31") {
        let elemfor3stl = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        let randomchislo = Math.floor(Math.random() * elemfor3stl.length);
        let elem1 = document.getElementById("31").value;
        let elem2 = document.getElementById("31");
        elem1.value = elemfor3stl[randomchislo];
        elem2.textContent = elemfor3stl[randomchislo].toString();
      }
      if (idend[i] == "41") {
        let elemfor4stl = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
        let randomchislo = Math.floor(Math.random() * elemfor4stl.length);
        let elem1 = document.getElementById("41").value;
        let elem2 = document.getElementById("41");
        elem1.value = elemfor4stl[randomchislo];
        elem2.textContent = elemfor4stl[randomchislo].toString();
      }
      if (idend[i] == "51") {
        let elemfor5stl = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        let randomchislo = Math.floor(Math.random() * elemfor5stl.length);
        let elem1 = document.getElementById("51").value;
        let elem2 = document.getElementById("51");
        elem1.value = elemfor5stl[randomchislo];
        elem2.textContent = elemfor5stl[randomchislo].toString();
      }
      if (idend[i] == "61") {
        let elemfor6stl = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        let randomchislo = Math.floor(Math.random() * elemfor6stl.length);
        let elem1 = document.getElementById("61").value;
        let elem2 = document.getElementById("61");
        elem1.value = elemfor6stl[randomchislo];
        elem2.textContent = elemfor6stl[randomchislo].toString();
      }
      if (idend[i] == "71") {
        let elemfor7stl = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
        let randomchislo = Math.floor(Math.random() * elemfor7stl.length);
        let elem1 = document.getElementById("71").value;
        let elem2 = document.getElementById("71");
        elem1.value = elemfor7stl[randomchislo];
        elem2.textContent = elemfor7stl[randomchislo].toString();
      }
      if (idend[i] == "81") {
        let elemfor8stl = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
        let randomchislo = Math.floor(Math.random() * elemfor8stl.length);
        let elem1 = document.getElementById("81").value;
        let elem2 = document.getElementById("81");
        elem1.value = elemfor8stl[randomchislo];
        elem2.textContent = elemfor8stl[randomchislo].toString();
      }
      if (idend[i] == "91") {
        let elemfor9stl = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
        let randomchislo = Math.floor(Math.random() * elemfor9stl.length);
        let elem1 = document.getElementById("91").value;
        let elem2 = document.getElementById("91");
        elem1.value = elemfor9stl[randomchislo];
        elem2.textContent = elemfor9stl[randomchislo].toString();
      }
    }
  }
  c1stroka();

  function c2stroka() {
    let idyachstart = ["12", "22", "32", "42", "52", "62", "72", "82", "92"];
    let idend = [];
    while (idend.length !== 5) {
      let elem = Math.floor(Math.random() * 9);
      idend.push(idyachstart[elem]);
      idend.sort();
      if (idend[0] == idend[1]) {
        idend.splice(1, 1);
      }
      if (idend[1] == idend[2]) {
        idend.splice(2, 1);
      }
      if (idend[2] == idend[3]) {
        idend.splice(3, 1);
      }
      if (idend[3] == idend[4]) {
        idend.splice(4, 1);
      }
    }
    console.log(idend);

    for (let i = 0; i <= idend.length; i++) {
      if (idend[i] == "12") {
        let elemfor1stl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < elemfor1stl.length; j++) {
          if (elemfor1stl == document.getElementById("11").value) {
            elemfor1stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor1stl.length);
        let elem1 = document.getElementById("12").value;
        let elem2 = document.getElementById("12");
        elem1.value = elemfor1stl[randomchislo];
        elem2.textContent = elemfor1stl[randomchislo].toString();
      }
      if (idend[i] == "22") {
        let elemfor2stl = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        for (let j = 0; j < elemfor2stl.length; j++) {
          if (elemfor2stl == document.getElementById("21").value) {
            elemfor2stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor2stl.length);
        let elem1 = document.getElementById("22").value;
        let elem2 = document.getElementById("22");
        elem1.value = elemfor2stl[randomchislo];
        elem2.textContent = elemfor2stl[randomchislo].toString();
      }

      if (idend[i] == "32") {
        let elemfor3stl = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        for (let j = 0; j < elemfor3stl.length; j++) {
          if (elemfor3stl == document.getElementById("31").value) {
            elemfor3stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor3stl.length);
        let elem1 = document.getElementById("32").value;
        let elem2 = document.getElementById("32");
        elem1.value = elemfor3stl[randomchislo];
        elem2.textContent = elemfor3stl[randomchislo].toString();
      }
      if (idend[i] == "42") {
        let elemfor4stl = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
        for (let j = 0; j < elemfor4stl.length; j++) {
          if (elemfor4stl == document.getElementById("41").value) {
            elemfor4stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor4stl.length);
        let elem1 = document.getElementById("42").value;
        let elem2 = document.getElementById("42");
        elem1.value = elemfor4stl[randomchislo];
        elem2.textContent = elemfor4stl[randomchislo].toString();
      }
      if (idend[i] == "52") {
        let elemfor5stl = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        for (let j = 0; j < elemfor5stl.length; j++) {
          if (elemfor5stl == document.getElementById("51").value) {
            elemfor5stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor5stl.length);
        let elem1 = document.getElementById("52").value;
        let elem2 = document.getElementById("52");
        elem1.value = elemfor5stl[randomchislo];
        elem2.textContent = elemfor5stl[randomchislo].toString();
      }
      if (idend[i] == "62") {
        let elemfor6stl = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        for (let j = 0; j < elemfor6stl.length; j++) {
          if (elemfor6stl == document.getElementById("61").value) {
            elemfor6stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor6stl.length);
        let elem1 = document.getElementById("62").value;
        let elem2 = document.getElementById("62");
        elem1.value = elemfor6stl[randomchislo];
        elem2.textContent = elemfor6stl[randomchislo].toString();
      }
      if (idend[i] == "72") {
        let elemfor7stl = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
        for (let j = 0; j < elemfor7stl.length; j++) {
          if (elemfor7stl == document.getElementById("71").value) {
            elemfor7stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor7stl.length);
        let elem1 = document.getElementById("72").value;
        let elem2 = document.getElementById("72");
        elem1.value = elemfor7stl[randomchislo];
        elem2.textContent = elemfor7stl[randomchislo].toString();
      }
      if (idend[i] == "82") {
        let elemfor8stl = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
        for (let j = 0; j < elemfor8stl.length; j++) {
          if (elemfor8stl == document.getElementById("81").value) {
            elemfor8stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor8stl.length);
        let elem1 = document.getElementById("82").value;
        let elem2 = document.getElementById("82");
        elem1.value = elemfor8stl[randomchislo];
        elem2.textContent = elemfor8stl[randomchislo].toString();
      }
      if (idend[i] == "92") {
        let elemfor9stl = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
        for (let j = 0; j < elemfor9stl.length; j++) {
          if (elemfor9stl == document.getElementById("91").value) {
            elemfor9stl.splice(j, 1);
          }
        }
        let randomchislo = Math.floor(Math.random() * elemfor9stl.length);
        let elem1 = document.getElementById("92").value;
        let elem2 = document.getElementById("92");
        elem1.value = elemfor9stl[randomchislo];
        elem2.textContent = elemfor9stl[randomchislo].toString();
      }
    }
  }
  c2stroka();
  function c3stroka() {
    let idyachstart = ["13", "23", "33", "43", "53", "63", "73", "83", "93"];
    let idend = [];
    while (idend.length !== 5) {
      let elem = Math.floor(Math.random() * 9);
      idend.push(idyachstart[elem]);
      idend.sort();
      if (idend[0] == idend[1]) {
        idend.splice(0, 1);
      }
      if (idend[1] == idend[2]) {
        idend.splice(1, 1);
      }
      if (idend[2] == idend[3]) {
        idend.splice(2, 1);
      }
      if (idend[3] == idend[4]) {
        idend.splice(3, 1);
      }
    }
    console.log(idend);
    for (let i = 0; i <= idend.length; i++) {
      if (idend[i] == "13") {
        let elemfor1stl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < elemfor1stl.length; j++) {
          if (
            elemfor1stl == document.getElementById("12").value ||
            elemfor1stl == document.getElementById("11").value
          ) {
            elemfor1stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("12").value == 0.0 ||
          document.getElementById("11").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor1stl.length);
          let elem1 = document.getElementById("13").value;
          let elem2 = document.getElementById("13");
          elem1.value = elemfor1stl[randomchislo];
          elem2.textContent = elemfor1stl[randomchislo].toString();
        }
      }
      if (idend[i] == "23") {
        let elemfor2stl = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        for (let j = 0; j < elemfor2stl.length; j++) {
          if (
            elemfor2stl == document.getElementById("22").value ||
            elemfor2stl == document.getElementById("21").value
          ) {
            elemfor2stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("22").value == 0.0 ||
          document.getElementById("21").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor2stl.length);
          let elem1 = document.getElementById("23").value;
          let elem2 = document.getElementById("23");
          elem1.value = elemfor2stl[randomchislo];
          elem2.textContent = elemfor2stl[randomchislo].toString();
        }
      }

      if (idend[i] == "33") {
        let elemfor3stl = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        for (let j = 0; j < elemfor3stl.length; j++) {
          if (
            elemfor3stl == document.getElementById("32").value ||
            elemfor3stl == document.getElementById("31").value
          ) {
            elemfor3stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("32").value == 0.0 ||
          document.getElementById("31").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor3stl.length);
          let elem1 = document.getElementById("33").value;
          let elem2 = document.getElementById("33");
          elem1.value = elemfor3stl[randomchislo];
          elem2.textContent = elemfor3stl[randomchislo].toString();
        }
      }
      if (idend[i] == "43") {
        let elemfor4stl = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
        for (let j = 0; j < elemfor4stl.length; j++) {
          if (
            elemfor4stl == document.getElementById("42").value ||
            elemfor4stl == document.getElementById("41").value
          ) {
            elemfor4stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("42").value == 0.0 ||
          document.getElementById("41").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor4stl.length);
          let elem1 = document.getElementById("43").value;
          let elem2 = document.getElementById("43");
          elem1.value = elemfor4stl[randomchislo];
          elem2.textContent = elemfor4stl[randomchislo].toString();
        }
      }
      if (idend[i] == "53") {
        let elemfor5stl = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        for (let j = 0; j < elemfor5stl.length; j++) {
          if (
            elemfor5stl == document.getElementById("52").value ||
            elemfor5stl == document.getElementById("51").value
          ) {
            elemfor5stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("52").value == 0.0 ||
          document.getElementById("51").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor5stl.length);
          let elem1 = document.getElementById("53").value;
          let elem2 = document.getElementById("53");
          elem1.value = elemfor5stl[randomchislo];
          elem2.textContent = elemfor5stl[randomchislo].toString();
        }
      }
      if (idend[i] == "63") {
        let elemfor6stl = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        for (let j = 0; j < elemfor6stl.length; j++) {
          if (
            elemfor6stl == document.getElementById("62").value ||
            elemfor6stl == document.getElementById("61").value
          ) {
            elemfor6stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("62").value == 0.0 ||
          document.getElementById("61").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor6stl.length);
          let elem1 = document.getElementById("63").value;
          let elem2 = document.getElementById("63");
          elem1.value = elemfor6stl[randomchislo];
          elem2.textContent = elemfor6stl[randomchislo].toString();
        }
      }
      if (idend[i] == "73") {
        let elemfor7stl = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
        for (let j = 0; j < elemfor7stl.length; j++) {
          if (
            elemfor7stl == document.getElementById("72").value ||
            elemfor7stl == document.getElementById("71").value
          ) {
            elemfor7stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("72").value == 0.0 ||
          document.getElementById("71").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor7stl.length);
          let elem1 = document.getElementById("73").value;
          let elem2 = document.getElementById("73");
          elem1.value = elemfor7stl[randomchislo];
          elem2.textContent = elemfor7stl[randomchislo].toString();
        }
      }
      if (idend[i] == "83") {
        let elemfor8stl = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
        for (let j = 0; j < elemfor8stl.length; j++) {
          if (
            elemfor8stl == document.getElementById("82").value ||
            elemfor8stl == document.getElementById("81").value
          ) {
            elemfor8stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("82").value == 0.0 ||
          document.getElementById("81").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor8stl.length);
          let elem1 = document.getElementById("83").value;
          let elem2 = document.getElementById("83");
          elem1.value = elemfor8stl[randomchislo];
          elem2.textContent = elemfor8stl[randomchislo].toString();
        }
      }
      if (idend[i] == "93") {
        let elemfor9stl = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
        for (let j = 0; j < elemfor9stl.length; j++) {
          if (
            elemfor9stl == document.getElementById("92").value ||
            elemfor9stl == document.getElementById("91").value
          ) {
            elemfor9stl.splice(j, 1);
          }
        }
        if (
          document.getElementById("92").value == 0.0 ||
          document.getElementById("91").value == 0.0
        ) {
          let randomchislo = Math.floor(Math.random() * elemfor9stl.length);
          let elem1 = document.getElementById("93").value;
          let elem2 = document.getElementById("93");
          elem1.value = elemfor9stl[randomchislo];
          elem2.textContent = elemfor9stl[randomchislo].toString();
        }
      }
    }
  }
  c3stroka();
}
