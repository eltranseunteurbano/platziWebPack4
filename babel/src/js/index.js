import '../css/index.css';
import text from './text';

text();

if(module.hot){
    module.hot.accept('./text.js', () => {
        console.log('Recargado en Caliente');
        text();
    });
}



