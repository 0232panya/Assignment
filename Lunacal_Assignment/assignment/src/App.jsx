
import './App.css'
import BorderBottom from './Components/Border-Bottom/BorderBottom'
import GallerySec from './Components/Gallery-Sec/GallerySec'
import WidgetSec from './Components/Widget-Sec/WidgetSec'

function App() {

  return (
    <div className='app'>
      <div className='left-side'>

      </div>
      <div className='right-side'>
          <WidgetSec />
          <BorderBottom />
          <GallerySec />
          <BorderBottom />
      </div>
      
    </div>
  )
}

export default App
