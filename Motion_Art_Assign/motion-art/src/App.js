
import './App.css';
import CustomCursor from './Components/CustomeCursor/CustomCursor';

function App() {


  // useEffect(()=>{
  //     fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json')
  //       .then(res => res.json())
  //       .then(res =>{
  //         console.log(res)
  //       })
  //  })

  return (
    <div className="App">
      <CustomCursor />

      Hello
    </div>
  );
}

export default App;
