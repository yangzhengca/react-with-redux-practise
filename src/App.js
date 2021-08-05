import "./App.css";
import Home from "./pages/Home/Home";
import AddNewPost from './pages/AddNewPost/AddNewPost'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/add"><AddNewPost /></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
