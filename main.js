const array = [
    { // array tömb nulladik elemei
        th1_value: "Harc megnevezése",
        th2_value: "Szembenálló felek",
        th3_value: "Haderő"
    },
    { // array tömb első elemei
        harc_nev: "Rákóczi szabadságharc",
        harcolo1: "Kuruc",
        hadero1: "70.000",
        harcolo2: "Labanc",
        hadero2: "60.000"
    },
    { // array tömb második elemei
        harc_nev: "48-as szabadságharc",
        harcolo1: "Osztrák császárság (+ Orosz birodalom)",
        hadero1: "170.000 (+ 200.000)",
        harcolo2: "Magyar királyság",
        hadero2: "170.000"
    },
    { // array tömb harmadik elemei
        harc_nev: "I. világháború",
        harcolo1: "Antant",
        hadero1: "43 millió",
        harcolo2: "Központi hatalmak",
        hadero2: "25 millió"
    },
    { // array tömb negyedik elemei
        harc_nev: "Bosworthi csata",
        harcolo1: "Angolok (York + Lancester)",
        hadero1: "15.000"
    }
]

function fuggveny(){ //fuggveny függvény/function bevezetése
    const table = document.createElement("table"); // Táblázat elem létrehozása
    document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

    const thead = document.createElement("thead"); // Táblázat fejléc létrehozása
    table.appendChild(thead); // Fejléc hozzáadása a táblázathoz

    const tr1 = document.createElement("tr"); // Sor létrehozása a fejlécben
    thead.appendChild(tr1); // Sor hozzáadása a fejlécben

    const th1 = document.createElement("th"); // Oszlopcímke létrehozása
    th1.innerHTML = array[0].th1_value; // Oszlopcím beállítása
    tr1.appendChild(th1); // Oszlopcím hozzáadása a sorhoz

    const th2 = document.createElement("th"); // Második oszlopcímke létrehozása
    th2.innerHTML = array[0].th2_value; // Második oszlopcím beállítása
    tr1.appendChild(th2); // Második oszlopcím hozzáadása a sorhoz

    const th3 = document.createElement("th"); // Harmadik oszlopcímke létrehozása
    th3.innerHTML = array[0].th3_value; // Harmadik oszlopcím beállítása
    tr1.appendChild(th3); // Harmadik oszlopcím hozzáadása a sorhoz

    const tbody = document.createElement("tbody"); // Táblázat törzsének létrehozása
    table.appendChild(tbody); // Táblázat törzsének hozzáadása a táblázathoz

    for (let i = 1; i < array.length; i++) { // for ciklus bevezetése

        const elem = array[i]; // Az aktuális elem, amivel dolgozunk a ciklusban
        const tr = document.createElement("tr") // Első sor létrehozása
        tbody.appendChild(tr) // Sor hozzáadása a törzshöz

        const tr2 = document.createElement("tr") // Második sor létrehozása
        tbody.appendChild(tr2) // Második sor hozzáadása a törzshöz

        const harc = document.createElement("td") // Cella létrehozása a harc nevéhez
        harc.innerHTML = elem.harc_nev // A cella tartalmának beállítása az adatból
        harc.rowSpan = 2 // A cella két soron jelenik meg
        tr.appendChild(harc) // Cella hozzáadása az első sorhoz

        const harcolo1 = document.createElement("td") // Cella létrehozása az első harcoló fél számára
        harcolo1.innerHTML = elem.harcolo1 // A cella tartalmának beállítása
        tr.appendChild(harcolo1) // Cella hozzáadása az első sorhoz

        const hadero1 = document.createElement("td") // Cella létrehozása az első harcoló fél haderője számára
        hadero1.innerHTML = elem.hadero1 // A cella tartalmának beállítása
        tr.appendChild(hadero1) // Cella hozzáadása az első sorhoz

        if (elem.harcolo2){ // ha van az array-ben harcolo2 akkor tortennek a dolgok:
            const harcolo2 = document.createElement("td") // Cella létrehozása a második harcoló fél számára
        harcolo2.innerHTML = elem.harcolo2 // A cella tartalmának beállítása
        tr2.appendChild(harcolo2) // Cella hozzáadása a második sorhoz
        }

        if (elem.hadero2){ // ha van az array-ben hadero2 akkor tortennek a dolgok: 
            const hadero2 = document.createElement("td") // Cella létrehozása a második harcoló fél haderője számára
        hadero2.innerHTML = elem.hadero2 // A cella tartalmának beállítása
        tr2.appendChild(hadero2) // Cella hozzáadása a második sorhoz
        }
    }
}
fuggveny();

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const harc_nev = document.getElementById("harc_nev"); // harc lekérése
    const harcolo1 = document.getElementById("harcolo1"); // harcolo1 lekérése
    const hadero1 = document.getElementById("hadero1");  // hadero1 lekérése
    const harcolo2 = document.getElementById("harcolo2"); // harcolo2 lekérése
    const hadero2 = document.getElementById("hadero2"); // hadero2 lekérése

    const harc_nev_value = harc_nev.value // a "harc" értékét kiszervezem egy új "harc_value" változóba
    const harcolo1_value = harcolo1.value // a "harcolo1" értékét kiszervezem egy új "harcolo1_value" változóba
    const hadero1_value = hadero1.value // a "hadero1" értékét kiszervezem egy új "hadero1_value" változóba
    const harcolo2_value = harcolo2.value // a "harcolo2" értékét kiszervezem egy új "harcolo2_value" változóba
    const hadero2_value = hadero2.value // a "hadero2" értékét kiszervezem egy új "hadero2_value" változóba

    const obj =  { // egy új objektumba rakom a value-s dolgokat
        td1: harc_nev_value, 
        td2: harcolo1_value, 
        td3: hadero1_value, 
        td4: harcolo2_value,
        td5: hadero2_value 
    }

    array.push(obj);
    table.innerHTML = "";
    fuggveny();
})