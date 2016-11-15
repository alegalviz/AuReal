import React, {Component} from 'react';
import {Image} from 'react-native';

class Splash extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(()=> this.props.navigator.push({name: 'seleccion'}),2000);
    }

    render() {
        return (
            <Image style={styles.splash} source={require('./assets/img/logo.png')}/>
        );
    }
}

const styles = {
    splash: {
        alignItems: 'center',
    }
};

module.exports = Splash;