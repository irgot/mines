// const { Dimensions } = require("react-native")

import {Dimensions} from 'react-native'

const params = {
    blockSize:25,
    borderSize: 3,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior da tela
    difficultLevel: 0.1,
    getColumnsAmount(){

        const width = Dimensions.get('window').width        
        return Math.floor(width/this.blockSize)
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeigh = totalHeight *(1-this.headerRatio)        
        return Math.floor(boardHeigh / this.blockSize)
    }


}


export default params
