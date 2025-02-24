const obj_tr1 = { // Fejléc cellák értékei
    th1_value: "Harc megnevezése",
    th2_value: "Szembenálló felek",
    th3_value: "Haderő"
};

const obj_tr2 = { // Második sor celláinak értékei
    td1_value: "Rákóczi szabadságharc",
    td2_value: "Kuruc",
    td3_value: "70.000"
};

const obj_tr3 = { // Harmadik sor celláinak értékei
    td4_value: "Labanc",
    td5_value: "60.000"
};

const obj_tr4 = { // Negyedik sor celláinak értékei
    td6_value: "48-as szabadságharc",
    td7_value: "Osztrák császárság (+ Orosz birodalom)",
    td8_value: "170.000 (+ 200.000)"
};

const obj_tr5 = { // Ötödik sor celláinak értékei
    td9_value: "Magyar királyság",
    td10_value: "170.000"
};

const obj_tr6 = { // Hatodik sor celláinak értékei
    td11_value: "I. világháború",
    td12_value: "Antant",
    td13_value: "43 millió"
};

const obj_tr7 = { // Hetedik sor celláinak értékei
    td14_value: "Központi hatalmak",
    td15_value: "25 millió"
};

const obj_tr8 = { // Nyolcadik sor celláinak értékei
    td16_value: "Bosworthi csata",
    td17_value: "Angolok (York + Lancester)",
    td18_value: "15.000"
};

const table = document.createElement("table"); // Táblázat elem létrehozása
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

const thead = document.createElement("thead"); // Táblázat fejléc létrehozása
table.appendChild(thead); // Fejléc hozzáadása a táblázathoz

const tr1 = document.createElement("tr"); // Sor létrehozása a fejlécben
thead.appendChild(tr1); // Sor hozzáadása a fejlécben

const th1 = document.createElement("th"); // Oszlopcímke létrehozása
th1.innerHTML = obj_tr1.th1_value; // Oszlopcím beállítása
tr1.appendChild(th1); // Oszlopcím hozzáadása a sorhoz

const th2 = document.createElement("th"); // Második oszlopcímke létrehozása
th2.innerHTML = obj_tr1.th1_value; // Második oszlopcím beállítása
tr1.appendChild(th2); // Második oszlopcím hozzáadása a sorhoz

const th3 = document.createElement("th"); // Harmadik oszlopcímke létrehozása
th3.innerHTML = obj_tr1.th3_value; // Harmadik oszlopcím beállítása
tr1.appendChild(th3); // Harmadik oszlopcím hozzáadása a sorhoz

const tbody = document.createElement("tbody"); // Táblázat törzsének létrehozása
table.appendChild(tbody); // Táblázat törzsének hozzáadása a táblázathoz

const tr2 = document.createElement("tr"); // Első sor létrehozása a törzsben
tbody.appendChild(tr2); // Első sor hozzáadása a törzshöz

const td1 = document.createElement("td"); // Első cella létrehozása
td1.innerHTML = obj_tr2.td1_value; // Cella tartalmának beállítása
td1.rowSpan = 2; // A cella két sort foglal el
tr2.appendChild(td1); // Cella hozzáadása a sorhoz

const td2 = document.createElement("td"); // Második cella létrehozása
td2.innerHTML = obj_tr2.td2_value; // Cella tartalmának beállítása
tr2.appendChild(td2); // Cella hozzáadása a sorhoz

const td3 = document.createElement("td"); // Harmadik cella létrehozása
td3.innerHTML = obj_tr2.td3_value; // Cella tartalmának beállítása
tr2.appendChild(td3); // Cella hozzáadása a sorhoz

const tr3 = document.createElement("tr"); // Második sor létrehozása
tbody.appendChild(tr3); // Második sor hozzáadása a törzshöz

const td4 = document.createElement("td"); // Negyedik cella létrehozása
td4.innerHTML = obj_tr3.td4_value; // Cella tartalmának beállítása
tr3.appendChild(td4); // Cella hozzáadása a sorhoz

const td5 = document.createElement("td"); // Ötödik cella létrehozása
td5.innerHTML = obj_tr3.td5_value; // Cella tartalmának beállítása
tr3.appendChild(td5); // Cella hozzáadása a sorhoz

const tr4 = document.createElement("tr"); // Harmadik sor létrehozása
tbody.appendChild(tr4); // Harmadik sor hozzáadása a törzshöz

const td6 = document.createElement("td"); // Hatodik cella létrehozása
td6.innerHTML = obj_tr4.td6_value; // Cella tartalmának beállítása
td6.rowSpan = 2; // A cella két sort foglal el
tr4.appendChild(td6); // Cella hozzáadása a sorhoz

const td7 = document.createElement("td"); // Hetedik cella létrehozása
td7.innerHTML = obj_tr4.td7_value; // Cella tartalmának beállítása
tr4.appendChild(td7); // Cella hozzáadása a sorhoz

const td8 = document.createElement("td"); // Nyolcadik cella létrehozása
td8.innerHTML = obj_tr4.td8_value; // Cella tartalmának beállítása
tr4.appendChild(td8); // Cella hozzáadása a sorhoz

const tr5 = document.createElement("tr"); // Negyedik sor létrehozása
tbody.appendChild(tr5); // Negyedik sor hozzáadása a törzshöz

const td9 = document.createElement("td"); // Kilencedik cella létrehozása
td9.innerHTML = obj_tr5.td9_value; // Cella tartalmának beállítása
tr5.appendChild(td9); // Cella hozzáadása a sorhoz

const td10 = document.createElement("td"); // Tizedik cella létrehozása
td10.innerHTML = obj_tr5.td10_value; // Cella tartalmának beállítása
tr5.appendChild(td10); // Cella hozzáadása a sorhoz

const tr6 = document.createElement("tr"); // Ötödik sor létrehozása
tbody.appendChild(tr6); // Ötödik sor hozzáadása a törzshöz

const td11 = document.createElement("td"); // Tizenegyedik cella létrehozása
td11.innerHTML = obj_tr6.td11_value; // Cella tartalmának beállítása
td11.rowSpan = 2; // A cella két sort foglal el
tr6.appendChild(td11); // Cella hozzáadása a sorhoz

const td12 = document.createElement("td"); // Tizenkettedik cella létrehozása
td12.innerHTML = obj_tr6.td12_value; // Cella tartalmának beállítása
tr6.appendChild(td12); // Cella hozzáadása a sorhoz

const td13 = document.createElement("td"); // Tizenharmadik cella létrehozása
td13.innerHTML = obj_tr6.td13_value; // Cella tartalmának beállítása
tr6.appendChild(td13); // Cella hozzáadása a sorhoz

const tr7 = document.createElement("tr"); // Hatodik sor létrehozása
tbody.appendChild(tr7); // Hatodik sor hozzáadása a törzshöz

const td14 = document.createElement("td"); // Tizennegyedik cella létrehozása
td14.innerHTML = obj_tr7.td14_value; // Cella tartalmának beállítása
tr7.appendChild(td14); // Cella hozzáadása a sorhoz

const td15 = document.createElement("td"); // Tizenötödik cella létrehozása
td15.innerHTML = obj_tr7.td15_value; // Cella tartalmának beállítása
tr7.appendChild(td15); // Cella hozzáadása a sorhoz

const tr8 = document.createElement("tr"); // Hetedik sor létrehozása
tbody.appendChild(tr8); // Hetedik sor hozzáadása a törzshöz

const td16 = document.createElement("td"); // Tizenhatodik cella létrehozása
td16.innerHTML = obj_tr8.td16_value; // Cella tartalmának beállítása
tr8.appendChild(td16); // Cella hozzáadása a sorhoz

const td17 = document.createElement("td"); // Tizenhetedik cella létrehozása
td17.innerHTML = obj_tr8.td17_value; // Cella tartalmának beállítása
tr8.appendChild(td17); // Cella hozzáadása a sorhoz

const td18 = document.createElement("td"); // Tizennyolcadik cella létrehozása
td18.innerHTML = obj_tr8.td18_value; // Cella tartalmának beállítása
tr8.appendChild(td18); // Cella hozzáadása a sorhoz