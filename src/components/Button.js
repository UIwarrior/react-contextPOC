import React from 'react';
import Button from 'react-bootstrap/Button'
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

class ButtonComp extends React.Component {
    
    // only require when we access context using this.context
    static contextType = LanguageContext;
   
    render(){
        /* const text = this.context === 'english'? 'submit' : 'voorlegen'
        return <Button variant="primary">{text}</Button> */
        
        return (
            <ColorContext.Consumer>
            {(color) => 
             <Button variant={`${color}`}>
             <LanguageContext.Consumer>
                 {(value)=> value === 'english' ? 'Submit' : 'Voorleggan'}
             </LanguageContext.Consumer>
         </Button> 
            }
            </ColorContext.Consumer>
           
        )
    
    }
}
export default ButtonComp;