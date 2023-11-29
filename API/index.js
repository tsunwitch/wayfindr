import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
const app = express();
const PORT = 3000;

// Sample data for routes
const routes = [
  {
    id: uuidv4(),
    name: "Bielsko trip",
    waypoints: [
      {
        id: uuidv4(),
        name: "Cavatina hall",
        description: "Best hall in the world",
        coordinates: [49.7835438, 19.0589105],
      },
      {
        id: uuidv4(),
        name: "Wypozyczalnia rowerow jakichs",
        description: "Rent some bike my dude",
        coordinates: [49.80949682048584, 19.055480571676213],
      },
      {
        id: uuidv4(),
        name: "Properek palarnia kawy",
        description:
          "cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop cocker desktop",
        coordinates: [49.79121684091902, 19.04904182651327],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Best kebabs in the worl",
    waypoints: [
      {
        id: uuidv4(),
        name: "Barbar Kebab",
        description:
          "Back in 1979, Mohammad Ghaziri, a Beiruti citizen with a fearless entrepreneurial spirit came with the idea of establishing Barbar. Amid the intensity of theLebanese war, Ghaziri started with a small man’ousheh bakery to serve residentsin his city. The shop, which opened facing the landmark Piccadilly theatre in the heart of Beirut, gained fame for its mouthwatering varieties of man’ousheh: thyme, minced meat, and other. Yet, Barbar’s hit was the man’ousheh with super melting akkawi cheese, deliciously topped with sesame seeds. And the man’ousheh was driven to rapid fame",
        coordinates: [33.89432, 35.483266],
      },
      {
        id: uuidv4(),
        name: "Uludağ Kebapçısı Cemal & Cemil Usta",
        description:
          "Uludağ Kebapçısı Cemal & Cemil Usta to niezwykłe miejsce, gdzie tradycja smaku spotyka się z nowoczesnym podejściem do kebabu. Znajdująca się w sercu miasta, ta kebabiarnia oferuje autentyczne smaki tureckiej kuchni, które są owocem wieloletniego doświadczenia mistrzów kuchni, Cemala i Cemila Usta. Podczas wizyty w Uludağ Kebapçısı możesz delektować się świeżo przygotowywanymi, soczystymi mięsami, aromatycznymi przyprawami i oryginalnymi sosami. Atmosfera miejsca przeniesie cię do serca Turcji, a gościnność personelu sprawi, że poczujesz się jak u siebie w domu. Uludağ Kebapçısı Cemal & Cemil Usta to doskonałe miejsce dla miłośników autentycznego smaku kebaba, którzy pragną doświadczyć prawdziwej tureckiej gościnności",
        coordinates: [40.197115, 29.060184],
      },
      {
        id: uuidv4(),
        name: "Şehzade Cağ Kebap",
        description:
          "Şehzade Cağ Kebap to niezwykła kebabirania, która wyróżnia się nie tylko wyjątkowym smakiem, ale także unikalnym podejściem do przygotowywania kebaba. Miejsce to, usytuowane w sercu miasta, jest prawdziwym rajem dla miłośników tureckich smaków. Właściciele, znani jako mistrzowie kuchni w dziedzinie kebaba, serwują świeże, starannie dobrane mięsa, które są delikatnie grillowane i podawane z aromatycznymi przyprawami. W kebabirani Şehzade Cağ Kebap możesz doświadczyć nie tylko wyśmienitych dań, ale także przyjemnej atmosfery. Przyjazny personel, stylowe wnętrze i autentyczne smaki sprawiają, że każda wizyta staje się niezapomnianym doświadczeniem kulinarnej podróży do serca Turcji. Şehzade Cağ Kebap to idealne miejsce dla tych, którzy pragną odkryć tajemnice tureckiego kebaba w wyjątkowym otoczeniu.",
        coordinates: [41.014006, 28.975324],
      },
      {
        id: uuidv4(),
        name: "Petek Çöp Şiş",
        description:
          "Petek Çöp Şiş to wyjątkowa kebabiarnia, która przyciąga miłośników autentycznych smaków tureckiego kebaba. Zlokalizowana w malowniczym otoczeniu miasta, ta restauracja zyskała uznanie dzięki unikalnej recepturze i pasji do doskonałego smaku. Właściciele, znani jako artyści kulinarni, specjalizują się w przygotowywaniu tradycyjnych potraw z użyciem świeżych i wysokiej jakości składników. W Petek Çöp Şiş każdy kęs jest prawdziwą podróżą po tureckich smakach - soczyste mięso, aromatyczne przyprawy i oryginalne sosy sprawiają, że każda potrawa jest niezapomniana. W przytulnej atmosferze tego miejsca, zainspirowanej tradycyjnymi elementami tureckiego wzornictwa, goście mogą cieszyć się nie tylko wyśmienitym jedzeniem, ale także przyjaznymi usługami. Petek Çöp Şiş to idealna kebabiarnia dla tych, którzy pragną odkryć tureckie smaki w wyjątkowym otoczeniu",
        coordinates: [37.9484705171073, 27.368779322726],
      },
      {
        id: uuidv4(),
        name: "Dönerci Şahin Usta",
        description:
          "Dönerci Şahin Usta to niezwykła kebabiarnia, gdzie mistrzowskie umiejętności kulinarnego rzemiosła spotykają się z pasją do doskonałego smaku. Położone w sercu miasta, to miejsce przyciąga miłośników autentycznych tureckich smaków. Właściciel, znany jako Szef Şahin, to prawdziwy artysta kulinarny, specjalizujący się w przygotowywaniu dönera na najwyższym poziomie. Świeże, aromatyczne mięsa, delikatnie przyprawione i perfekcyjnie przygotowane, stanowią kwintesencję doświadczenia kulinarnej podróży do Turcji. W Dönerci Şahin Usta, oprócz wyjątkowego smaku, goście mogą cieszyć się serdeczną atmosferą i szybką obsługą. To miejsce idealne dla tych, którzy pragną delektować się tradycyjnymi smakami dönera w przyjemnym otoczeniu, które emanuje turecką gościnnością.",
        coordinates: [41.0106957520796, 28.9699813353893],
      },
    ],
  },
];

//stupid ass cors
app.use(cors());

// Endpoint to get all routes
app.get("/routes", (req, res) => {
  res.json(routes);
});

// Endpoint to get a specific route by ID
app.get("/routes/:id", (req, res) => {
  const routeId = parseInt(req.params.id);
  const route = routes.find((r) => r.id === routeId);

  if (!route) {
    res.status(404).json({ error: "Route not found" });
  } else {
    res.json(route);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
