import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
         <Image style={styles.background} source={require("../../../assets/capa.jpg")} />
      <Title style={styles.title} title="Planets" />

      <View style={styles.planet}>
        <Text style={styles.planetName}>Nome do Planeta:{data.namePlanet}</Text>
        <Text style={styles.detail}>
          
          Data de Conquista: {data.dataDeConquista}
        </Text>
        <Text style={styles.detail}>Populaçao: {data.populacao}</Text>
        <Text style={styles.detail}>
          Recursos Naturais: {data.recursosNaturais}
        </Text>
        <Text style={styles.detail}>
          Numero De Assentos Humanos: {data.numeroDeAssentamentosHumanos}
        </Text>
        <Text style={styles.detail}>Localizacão: {data.localizacao}</Text>
        <Text style={styles.detail}>Comunicação: {data.comunicacao}</Text>
        <Text style={styles.detail}>Governante Do Planeta: {data.governanteDoPlaneta}</Text>
      </View>
    </View>
  );
}