WELCOME TO COTE REVIEWS

Extract the Zip

Running the Back-end:

Open Visual Studio and try to run the API (COTE_Reviews) Project
⇒ If you can’t run the API project from Visual Studio, Open Visual Studio Code from Apps Anywhere which can run it.

In Visual Studio Code via terminal navigate to the Cote_Review API folder and run the backend: 
⇒cd Cote_Review
⇒cd API
 ⇒dotnet watch run

*This will open Swagger in a browser so you know it’s running!

Running the Front-end:

Run Node.JS from Apps Anywhere

Open a new terminal within VS Code and Ensure you are in the COTE-Movies folder

Terminal Commands
cd .. to move back in terminal, dir to show current folders, cd folder_name to change directory to that folder.

Once in the Cote-Movies folder in a terminal, run the following command to install node modules required:

⇒ npm install

Running the Chat Server:

Run the following command from the COTE-Movies folder in a new terminal:

⇒ node src/server/index.js

Now you should have the back-end API running, and the chat server.  Open a new terminal and run the front-end and the full application should now be working.

Run the Front-end via terminal from the COTE-Movies folder, by typing the following:

⇒ npm start