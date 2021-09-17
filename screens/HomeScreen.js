import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image,SafeAreaView,StatusBar,Platform } from 'react-native';


const bgImage = require('../assets/stars.gif')
const mainIcon = require('../assets/main-icon.png')
const spaceCraftImage = require('../assets/space_crafts.png')
const starMapImage = require('../assets/star_map.png')
const dailyPictureImage = require('../assets/daily_pictures.png')

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea}>
                 <ImageBackground source={bgImage} style={styles.bgStyle}>
                     <View>
                      <Image style={styles.titleImage} source={mainIcon}></Image>
                      <Text style={styles.titleText}>Staller App</Text>
                     </View>
                     
                      <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('SpaceCraft')}
                      style={styles.button}
                      >
                      <Image source={spaceCraftImage} style={styles.imageStyle}></Image>
                      <Text style={styles.buttonText}>Space Craft</Text>
                      </TouchableOpacity>
                    
                     <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('StarMap')}
                      style={styles.button}
                      >
                      <Image source={starMapImage} style={styles.imageStyle}></Image>
                      <Text style={styles.buttonText}>Star Map</Text>
                      </TouchableOpacity>
                   
                     <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('DailyPic')}
                      style={styles.button}
                      >
                      <Image source={dailyPictureImage} style={styles.imageStyle}></Image>
                      <Text style={styles.buttonText}>Daily Pictures</Text>
                      </TouchableOpacity>
                  
                 </ImageBackground>
             </SafeAreaView>
            </View>
        )
    }
}


const  styles  = StyleSheet.create({
    container:{
        flex:1
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:'white',
        marginLeft:500
    },
    droidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
       marginLeft:50,
       marginRight:50,
       marginTop:50,
       height:100,
       borderRadius:50,
       backgroundColor:'white',
    },
    buttonText:{
        fontSize:30,
        fontWeight:'bold',
        color:'pink',
        alignItems:'center',
        marginLeft:500,
        marginTop:30
    },
    bgStyle:{
        flex:1,
        resizeMode:'cover',
    },
    imageStyle:{
      position:'absolute',
      height:100,
      width:100,
      resizeMode:'contain',
      right:20,
    },
    titleImage:{
        height:200,
        width:200,
        resizeMode:'contain',
        marginLeft:500,
        rigth:200,
        marginTop:50,
    }
})