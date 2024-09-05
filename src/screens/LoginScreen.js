import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgNexaMiniLogoBlue from "../components/images/NexaMiniLogoBlue";
import SvgSee from "../components/icons/See";
import SvgNotSee from "../components/icons/NotSee";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <SvgNexaMiniLogoBlue style={{ marginBottom: 30 }} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Şifre</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.inputField}
            value={password}
            onChangeText={setPassword}
            placeholder="Şifre"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.visibilityButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <SvgNotSee /> : <SvgSee />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PlayAudioScreen")}
        >
          <Text style={styles.forgotPassword}>Şifremi Unuttum?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text style={styles.signUpText}>Hesabınız yok mu? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TestDetailScreen")}
          >
            <Text style={styles.signUpButtonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  label: {
    textAlign: "left",
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
  inputField: {
    width: "100%",
    paddingHorizontal: 15,
    height: 56,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#C7CCD4",
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "flex-end",
    marginTop: 10,
  },
  forgotPassword: {
    color: "#0081C9",
    marginVertical: 10,
    fontSize: 13,
    fontWeight: "400",
  },
  loginButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#0A6EBD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  visibilityButton: {
    position: "absolute",
    right: 30,
    height: 30,
    top: 22,
    right: 16,
  },
  signUpText: {
    color: "#0B1215",
    fontSize: 13,
    fontWeight: "400",
  },
  signUpButtonText: {
    color: "#0081C9",
    fontSize: 13,
    fontWeight: "400",
  },
});
