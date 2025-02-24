/*
1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
dessa hopplängder.
*/

function getLength(jumpings: number[]): number {
  return jumpings.reduce( (totalDistance, currentJump) => totalDistance + currentJump, 0 );
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  return student.name == 'Sebastian' && student.handedInOnTime ? 'VG' : 'IG';
}

/*
3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
*/

class Temperature {
  constructor(public location: string, public date: Date, public temp: number) {}
}

function averageWeeklyTemperature(readings: Temperature[], location: string = 'Stockholm') {
  const ONE_WEEK_AGO = Date.now() - 604800000, relevatReadings = readings.filter( reading => reading.location === location && reading.date.getTime() > ONE_WEEK_AGO );

  return relevatReadings.reduce((totalTemp, reading) => totalTemp + reading.temp, 0) / relevatReadings.length;
}

/*
4. Följande funktion kommer att presentera ett objekt i dom:en. 
Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
*/

function showProduct(
  name: string,
  price: number,
  amount: number,
  description: string,
  image: string,
  parent: HTMLElement
) {
  const container = document.createElement("section"), img = document.createElement("img"), title = document.createElement("h4"),
    details = document.createElement('details'), div = document.createElement('div'), input = document.createElement('input'),
    span = document.createElement("span");

  img.src = image;
  title.innerHTML = name;
  details.innerHTML = description;
  span.innerHTML = `${price}:-`;

  Object.assign(input, { 
    type: 'number',
    value: amount
  });

  div.append(span, input);
  container.append(img, title, details, div);
  parent.appendChild(container);
}

/*
5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
går att göra betydligt bättre. Gör om så många som du kan hitta!
*/
function presentStudents(students: Student[]) {
  students.forEach(student => {
    const container = document.createElement("div"), checkbox = document.createElement("input");

    Object.assign(checkbox, {
      type: 'checkbox',
      checked: student.handedInOnTime
    });

    container.append(checkbox);
    document.getElementById('passedstudents')?.append(container);
  });
}

/*
6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
Lorem, ipsum, dolor, sit, amet
Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
*/
function concatenateStrings() {
  return ["Lorem", "ipsum", "dolor", "sit", "amet"].join(' ');
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
lösning som är hållbar och skalar bättre. 
*/

interface IUser {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

function createUser(user: IUser, legalAge: number = 20) {
  if (new Date().getFullYear() - user.birthday.getFullYear() < legalAge) {
    return `Du \xE4r under ${legalAge} \xE5r`;
  }
  
  // Logik för att skapa en användare
}