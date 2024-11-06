// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const socketIo = require('socket.io');
// const http = require('http');

// const cors = require('cors');

// const adminRoutes = require('./routes/adminRoutes');
// const doctorRoutes = require('./routes/doctorRoutes');
// const patientRoutes = require('./routes/patientRoutes');
// const hospitalRoutes = require('./routes/hospitalRoutes');
// const prescriptionRoutes = require('./routes/prescriptionRoutes');
// const chatRoutes = require('./routes/chatRoutes.js');
// const videoCallRoutes = require('./routes/videoCallRoutes.js');


// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDB connected successfully.');
//     })
//     .catch((err) => {
//         console.error('MongoDB connection error:', err);
//     });

// // Initialize Socket.IO
// const io = socketIo(server, {
//     cors: {
//         origin: "http://localhost:3000", // Adjust based on your frontend URL
//         methods: ["GET", "POST"],
//         credentials: true,
//     },
// });

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000', // Adjust based on your frontend's URL
//     credentials: true,
// }));

// app.use('/api/admins', adminRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api/patients', patientRoutes);
// app.use('/api/hospitals', hospitalRoutes);
// app.use('/api/prescriptions', prescriptionRoutes);
// app.use('/api/chats', chatRoutes);
// app.use('/api/videocalls', videoCallRoutes);

// // Socket.IO Connection Handling
// io.on('connection', (socket) => {
//     console.log('New client connected: ' + socket.id);

//     socket.on('joinChat', ({ chatId }) => {
//         socket.join(chatId);
//         console.log(`Socket ${socket.id} joined chat ${chatId}`);
//     });

//     socket.on('sendMessage', async ({ chatId, sender, message }) => {
//         const Message = require('./models/Message');
//         const newMessage = new Message({ chatId, sender, message });
//         await newMessage.save();

//         io.to(chatId).emit('receiveMessage', {
//             sender,
//             message,
//             timestamp: newMessage.timestamp,
//         });
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected: ' + socket.id);
//     });
// });

// app.get('/', (req, res) => {
//     res.send('Welcome to the Healthcare System API');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const cors = require('cors');

const adminRoutes = require('./routes/adminRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');

dotenv.config(); // Load environment variables

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',  // Specify the frontend URL
    credentials: true,  // Allow credentials such as cookies and authorization headers
};
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully.');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });



// Routes
app.use('/api/admins', adminRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/prescriptions', prescriptionRoutes);

// Serve static files
app.use(express.static('public'));


// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Healthcare System API');
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});