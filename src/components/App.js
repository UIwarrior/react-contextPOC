import React from 'react';
import UserCreate from './userCreate';
import Container from 'react-bootstrap/Container'
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';
import LanguageSelector from './languageSelector';

class App extends React.Component {
    state = { language: 'english' }

    onLangChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <Container>
                <LanguageSelector onLangChange = {this.onLangChange}/> 
                <ColorContext.Provider value="warning">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </Container>

        )
    }
}
export default App;