import { Dimensions, Image, Text, View } from "react-native";
import Colors from "../shared/Colors";
import Button from "../components/shared/Button";
import { useRouter } from "expo-router";


export default function Index() {
   
   const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
     <Image
     source={require("../assets/images/landing.png")}
     style={
      {
        width: "100%",
        height: Dimensions.get("screen").height,
        resizeMode: "contain",
      }
     }
     />
     <View style={{
      position: "absolute",
      height : Dimensions.get("screen").height,
      width: "100%",
      backgroundColor: "#0707077e",
      display: "flex",
      alignItems: "center",
      padding: 20,
     }}>
      <Image
      source={require("../assets/images/logo.png")}
      style={{
        width:150,
        height: 150,
        marginTop: 100,
      }}
      />
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.WHITE,
      }}
      >
        AI Diet Planner
      </Text>
      <Text style={{
        textAlign: "center",
        marginHorizontal: 20,
        fontSize: 20,
        color: Colors.WHITE,
        marginTop: 15,
        opacity: 0.8,
      }}>
        Craft Delicious , Healthy meal plans tailored just for you. Acheive your goals with ease!
      </Text>
        
     </View>

        <View style={
          {
            position: "absolute",
            width: "100%",
            bottom: 25,
            padding: 20,
          }
        }>
           <Button title={'Get Started'} onPress={()=> router.push('/auth/SignIn')} />
        </View>
    </View>
  );
}
