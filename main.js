th1_value = "Harc megnevezése"; //th1 cella tartalmának beállítása
th2_value = "Szembenálló felek"; //th2 cella tartalmának beállítása
th3_value = "Haderő"; //th3 cella tartalmának beállítása

td1_value = "Rákóczi szabadságharc"; //td1 cella tartalmának beállítása
td2_value = "Kuruc"; //td2 cella tartalmának beállítása
td3_value = "70.000"; //td3 cella tartalmának beállítása

td4_value = "Labanc"; //td4 cella tartalmának beállítása
td5_value = "60.000"; //td5 cella tartalmának beállítása

td6_value = "48-as szabadságharc"; //td6 cella tartalmának beállítása
td7_value = "Osztrák császárság (+ Orosz birodalom)"; //td7 cella tartalmának beállítása
td8_value = "170.000 (+ 200.000)"; //td8 cella tartalmának beállítása

td9_value = "Magyar királyság"; //td9 cella tartalmának beállítása
td10_value = "170.000"; //td10 cella tartalmának beállítása

td11_value = "I. világháború"; //td11 cella tartalmának beállítása
td12_value = "Antant"; //td12 cella tartalmának beállítása
td13_value = "43 millió"; //td13 cella tartalmának beállítása

td14_value = "Központi hatalmak"; //td14 cella tartalmának beállítása
td15_value = "25 millió"; //td15 cella tartalmának beállítása

td16_value = "Bosworthi csata"; //td16 cella tartalmának beállítása
td17_value = "Angolok (York + Lancester)"; //td17 cella tartalmának beállítása
td18_value = "15.000"; //td18 cella tartalmának beállítása


const table = document.createElement("table"); // Táblázat elem létrehozása
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

const thead = document.createElement("thead"); // Táblázat fejléc létrehozása
table.appendChild(thead); // Fejléc hozzáadása a táblázathoz

const tr1 = document.createElement("tr"); // Sor létrehozása a fejlécben
thead.appendChild(tr1); // Sor hozzáadása a fejlécben

const th1 = document.createElement("th"); // Oszlopcímke létrehozása
th1.innerHTML = th1_value; // Oszlopcím beállítása
tr1.appendChild(th1); // Oszlopcím hozzáadása a sorhoz

const th2 = document.createElement("th"); // Második oszlopcímke létrehozása
th2.innerHTML = th2_value; // Második oszlopcím beállítása
tr1.appendChild(th2); // Második oszlopcím hozzáadása a sorhoz

const th3 = document.createElement("th"); // Harmadik oszlopcímke létrehozása
th3.innerHTML = th3_value; // Harmadik oszlopcím beállítása
tr1.appendChild(th3); // Harmadik oszlopcím hozzáadása a sorhoz

const tbody = document.createElement("tbody"); // Táblázat törzsének létrehozása
table.appendChild(tbody); // Táblázat törzsének hozzáadása a táblázathoz

const tr2 = document.createElement("tr"); // Első sor létrehozása a törzsben
tbody.appendChild(tr2); // Első sor hozzáadása a törzshöz

const td1 = document.createElement("td"); // Első cella létrehozása
td1.innerHTML = td1_value; // Cella tartalmának beállítása
td1.rowSpan = 2; // A cella két sort foglal el
tr2.appendChild(td1); // Cella hozzáadása a sorhoz

const td2 = document.createElement("td"); // Második cella létrehozása
td2.innerHTML = td2_value; // Cella tartalmának beállítása
tr2.appendChild(td2); // Cella hozzáadása a sorhoz

const td3 = document.createElement("td"); // Harmadik cella létrehozása
td3.innerHTML = td3_value; // Cella tartalmának beállítása
tr2.appendChild(td3); // Cella hozzáadása a sorhoz

const tr3 = document.createElement("tr"); // Második sor létrehozása
tbody.appendChild(tr3); // Második sor hozzáadása a törzshöz

const td4 = document.createElement("td"); // Negyedik cella létrehozása
td4.innerHTML = td4_value; // Cella tartalmának beállítása
tr3.appendChild(td4); // Cella hozzáadása a sorhoz

const td5 = document.createElement("td"); // Ötödik cella létrehozása
td5.innerHTML = td5_value; // Cella tartalmának beállítása
tr3.appendChild(td5); // Cella hozzáadása a sorhoz

const tr4 = document.createElement("tr"); // Harmadik sor létrehozása
tbody.appendChild(tr4); // Harmadik sor hozzáadása a törzshöz

const td6 = document.createElement("td"); // Hatodik cella létrehozása
td6.innerHTML = td6_value; // Cella tartalmának beállítása
td6.rowSpan = 2; // A cella két sort foglal el
tr4.appendChild(td6); // Cella hozzáadása a sorhoz

const td7 = document.createElement("td"); // Hetedik cella létrehozása
td7.innerHTML = td7_value; // Cella tartalmának beállítása
tr4.appendChild(td7); // Cella hozzáadása a sorhoz

const td8 = document.createElement("td"); // Nyolcadik cella létrehozása
td8.innerHTML = td8_value; // Cella tartalmának beállítása
tr4.appendChild(td8); // Cella hozzáadása a sorhoz

const tr5 = document.createElement("tr"); // Negyedik sor létrehozása
tbody.appendChild(tr5); // Negyedik sor hozzáadása a törzshöz

const td9 = document.createElement("td"); // Kilencedik cella létrehozása
td9.innerHTML = td9_value; // Cella tartalmának beállítása
tr5.appendChild(td9); // Cella hozzáadása a sorhoz

const td10 = document.createElement("td"); // Tizedik cella létrehozása
td10.innerHTML = td10_value; // Cella tartalmának beállítása
tr5.appendChild(td10); // Cella hozzáadása a sorhoz

const tr6 = document.createElement("tr"); // Ötödik sor létrehozása
tbody.appendChild(tr6); // Ötödik sor hozzáadása a törzshöz

const td11 = document.createElement("td"); // Tizenegyedik cella létrehozása
td11.innerHTML = td11_value; // Cella tartalmának beállítása
td11.rowSpan = 2; // A cella két sort foglal el
tr6.appendChild(td11); // Cella hozzáadása a sorhoz

const td12 = document.createElement("td"); // Tizenkettedik cella létrehozása
td12.innerHTML = td12_value; // Cella tartalmának beállítása
tr6.appendChild(td12); // Cella hozzáadása a sorhoz

const td13 = document.createElement("td"); // Tizenharmadik cella létrehozása
td13.innerHTML = td13_value; // Cella tartalmának beállítása
tr6.appendChild(td13); // Cella hozzáadása a sorhoz

const tr7 = document.createElement("tr"); // Hatodik sor létrehozása
tbody.appendChild(tr7); // Hatodik sor hozzáadása a törzshöz

const td14 = document.createElement("td"); // Tizennegyedik cella létrehozása
td14.innerHTML = td14_value; // Cella tartalmának beállítása
tr7.appendChild(td14); // Cella hozzáadása a sorhoz

const td15 = document.createElement("td"); // Tizenötödik cella létrehozása
td15.innerHTML = td15_value; // Cella tartalmának beállítása
tr7.appendChild(td15); // Cella hozzáadása a sorhoz

const tr8 = document.createElement("tr"); // Hetedik sor létrehozása
tbody.appendChild(tr8); // Hetedik sor hozzáadása a törzshöz

const td16 = document.createElement("td"); // Tizenhatodik cella létrehozása
td16.innerHTML = td16_value; // Cella tartalmának beállítása
tr8.appendChild(td16); // Cella hozzáadása a sorhoz

const td17 = document.createElement("td"); // Tizenhetedik cella létrehozása
td17.innerHTML = td17_value; // Cella tartalmának beállítása
tr8.appendChild(td17); // Cella hozzáadása a sorhoz

const td18 = document.createElement("td"); // Tizennyolcadik cella létrehozása
td18.innerHTML = td18_value; // Cella tartalmának beállítása
tr8.appendChild(td18); // Cella hozzáadása a sorhoz