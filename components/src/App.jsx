// father component: App.jsx
import './App.css'

// import the son components
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {

  return (
    <>
      <h1>My React App</h1>
      {/* use the son component */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample name="Gabriel" age={19} />
    </>
  )
}

export default App;
