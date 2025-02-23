const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr1 = document.createElement("tr");
thead.appendChild(tr1)

const th1 = document.createElement("th");
th1.innerHTML = "Harc megnevezése";
tr1.appendChild(th1);

const th2 = document.createElement("th");
th2.innerHTML = "Szembenálló felek";
tr1.appendChild(th2);

const th3 = document.createElement("th");
th3.innerHTML = "Haderő";
tr1.appendChild(th3);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const tr2 = document.createElement("tr");
tbody.appendChild(tr2);

const td1 = document.createElement("td");
td1.innerHTML = "Rákóczi szabadságharc";
td1.rowSpan = 2;
tr2.appendChild(td1);

const td2 = document.createElement("td");
td2.innerHTML = "Kuruc";
tr2.appendChild(td2);

const td3 = document.createElement("td");
td3.innerHTML = "70.000";
tr2.appendChild(td3);

const tr3 = document.createElement("tr");
tbody.appendChild(tr3);

const td4 = document.createElement("td");
td4.innerHTML = "Labanc";
tr3.appendChild(td4);

const td5 = document.createElement("td");
td5.innerHTML = "60.000";
tr3.appendChild(td5);

const tr4 = document.createElement("tr");
tbody.appendChild(tr4);

const td6 = document.createElement("td");
td6.innerHTML = "48-as szabadságharc";
td6.rowSpan = 2;
tr4.appendChild(td6);

const td7 = document.createElement("td");
td7.innerHTML = "Osztrák császárság (+ Orosz birodalom)";
tr4.appendChild(td7);

const td8 = document.createElement("td");
td8.innerHTML = "170.000 ( +200.000)";
tr4.appendChild(td8);

const tr5 = document.createElement("tr");
tbody.appendChild(tr5);

const td9 = document.createElement("td");
td9.innerHTML = "Magyar királyság";
tr5.appendChild(td9);

const td10 = document.createElement("td");
td10.innerHTML = "170.000";
tr5.appendChild(td10);

const tr6 = document.createElement("tr");
tbody.appendChild(tr6);

const td11 = document.createElement("td");
td11.innerHTML = "I. világháború";
td11.rowSpan = 2;
tr6.appendChild(td11);

const td12 = document.createElement("td");
td12.innerHTML = "Antant";
tr6.appendChild(td12);

const td13 = document.createElement("td");
td13.innerHTML = "43 millió";
tr6.appendChild(td13);

const tr7 = document.createElement("tr");
tbody.appendChild(tr7);

const td14 = document.createElement("td");
td14.innerHTML = "Központi hatalmak";
tr7.appendChild(td14);

const td15 = document.createElement("td");
td15.innerHTML = "25 millió";
td7.appendChild(td15);

const tr8 = document.createElement("tr");
tbody.appendChild(tr8);

const td16 = document.createElement("td");
td16.innerHTML = "Bosworthi csata";
tr8.appendChild(td16);

const td17 = document.createElement("td");
td17.innerHTML = "Angolok (York + Lancester)";
tr8.appendChild(td17);

const td18 = document.createElement("td");
td18.innerHTML = "15.000";
tr8.appendChild(td18);