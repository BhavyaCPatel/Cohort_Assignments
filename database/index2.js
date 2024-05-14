const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb+srv://bhavyaaes:bcp1403@cluster1.5wc8yob.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1");
        console.log("Connected to MongoDB");

        const User = mongoose.model("User", {
            name: String,
            username: String,
            password: String,
        });

        const user = new User({
            name: "user",
            username: "user1",
            password: "user123"
        });

        await user.save();
        console.log("User saved successfully");

        // Close the connection
        await mongoose.connection.close();
        console.log("Connection closed");
    } catch (err) {
        console.error("Error connecting to MongoDB: ", err);
    }
}

main();
