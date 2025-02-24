const table = document.createElement("table"); // Táblázat elem létrehozása
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

const thead = document.createElement("thead"); // Táblázat fejléc létrehozása
table.appendChild(thead); // Fejléc hozzáadása a táblázathoz

const tr1 = document.createElement("tr"); // Sor létrehozása a fejlécben
thead.appendChild(tr1); // Sor hozzáadása a fejlécben

const th1 = document.createElement("th"); // Oszlopcímke létrehozása
th1.innerHTML = "Harc megnevezése"; // Oszlopcím beállítása
tr1.appendChild(th1); // Oszlopcím hozzáadása a sorhoz

const th2 = document.createElement("th"); // Második oszlopcímke létrehozása
th2.innerHTML = "Szembenálló felek"; // Második oszlopcím beállítása
tr1.appendChild(th2); // Második oszlopcím hozzáadása a sorhoz

const th3 = document.createElement("th"); // Harmadik oszlopcímke létrehozása
th3.innerHTML = "Haderő"; // Harmadik oszlopcím beállítása
tr1.appendChild(th3); // Harmadik oszlopcím hozzáadása a sorhoz

const tbody = document.createElement("tbody"); // Táblázat törzsének létrehozása
table.appendChild(tbody); // Táblázat törzsének hozzáadása a táblázathoz

const tr2 = document.createElement("tr"); // Első sor létrehozása a törzsben
tbody.appendChild(tr2); // Első sor hozzáadása a törzshöz

const td1 = document.createElement("td"); // Első cella létrehozása
td1.innerHTML = "Rákóczi szabadságharc"; // Cella tartalmának beállítása
td1.rowSpan = 2; // A cella két sort foglal el
tr2.appendChild(td1); // Cella hozzáadása a sorhoz

const td2 = document.createElement("td"); // Második cella létrehozása
td2.innerHTML = "Kuruc"; // Cella tartalmának beállítása
tr2.appendChild(td2); // Cella hozzáadása a sorhoz

const td3 = document.createElement("td"); // Harmadik cella létrehozása
td3.innerHTML = "70.000"; // Cella tartalmának beállítása
tr2.appendChild(td3); // Cella hozzáadása a sorhoz

const tr3 = document.createElement("tr"); // Második sor létrehozása
tbody.appendChild(tr3); // Második sor hozzáadása a törzshöz

const td4 = document.createElement("td"); // Negyedik cella létrehozása
td4.innerHTML = "Labanc"; // Cella tartalmának beállítása
tr3.appendChild(td4); // Cella hozzáadása a sorhoz

const td5 = document.createElement("td"); // Ötödik cella létrehozása
td5.innerHTML = "60.000"; // Cella tartalmának beállítása
tr3.appendChild(td5); // Cella hozzáadása a sorhoz

const tr4 = document.createElement("tr"); // Harmadik sor létrehozása
tbody.appendChild(tr4); // Harmadik sor hozzáadása a törzshöz

const td6 = document.createElement("td"); // Hatodik cella létrehozása
td6.innerHTML = "48-as szabadságharc"; // Cella tartalmának beállítása
td6.rowSpan = 2; // A cella két sort foglal el
tr4.appendChild(td6); // Cella hozzáadása a sorhoz

const td7 = document.createElement("td"); // Hetedik cella létrehozása
td7.innerHTML = "Osztrák császárság (+ Orosz birodalom)"; // Cella tartalmának beállítása
tr4.appendChild(td7); // Cella hozzáadása a sorhoz

const td8 = document.createElement("td"); // Nyolcadik cella létrehozása
td8.innerHTML = "170.000 ( +200.000)"; // Cella tartalmának beállítása
tr4.appendChild(td8); // Cella hozzáadása a sorhoz

const tr5 = document.createElement("tr"); // Negyedik sor létrehozása
tbody.appendChild(tr5); // Negyedik sor hozzáadása a törzshöz

const td9 = document.createElement("td"); // Kilencedik cella létrehozása
td9.innerHTML = "Magyar királyság"; // Cella tartalmának beállítása
tr5.appendChild(td9); // Cella hozzáadása a sorhoz

const td10 = document.createElement("td"); // Tizedik cella létrehozása
td10.innerHTML = "170.000"; // Cella tartalmának beállítása
tr5.appendChild(td10); // Cella hozzáadása a sorhoz

const tr6 = document.createElement("tr"); // Ötödik sor létrehozása
tbody.appendChild(tr6); // Ötödik sor hozzáadása a törzshöz

const td11 = document.createElement("td"); // Tizenegyedik cella létrehozása
td11.innerHTML = "I. világháború"; // Cella tartalmának beállítása
td11.rowSpan = 2; // A cella két sort foglal el
tr6.appendChild(td11); // Cella hozzáadása a sorhoz

const td12 = document.createElement("td"); // Tizenkettedik cella létrehozása
td12.innerHTML = "Antant"; // Cella tartalmának beállítása
tr6.appendChild(td12); // Cella hozzáadása a sorhoz

const td13 = document.createElement("td"); // Tizenharmadik cella létrehozása
td13.innerHTML = "43 millió"; // Cella tartalmának beállítása
tr6.appendChild(td13); // Cella hozzáadása a sorhoz

const tr7 = document.createElement("tr"); // Hatodik sor létrehozása
tbody.appendChild(tr7); // Hatodik sor hozzáadása a törzshöz

const td14 = document.createElement("td"); // Tizennegyedik cella létrehozása
td14.innerHTML = "Központi hatalmak"; // Cella tartalmának beállítása
tr7.appendChild(td14); // Cella hozzáadása a sorhoz

const td15 = document.createElement("td"); // Tizenötödik cella létrehozása
td15.innerHTML = "25 millió"; // Cella tartalmának beállítása
tr7.appendChild(td15); // Cella hozzáadása a sorhoz

const tr8 = document.createElement("tr"); // Hetedik sor létrehozása
tbody.appendChild(tr8); // Hetedik sor hozzáadása a törzshöz

const td16 = document.createElement("td"); // Tizenhatodik cella létrehozása
td16.innerHTML = "Bosworthi csata"; // Cella tartalmának beállítása
tr8.appendChild(td16); // Cella hozzáadása a sorhoz

const td17 = document.createElement("td"); // Tizenhetedik cella létrehozása
td17.innerHTML = "Angolok (York + Lancester)"; // Cella tartalmának beállítása
tr8.appendChild(td17); // Cella hozzáadása a sorhoz

const td18 = document.createElement("td"); // Tizennyolcadik cella létrehozása
td18.innerHTML = "15.000"; // Cella tartalmának beállítása
tr8.appendChild(td18); // Cella hozzáadása a sorhoz