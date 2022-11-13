import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";
import Constants from "expo-constants";


export function HomeScreen({navigation}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onLoginHandler = (login) => {
    setLogin(login);
  };

  const onPasswordHandler = (password) => {
    setPassword(password);
  };

  const onRoleHandler = (role_id) => {
    setRole(role_id);
  };

  const onSubmitFormHandler = async (event) => {
    if (!login.trim() || !password.trim()) {
      alert("Некорректные данные ввода Имени и Емейла");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`https://test-api.easy4.ru/create-user`, {
   
          login,
          password,
          role_id: "Клиент",
             
      });
      if (response.status === 200) {
        navigation.reset(
            {
                index: 0,
                routes: [{name: 'MainScreen'}]
            });
        setIsLoading(false);
        setLogin('');
        setPassword('');
        setRole('');
      } else {
        throw new Error("Данные невозможно получить");
      }
    } catch (error) {
      alert("Данные невозможно получить");
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}>Отправка данных </Text>
          ) : (
            <Text style={styles.formHeading}>Создать нового пользователя</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Введите логин"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={login}
            editable={!isLoading}
            onChangeText={onLoginHandler}
          />
        </View>

        <View style={styles.wrapper}>
          <TextInput
            placeholder="Введите пароль"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={password}
            editable={!isLoading}
            onChangeText={onPasswordHandler}
          />
        </View>

        <View>
          <Button
            title="Отправить"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#ffffff",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});
