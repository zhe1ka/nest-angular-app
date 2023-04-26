**To start a project**
1. install packages 
``cd frontend && npm i``
in a new terminal
``cd backend && npm i``

2. run MongoDB
``mongod``
P.S: if you use MacOS then you need to specify ``--dbpath``, for example:
create a folder "db" in "Desktop" folder and copy an absolute path to it
``mongod --dbpath="/Users/username/Desktop/db"``

3. run
backend ``cd backend && npm run start:dev``
frontend (in a new terminal) ``cd frontend && npm start``

4. open http://localhost:4200

**Summary**
1. Done only required options.
2. The workload is pretty big for one day, I was a bit in a hurry despite I know everything how to do.
3. There are 3 pages: the first one gets data based on client-side calls to third-party api. Then I recognised that it should be done on the server-side but decided to keep the exist logic to showcase.
4. I tried to add a leaflet map, it didn't work out. Not sure why but the map itself didn't want to render.
5. I didn't add the icons as images but the logic is done which detects the correct icon.
6. Regarding the bonus point "Update current temperature periodically (every 5 minutes)." how I'd implement it:
in the result of the request to the weather API there is a list of temperatures for the next 7 days, I'd save it in the db. Then in Cron-Job I'll handle this info.

**List of possible improvements:**
1. Makes sense to add CORS and CSP rules.
2. Add Rate limits especially since we trigger third-party APIs.
3. Improve appearance: add some shadows, adjust button "save", make better margins; add "loader" while data is being loaded.
4. Implement lazy loading for saved details.
5. Write unit tests for at least "shared" components.
6. Split and move mongo URI to config file.
7. Makes sense to add some validations, for example, for "email".
