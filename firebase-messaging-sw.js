importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDT-IdJryyLr6v6dW54W1H6faXrUr6waOs",
    authDomain: "web-push-notification-fa5b8.firebaseapp.com",
    projectId: "web-push-notification-fa5b8",
    storageBucket: "web-push-notification-fa5b8.appspot.com",
    messagingSenderId: "1005402717348",
    appId: "1:1005402717348:web:96b3a8ff30b2ba5905fa31",
    measurementId: "G-DGRGFY1JTW"
});

const messaging = firebase.messaging();

