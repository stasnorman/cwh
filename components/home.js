import { View, Text, Button, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "../configApp/styleMain";
import { styleHeader } from "../configApp/style";

export function HomeScreen({ navigation }) {
    return (
      <View >
          <View><Text style={styleHeader.beautyStyleLogo}> CWH </Text></View>
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
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }