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
        coordinates: [49.7835438, 19.0589105],
      },
      {
        id: uuidv4(),
        name: "Wypozyczalnia rowerow jakichs",
        coordinates: [49.80949682048584, 19.055480571676213],
      },
      {
        id: uuidv4(),
        name: "Properek palarnia kawy",
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
        coordinates: [33.89432, 35.483266],
      },
      {
        id: uuidv4(),
        name: "Uludağ Kebapçısı Cemal & Cemil Usta",
        coordinates: [40.197115, 29.060184],
      },
      {
        id: uuidv4(),
        name: "Şehzade Cağ Kebap",
        coordinates: [41.014006, 28.975324],
      },
      {
        id: uuidv4(),
        name: "Petek Çöp Şiş",
        coordinates: [37.9484705171073, 27.368779322726],
      },
      {
        id: uuidv4(),
        name: "Dönerci Şahin Usta",
        coordinates: [41.0106957520796, 28.9699813353893],
      },
    ],
  },
];

//stupid ass cors
app.use(cors());

// Endpoint to get all routes
app.get("/routes", (req, res) => {
  console.log("Get routes request:" + routes);
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
