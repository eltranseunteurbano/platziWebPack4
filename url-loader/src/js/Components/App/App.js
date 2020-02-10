import React from 'react'
import data from '../../../json/data.json'
import Loader from '../loader/Loader';
import logo from '../../../images/platzi.png';
import video from '../../../video/que-es-core.mp4';


console.log(data.loaders);
const App = () => {

    const [loaderList, setLoaderList] = React.useState([])

    const handleClick = () => {
      setLoaderList(data.loaders)
    }

    return(
        <>  
            <p>Una linda app hecha en React con WebPack</p>
            <video src={video} width={360} controls poster={logo} />
            <img src={logo} width={40} />       
            <ul>
                {
                loaderList.map(item => <Loader data={item.name} key={item.id}/> )
                }
            </ul>
            
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
         </>
    )	  
}	

export default App;