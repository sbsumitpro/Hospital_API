
In this project I have created 7 Apis:- endpoints are following

// Doctors
1. http://localhost:3800/api/doctors/register (POST)
2. http://localhost:3800/api/doctors/login (POST) --- JWT Token generated while login

//Patients  -- All the patients API has been secured using JWT token
3. http://localhost:3800/api/patients/register (POST)
4. http://localhost:3800/api/patients/6512d58bf72e04706d666d22/create_report (POST)
5. http://localhost:3800/api/patients/6512a8d4b3f7281d7c05145c/all_reports (GET)
6. http://localhost:3800/api/patients/(GET) -- To get all the patients

// Report
7. http://localhost:3800/api/reports/Negetive (GET) --- To get all the patients report filtered by a specific status(like- in case of COVID, Negetive,Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit])


// Guideline on how to use the API

-- npm install
-- create a .env file then create a key "JWT_SECRET"
-- --First start the server using npm start 
-- Then goto POSTman and configure all the above APIs
-- If your MongoDB in local is configured then only this project will run as all the doctors, patients and report data has been stored in the database
-- First hit the 1st API to create a doctor profile with unique email id every time.
-- Then Login for the doctor and you will get a token in the response
-- To use APIs from 3-6 you need to set a header
    Authorization : Bearer <Access_token>
-- The 7 th API is open without any authentication.




>>>> In this project we have made the system in such a way

that only a doctor can signup and login
and after that he can only register new patient or create report for the patients.







(c) Sumit Biswas