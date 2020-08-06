let stpbl1 = document.getElementById("stepblock1");
let stpbrd1 = document.getElementById("stepbrdr1");
let stpbl2 = document.getElementById("stepblock2");
let stpbrd2 = document.getElementById("stepbrdr2");
let stpbl3 = document.getElementById("stepblock3");
let stpbrd3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = function () {
  stpbrd1.style.borderBottom = "3px solid white";
};

stpbl1.onmouseout = function () {
  stpbrd1.style.borderBottom = "3px solid black";
};

stpbl2.onmouseover = function () {
  stpbrd2.style.borderBottom = "3px solid white";
};

stpbl2.onmouseout = function () {
  stpbrd2.style.borderBottom = "3px solid black";
};

stpbl3.onmouseover = function () {
  stpbrd3.style.borderBottom = "3px solid white";
};

stpbl3.onmouseout = function () {
  stpbrd3.style.borderBottom = "3px solid black";
};
