import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;
  const Img = data.Img;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <View style={styles.user}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.line} />
        <View style={styles.flex}>
          <Image style={styles.Img} source={Img} />
          <View>
            <Text style={styles.text}>{data.email}</Text>
            <Text style={styles.text}>{data.phone}</Text>
            <Text style={styles.text}>{data.address.city}</Text>
            <Text style={styles.text}>{data.address.state}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}