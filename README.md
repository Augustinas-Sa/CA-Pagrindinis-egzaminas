TARP TERMINALO:

REACT aplikacijos sukurimas:
-- npx create-react-app 1_frontend

Išoriniu bibliotekų instaliavimas į REACT:
- nunaviguojama i folder: cd .\1_frontend
  -- npm i axios
  -- npm i react-icons

REACT paleidimas:
- nunaviguojama i folder: cd .\1_frontend

Paleidimas:
-- npm start

-----------------------------------------------------------------------------------------------------

Backend pakurimas:

- naujas folder "2_backend"
- nunaviguojama i folder: cd .\2_backend
  -- npm init

Išoriniu bibliotekų instaliavimas į backend:

- nunaviguojama i folder: cd .\2_backend
  -- npm i cors
  -- npm i express
  -- npm i dotenv
  -- npm i mongoose
  -- npm i nodemon --save-dev

Serverio paleidimas:
package.json tarp "scripts", eilutės "test": "echo \"Error: no test specified\" && exit 1" pakeitimas į -> "nodemon": "nodemon app.js"

Komandos paleidimas:
-- npm run nodemon

-----------------------------------------------------------------------------------------------------
