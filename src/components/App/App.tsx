import cls from './App.module.scss';
import { AppRouter } from "../../providers/router";
import { Navbar } from "../Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className={cls.content}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
