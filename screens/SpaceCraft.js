import axios from 'axios';
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';

export default class SpaceCraftScreen extends Component{
    constructor(){
        super()
        this.state={
            aircraft:""
        }
    }

    componentDidMount=()=>{
        this.getData()
    }

    getData=async()=>{
     axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
          .then((responce)=>{
              this.setState({
                  aircraft:responce.data.results
              })
              console.log(this.state.aircraft)
          })
          .catch((error)=>{
           alert(error.message)
          })
    }

    keyExtractor = (item, index) => index.toString();

    renderItem=({item})=>{
        return(
            <View style={styles.renderItemContainer}>
                <Image source={{uri:item.agency.image_url}} style={styles.imageStyle}></Image>
                <Text style={{fontSize:20,color:"blue"}}>{item.agency.name}</Text>
                <Text>DESCRIPTION</Text>
                <Text style={{fontSize:15,color:"white"}}>{item.agency.description}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{alignItems:"center",flex:1}}>
                <ImageBackground source={require("../assets/stars.gif")}>
                <View style={{flex:0.25}}>
                 <Text style={{fontSize:30,fontWeight:"2%",color:"white"}}>SpaceCraft</Text>
                </View>
               <View style={{flex:0.75,backgroundColor:"purple"}}>
                   <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.state.aircraft}
                    renderItem={this.renderItem}
                   />
               </View>
               </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    renderItemContainer:{
        marginBottom:20,
        elevation:10,
      
    },
    imageStyle:{
        width:"100%",
        height:200,
        marginTop:15,
        marginBottom:15
    }

})
