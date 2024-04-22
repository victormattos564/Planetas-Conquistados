import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <Image style={styles.background} source={require("../../../assets/capa.jpg")} />
      <View>
        <Text style={styles.text}>Bem-vindo, Viajante!</Text>
        <Text style={styles.text}>Você está logado como Conquistador de Planetas</Text>
        <Text style={styles.text}>Email: ConquistadorPlanet@gmail.com</Text>
        <Text style={styles.text}>Data de Registro: Hoje </Text>
        <Text style={styles.text}>Nível de Acesso: {user.level}</Text>
       
      </View>
      <View>
        
        <TouchButton title="Crie Seu Planeta Viajante!! 🪐🪐" styles={styles.background} route="Users" />
        
      </View>
    </View>
  );
}
