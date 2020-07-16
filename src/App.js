import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import params from './params';
import {createMinedBoard} from './functions';
import MineField from './components/MineField'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = this.createState()
    }
    minesAmount = ()=>{
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols*rows*params.difficultLevel)
    }
    createState = () =>{
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return{
            board:createMinedBoard(rows,cols,this.minesAmount()),
        }
    }
    render() {
        console.log(createMinedBoard(2,2,2))
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Iniciando o Mines!</Text>
                <Text style={styles.welcome}>
                    Tamanho da grade:
                    {params.getRowsAmount()}x{params.getColumnsAmount()}
                </Text>
                <View style={styles.board}>
                    <MineField board={this.state.board}></MineField>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    board:{
        alignItems:"center",
        backgroundColor:'#AAA'
    }
});
