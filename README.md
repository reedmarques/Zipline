This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project Overview:

The main page of this web app is the Dashboard page that shows all registered zips on file.

Some structural overview:
Statuses: The three statuses are 'Completed', 'High' priority, and 'Low' priority. Any Zip that has at least one 'High' priority is blocked, denoted by a red danger sign. A Zip with 'Low' priority maintenance requests are not blocked, so they are denoted by a green check as well as a yellow warning sign. Finally, Zips with no pending maintenance requests are cleared with a green check. Regarding an automated tool to figure out whether a zip can fly or not, I figured I would build it into the logic of how statuses were determined, allowing the operator to simply see if there is a red danger sign or not.

Zips: Zip attributes consist of a Zip ID <String>, pendingMaintenance <List>, and completedMaintenance <List>.

Maintenance Requests: These have 3 attributes as well: a status number <Int>, priority <Enum/String>, and problem description <String>.

Database: Google NoSQL Firebase, real time updates.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
