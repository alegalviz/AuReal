import React, {Component} from 'react';
import {Image, ListView, Text, TouchableHighlight, View} from 'react-native';
import Toolbar from './Toolbar';

class Seleccion extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow != newRow});
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentDidMount(){

        let url = 'http://perio.unlp.edu.ar/sitios/aureal/api/get_recent_posts/';

        fetch(url)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.posts)
                })
            })

    }

    renderRow(article){

        return(
            <TouchableHighlight>
                <View style={styles.article}>
                    <Image style={styles.articleImage} source={{uri: article.attachments[0].images.thumbnail.url}}/>
                    <Text style={styles.articleTitle}>{article.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View>
                <Toolbar title="Seleccion de recorridos"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>

        );
    }
}

const styles = {
    article: {
        padding: 10,
        borderBottomWidth: .5,
        borderBottomColor: '#ccc',
        flexDirection: 'row'
    },
    articleImage: {
        width: 40,
        height: 40
    },
    articleTitle: {
        flex: 1,
        marginLeft: 10
    }
};

module.exports = Seleccion;