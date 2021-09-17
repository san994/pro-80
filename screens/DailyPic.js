import React,{Component} from 'react';
import { StyleSheet, Text, View ,SafeAreaView,ImageBackground,Image, TouchableOpacity, Linking} from 'react-native';

import axios from 'axios'


//https://api.nasa.gov/planetary/apod?api_key=2OaClPsxNgfj59W2PwnnIEqqFbJ1HkQrzc6UxeOs

export default class DailyPicScreen extends Component{

    constructor(){
        super()
        this.state={
            apod:[]
        }

    }

    componentDidMount(){
        this.getAPOD()
    }

    getAPOD=()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=6h6kZ5yDOulmHL0dH2fWTYK24UAqeCGR6bxcUqN0")
             .then((responce)=>{
                 this.setState({
                    apod:responce.data
                 })
             })
             .catch(err=>{
                 alert(err.message)
             })
    }

    render(){
        const{apod}=this.state
        return(
            <View>
                <SafeAreaView/>
                <ImageBackground source={require("../assets/space.gif")}>
                <View>
                  <Text style={styles.title}>Astroad</Text>
                  <Text style={styles.dateText}>{this.state.apod.date}</Text>
                </View>
                <View style={styles.cardStyle}>
                  
                    <Text style={styles.titleTextStyle}>{apod.title}</Text>

                    <TouchableOpacity
                     style={styles.buttonStle}
                    onPress={()=>Linking.openURL(this.state.apod.url).catch(error=>console.log("not found"))}
                    >
                    <View>
                    <Image 
                      style={styles.imageStle}
                      source={require("../assets/play-video.png")}/>
                    </View>
                    </TouchableOpacity>

                     <Text style={styles.textStyle}>{this.state.apod.explanation}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles =  StyleSheet.create({
  textStyle:{
    fontWeight:100,
    color:"white",
    fontStyle:'bold',
    fontSize:20
  },
   titleTextStyle:{
    fontWeight:'2%',
    color:"white",
    fontStyle:'bold',
    fontSize:30,
    alignItems:'center'
  },
  title:{
    alignSelf:"center",
    fontSize:50,
    fontWeight:"3%",
    color:"white"
  },
  buttonStle:{
   alignSelf:"center",
   backgroundColor:"white",
   borderRadius:20
  },
  imageStle:{
    borderRadius:20,
    width:50,
    height:50
  },
  cardStyle:{
    backgroundColor:"purple",
    borderRadius:20
  },
  dateText:{
    color:"white",
    fontSize:15
  }
  
})