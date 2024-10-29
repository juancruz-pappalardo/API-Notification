const express = require('express');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notifications');

dotenv.config();

const app = express();
app.use(express.json());

// Cambiar la ruta base
app.use('/api/v1', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
