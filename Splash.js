import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

class Splash extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(()=> this.props.navigator.push({name: 'seleccion'}),2000);
    }

    render() {
        return (
        <View style={styles.content}>
            <Image style={styles.splash} source={require('./assets/img/logo2.png')}/>
            <Text style={styles.tituloApp}>AuReal - Recorridos Geolocalizados</Text>
        </View>
        );
    }
}

const styles = {
    splash: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    tituloApp: {
        fontWeight:'bold',
    }
};

module.exports = Splash;