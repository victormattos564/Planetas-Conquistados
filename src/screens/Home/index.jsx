import { View, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <View>
        <Text style={styles.text}>Seja Bem-vindo Criador de Planetas!</Text>
        <TouchButton title="Crie Seu Planeta Viajante!!" route="Users" />
      </View>
    </View>
  );
}