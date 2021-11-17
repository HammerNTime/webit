import Main from "./components/Main"
import ColorPicker from './components/ColorPicker';
import appStyles from "./appStyles.module.css"
function App() {
  return (
    <div className={appStyles.main__container}>
      <Main/>
      <ColorPicker/>
     
    </div>
  );
}

export default App;
