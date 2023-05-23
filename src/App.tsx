const Holidays = [
  {
    fecha: "2023-01-01",
    nombre: "Año Nuevo",
  },
  {
    fecha: "2023-02-27",
    nombre: "Carnaval",
  },
  {
    fecha: "2023-02-28",
    nombre: "Carnaval",
  },
  {
    fecha: "2023-04-14",
    nombre: "Viernes Santo",
  },
  {
    fecha: "2023-05-01",
    nombre: "Día del Trabajo",
  },
  {
    fecha: "2023-05-24",
    nombre: "Batalla de Pichincha",
  },
  {
    fecha: "2023-06-25",
    nombre: "Natalicio de Simón Bolívar",
  },
  {
    fecha: "2023-08-10",
    nombre: "Primer Grito de Independencia",
  },
  {
    fecha: "2023-10-09",
    nombre: "Independencia de Guayaquil",
  },
  {
    fecha: "2023-11-02",
    nombre: "Día de los Difuntos",
  },
  {
    fecha: "2023-11-03",
    nombre: "Independencia de Cuenca",
  },
  {
    fecha: "2023-12-25",
    nombre: "Navidad",
  },
];

const today = new Date();
const nextHoliday = Holidays.find(
  (holiday) => new Date(holiday.fecha) > today
) || {
  ...Holidays[0],
  fecha: new Date(
    new Date(Holidays[0].fecha).getFullYear() + 1,
    new Date(Holidays[0].fecha).getMonth(),
    new Date(Holidays[0].fecha).getDate() + 1
  ),
};

const diferenciaEnMilisegundos = new Date(nextHoliday.fecha).getTime() - today.getTime();
const diferenciaEnDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

const rtf = new Intl.RelativeTimeFormat('es');

function App() {
  return (
    <main>
      <h1>El proximo feriado ({nextHoliday.nombre})es {rtf.format(diferenciaEnDias, "days")}.</h1>
    </main>
  );
}

export default App;
