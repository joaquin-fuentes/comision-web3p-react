import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
};

export default App;
