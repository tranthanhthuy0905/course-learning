1. Sharing errors met:

   - Cannot read properties of null (reading 'useRef'):
     - Using useRef somewhere incorrectly
     - Issue with the version of React or other dependencies: `npm install react@latest react-router-dom@latest`
   - `Cannot read properties of null (reading 'useContext') TypeError: Cannot read properties of null (reading 'useContext')`
     - Using useContext somewhere incorrectly, fixing by using `createContext` and provide a `Provider`
   - `export 'Switch' (imported as 'Switch') was not found in 'react-router-dom'`
     - Unmatching React vs react-router-dom version: `npm install react@latest react-router-dom@latest`
   - `Matched leaf route at location "/setting" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page. `
     - Wrong import of any page or Lack of < />
   - why the second child (position:absolute) of parent (position:relative) not work?
     - Need to set concrete width, height for parent

2. Hook learning:

   - useContext: Provide context - contains all of the contextual var
   - useState: Provide state - a variable stands for the state of component and changable
   - useReduce: Provide Reducer - similar to Redux to handle page navigation problem but for simple and insequent navigation
   - useEffect: Provide Effect - handle actions within the first render (callback var = []) or while rerendering whenever callback var change value
   - useRef:

3. Retrieve the state / up-to-date data:

   - ContextAPI: Simple, not frequent => useCintext
   - useReduce
   - redux:

4. JSX / React v6 @latest

   - Different syntax

5. How to creat Element in React:

   - import {createElement} from "react"; => createElement("div", {className: "abc"}, "Daily", createElement("h1", {}, "Another element"));
   - If add element inside parents via for-loop:
     - Create an empty arr [], for { arr.push(JSX)} , return <div>{arr}</div>
     - Or: for (data.map() )
   - Add JSX into another:
     `<div> {function} </div>`

6. React-router-dom:

   - Install @latest
   - Define routers inside index.js, then using the page component of _Link_ in `navbar`

7. Add new Gg Font:

   - Add `<link href="https://fonts.googleapis.com/css?family=Caveat|Montserrat:400,600&display=swap" rel="stylesheet">` in public **_index.html_** file.
   - Find more: fonts.google.com

8. Use Icon:

   - `npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`
   - import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faCircle } from '@fortawesome/free-solid-svg-icons';
   - <FontAwesomeIcon icon={faCircle}

9. CSS:

   - **_Flex gap_**: display: flex; gap: 10px
   - `>`: Direct child
   - Center text inside: `display: flex; align-items: center; justify-content: center;`
   - Locate child compared to parent:
     .container {
     position: relative;
     }

     .text-element {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     }

   - Display overflow with ...:
     .container {
     width: 200px; /_ Set a fixed width for the container _/
     white-space: nowrap; /_ Prevent text from wrapping _/
     overflow: hidden; /_ Hide the overflow _/
     text-overflow: ellipsis; /_ Display ellipsis for overflow text _/
     }
   - **_var_** in CSS:
     - If Sass, Less: `$primary-color: #007bff;`
     - If pure: `:root {--primary-color: #007bff; }` then use `var(--)`
