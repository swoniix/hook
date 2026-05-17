import './App.css';
import { Book } from './components/Book/Book'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<Book text=" Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Если props представляет входные данные,которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью зависят от компонента."></Book>}
      </header>
    </div>
  )
}

export default App;
