import React from 'react';

//export default React.createContext('dutch')


// context as redux example
const Context = React.createContext('english');

class LanguageStore extends React.Component {
    state = { language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render(){
        return (
            <Context.Provider value={{...this.state, onLanguageChange}}>
                {this.props.children}
            </Context.Provider>    
        )
    }
}
export default Context;