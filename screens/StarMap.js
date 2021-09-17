import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends Component{

    constructor(){
        super()
        this.state={
            latitude:'',
            longitude:'',
        }
    }

    render(){
        const{latitude,longitude}=this.state
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdata=false&showposition=false`;
        
        return(
            <View style={styles.container}>
                <View style={styles.backGroundStyle}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                    placeholder={"type latitude here"}
                    />
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                    placeholder={'type longitude here'}
                    />
                </View>
                <WebView
                   scalesPageToFit={true}
                   source={{uri:path}}
                   style={{marginTop:5,marginBottom:5}}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({

  textInput:{
      height:40,
      borderColor:'white',
      borderWidth:1,
      borderRadius:20
  },
  container:{
      flex:1
  },
  backGroundStyle:{
      backgroundColor:"purple",

  }

})