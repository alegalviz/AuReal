import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Splash from './Splash';
import Seleccion from './Seleccion';

class App extends  Component {

    renderScene(route, navigator){
        switch (route.name){
            case 'splash': return <Splash navigator={navigator} />
            case 'seleccion': return <Seleccion navigator={navigator} />
        }
    }

    render(){
        return(
            <Navigator sceneStyle={{backgroundColor: 'white'}} renderScene={this.renderScene} initialRoute={{name: 'splash'}}/>
        )

    }
}

module.exports = App;