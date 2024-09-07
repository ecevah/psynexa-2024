import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import ProfileContentContant from "../components/ProfileContentContant";
import SvgKey from "../components/icons/Key";
import SvgShild from "../components/icons/Shild";
import SvgMessage from "../components/icons/Message";
import SvgCall from "../components/icons/Call";
import SvgInfo from "../components/icons/Info";
import SvgExit from "../components/icons/Exit";
import SvgSettingsWheel from "../components/icons/SettingsWheel";
import SvgInfoSquare from "../components/icons/InfoSquare";
import { AVATAR_BUSRA } from "../constants/constant";

const ProfileScreen = () => {
  const { width } = Dimensions.get("window");

  const settingsArray = [
    {
      icon: <SvgSettingsWheel />,
      title: "Hesap Ayarları",
    },
    {
      icon: <SvgSettingsWheel />,
      title: "NexaBot Ayarları",
    },
    {
      icon: <SvgKey />,
      title: "Güvenlik",
    },
    {
      icon: <SvgShild />,
      title: "Gizlilik Politikaları",
    },
    {
      icon: <SvgInfoSquare />,
      title: "Destek",
    },
  ];

  const notificationArray = [
    {
      icon: <SvgMessage />,
      title: "E-Mail Bildirimi",
    },
    {
      icon: <SvgCall />,
      title: "Telefon Bildirimi",
    },
  ];

  const otherArray = [
    {
      icon: <SvgInfo />,
      title: "Hakkımızda",
    },
    {
      icon: <SvgExit />,
      title: "Çıkış Yap",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profil</Text>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 24,
          }}
        >
          <Image
            source={AVATAR_BUSRA}
            style={{ width: 48, height: 48, borderRadius: 24, marginRight: 8 }}
          />
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={{ color: "#0D1717", fontSize: 24, fontWeight: "600" }}>
              Fatmanur Deniz
            </Text>
            <Text style={{ color: "#0D1717", fontSize: 12, fontWeight: "400" }}>
              fatmanurdeniz@gmail.com
            </Text>
          </View>
        </View>
        <ProfileContentContant title="Ayarlar" data={settingsArray} />
        <ProfileContentContant
          title="Bildirimler"
          data={notificationArray}
          isSwitch={true}
        />
        <ProfileContentContant title="Diğer" data={otherArray} />
        <View style={{ height: 80 }}></View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerText: {
    color: "#0B1215",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 25,
  },
});
