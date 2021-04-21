
const admin = require("firebase-admin");

const serviceAccount = require("./private-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});





function getDataBase() {
	return admin.firestore()
}

module.exports = getDataBase