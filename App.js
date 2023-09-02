import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from "react-native";

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
          <Image 
          style={styles.banner}
          source={require("./assets/img/bg.jpg")}
           />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Qué hacer en Paris</Text>
          <ScrollView 
          horizontal
          >
            <View>
            <Image 
          style={styles.city}
          source={require("./assets/img/actividad1.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.city}
          source={require("./assets/img/actividad2.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.city}
          source={require("./assets/img/actividad3.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.city}
          source={require("./assets/img/actividad4.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.city}
          source={require("./assets/img/actividad5.jpg")}
           />
            </View>
          </ScrollView>

          <Text style={styles.title}>Los mejores alojamientos</Text>
          <View>
          <View>
            <Image 
          style={styles.mejores}
          source={require("./assets/img/mejores1.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.mejores}
          source={require("./assets/img/mejores2.jpg")}
           />
            </View>
            <View>
            <Image 
          style={styles.mejores}
          source={require("./assets/img/mejores3.jpg")}
           />
            </View>
            
          </View>
          <Text style={styles.title}>Hospedajes en los LA</Text>
          <View style={styles.list}>

          <View style={styles.itemList}>
            <Image 
          style={styles.hospedaje}
          source={require("./assets/img/hospedaje1.jpg")}
           />
           
            </View>
            <View style={styles.itemList}>
            <Image 
          style={styles.hospedaje}
          source={require("./assets/img/hospedaje2.jpg")}
           />
            </View>
            <View style={styles.itemList}>
            <Image 
          style={styles.hospedaje}
          source={require("./assets/img/hospedaje3.jpg")}
           />
            </View>
            <View style={styles.itemList}>
            <Image 
          style={styles.hospedaje}
          source={require("./assets/img/hospedaje4.jpg")}
           />
            </View>

          </View>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10
  },

  banner:{
    height:250,
    flex:1
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:20,
  },
  city:{
    width:250,
    height:300,
    marginRight:10,
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5,

  },
  list:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  itemList:{
    flexBasis:'49%'
  },

});

export default App;
