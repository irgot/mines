import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Modal} from 'react-native'

export default props => {
    console.log('opa')
    return(
        
        <Modal onRequestClose={props.onCancel}
        visible={props.isVisible} animationType='slide'
        transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity style={[styles.button,styles.bgEasy]} onPress={()=>props.onLevelSelect(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.bgNormal]} onPress={()=>props.onLevelSelect(0.2)}>
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.bgHard]} onPress={()=>props.onLevelSelect(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    container:{
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'space-around',
        padding:15,

    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        marginTop:10,
        padding:5
    },
    buttonLabel:{
        fontSize: 20,
        color:'#eee',
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center',
        width:90,

    },
    bgEasy:{
        backgroundColor:'#49b65d'
    },
    bgNormal:{
        backgroundColor:'#2765F7'
    },
    bgHard:{
        backgroundColor:'#F26337'
    }

})
