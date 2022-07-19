import "./App.css";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import ProtectedRoute from "./common/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles/common.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/">
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/product">
            <Layout>
              <Product />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/pricing">
            <Layout>
              <Pricing />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/dashboard">
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/product/:id">
            <Layout>
              <SingleProduct />
            </Layout>
          </ProtectedRoute>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
