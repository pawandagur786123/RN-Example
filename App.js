import React from 'react';
import { View,Text, FlatList, StyleSheet, ScrollView } from 'react-native';



class App extends React.Component{
  state = {
    data : []
  }
  getMoviesFromApiAsync = async () => {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?postId=1'
      );
      let json = await response.json();
      return(
        this.setState({data:json})
      )
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount(){
    this.getMoviesFromApiAsync()
  }

  renderItem(item){
    return(
      <View style={styles.card}>
            <Text style={{ color: 'black', fontSize: 20, margin: 1 }}>{item.item.name}</Text>
            <Text style={{ color: 'black', margin: 6 }}>{item.item.email}</Text>
            <Text style={{ color: 'black', margin: 6 }}>{item.item.body}</Text>
      </View>
    )
  }

  render(){
    var points = new Array(100);
      for (var i = 0; i < 100; i++) {
        if((i+1) % 5 == 0){
          points[i] = "abc"
        } else{
          points[i] = i + 1;   
        } 
      }
    return(
      <ScrollView>
        <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
          {points.map((p,i)=>{
              return(
                <Text style={{padding:2, }}>{p}</Text>
              )
              }
            )
          }
      </View>
      <FlatList
        data={this.state.data}
        renderItem={(item) => this.renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    flex : 1,
    margin: 10,
    padding: 10
  }
});
export default App;