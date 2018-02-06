

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimentions,
  AppRegistry,
  FlatList,
  TouchableOpacity 
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


class ApiImage extends Component {
  render(){
    //const { params } = this.props.navigation.state;
    {testid = 'CmRaAAAAiYo3OcKit9CRwhJWlb2XxqmHv4p8S6SOge3dkwipu0Ybeg6udPYXM33MiyFiti59nKPlcqZcQi1USkhd1S3uvAWORrRnrzZ-XRTb8ZC6zReSlbUOTCNPcVL9Ey1YoToDEhBvHrxSlGMnDNIT3wLkHx9TGhSSuHCtKXoLIhh4TzEo4E3qDoEhVg';}
    {adr = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + this.props.id + '&key=AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4';}
    return(
            <Image
          style={styles.image}
          source={{uri: adr}}
        />);
  }
}

class TestApi extends Component {
  state = {
      data: ''
    };
    componentWillMount(){
      this.fetchData();
    }
    fetchData = async () => {
      const res = await fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4');
      const json = await res.json().then((resJson) => {return resJson.result.photos;});

      this.setState({data: json});
    }
  render() {



    return (
      <View style={styles.container}>
      
        <FlatList 
         numColumns={2}
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            
              
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {img: item.photo_reference,})}>
          <ApiImage id={item.photo_reference}></ApiImage>
        </TouchableOpacity>

            }
        />
      </View>
      );
  
}
}

class Detail extends Component {

  
  render() {
    const { params } = this.props.navigation.state;
    const img = params ? params.img : null;
    {detailsource = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference='+img+'&key=AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4';}
    return (
      <View style={styles.container}>
      <Image
          style={styles.image}
          source={{uri: detailsource}}
        />
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#FF99FF',

  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width:180,
    height: 200,
    borderRadius: 10,
    margin: 10,
    flex:1,
    flexDirection: 'row',


  },
  imagedetail: {
    flex:1,
  },


});

/*const Navigation = StackNavigator({
  home: {screen: Gallery},
  detail: {screen: Detail}
});*/


const RootStack = StackNavigator(
  {
    Home: {
      screen: TestApi,
    },
    Detail: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('Test2', ()=>Navigation);