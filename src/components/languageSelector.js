import React from 'react';

class LanguageSelector extends React.Component {
    render(){
        return (
            <div>
            Select a language
            <p onClick={() => this.props.onLangChange('english')}>English</p>
            <p onClick={() => this.props.onLangChange('dutch')}>Dutch</p>
        </div>
        )
    }
}

export default LanguageSelector;