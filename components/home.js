import { View, Text, Button, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "../configApp/styleMain";
import { styleHeader } from "../configApp/style";
import { TextInput } from "react-native-paper";

export function HomeScreen({ navigation }) {
    return (
      <View >
        <View style={{ backgroundColor:'#000', height:20, color:'#000'}}/>
        <View><Text style={styleHeader.beautyStyleLogo}> CWH </Text></View>
        <Text style={styleHeader.headerText}>Login</Text>
        <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <Image
                source={{
                uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
                }}
                style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>CONTINUE WITH APPLE</Text>
        </TouchableOpacity>
                        
            <Text style={styles.styleOR}>OR</Text>

            <TextInput 
                style={styles.txbInputDesight}
                placeholder="Email"
                keyboardType='email-address'
                name='txtEmail'
            />
            <TextInput 
                style={styles.txbInputDesight}
                placeholder="Password"
                keyboardType='default'
            />
         <TouchableOpacity
            style={styles.logInDesight}
            activeOpacity={0.5}
            onPress={
                () => {
                            navigation.navigate('MainScreen')
                            
                       
                    } 
                }>            
            <Text style={styles.txtInBtnLogIn}>Log In</Text>
        </TouchableOpacity>
        
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }