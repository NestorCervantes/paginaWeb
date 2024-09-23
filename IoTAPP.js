// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDQkuBq2iB9jbsG6uTZZb3qKWi25QqDIak",
 authDomain: "esp32iot-719bf.firebaseapp.com",
 databaseURL: "https://esp32iot-719bf-default-rtdb.firebaseio.com",
 projectId: "esp32iot-719bf",
 storageBucket: "esp32iot-719bf.appspot.com",
 messagingSenderId: "62180059813",
 appId: "1:62180059813:web:f0238a2bc0fc8296743b4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var IoTApp = document.getElementById('IoTApp')
var dbRef = firebase.database()

var Humedad = 0;
var Temperatura = 0;
var Presion = 0;
var Altitud = 0;


// Referencias a las nuevas variables en la base de datos Firebase
let dbAltitud = dbRef.ref("esp32IoTApp/Altitud/");
dbAltitud.on('value', function(snapshot) {
  console.log("El valor de la Altitud es", snapshot.val());
  Altitud = snapshot.val();
  document.getElementById("altitud-btn").innerHTML = "Altitud: " + Altitud + " m";
});

let dbHumedad = dbRef.ref("esp32IoTApp/Humedad/");
dbHumedad.on('value', function(snapshot) {
  console.log("El valor de la Humedad es", snapshot.val());
  Humedad = snapshot.val();
  document.getElementById("humedad-btn").innerHTML = "Humedad: " + Humedad + "%";
});

let dbPresion = dbRef.ref("esp32IoTApp/Presion/");
dbPresion.on('value', function(snapshot) {
  console.log("El valor de la Presión es", snapshot.val());
  Presion = snapshot.val();
  document.getElementById("presion-btn").innerHTML = "Presión: " + Presion + " hPa";
});

let dbTemperatura = dbRef.ref("esp32IoTApp/Temperatura/");
dbTemperatura.on('value', function(snapshot) {
  console.log("El valor de la Temperatura es", snapshot.val());
  Temperatura = snapshot.val();
  document.getElementById("temperatura-btn").innerHTML = "Temperatura: " + Temperatura + "°C";
});









