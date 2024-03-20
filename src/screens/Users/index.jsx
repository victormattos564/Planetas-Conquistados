import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

import User from "../../models/user/User";
import UsersRepository from "../../models/user/UserRepository";
import { useNavigation } from "@react-navigation/native";

const usersList = new UsersRepository();

let userId = 1; 

export default function Users() {
  const navigation = useNavigation();

  const [planet, setPlanet] = useState("");
  const [conquista, setConquista] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [population, setPopulation] = useState("");
  const [location, setLocation] = useState("");
  const [communication, setCommunication] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const createUser = () => {
    const newUser = new User(planet, population, location, communication, conquista, primaryColor, secondaryColor, userId++)

    usersList.add(newUser);
    setAllUsers(usersList.getAll());

    clearInputs();

    return newUser;
  };

  const clearInputs = () => {
    setPlanet("");
    setConquista("");
    setPrimaryColor("");
    setSecondaryColor("");
    setPopulation("");
    setLocation("");
    setCommunication("");
  };

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <View>
        <TextInput
          placeholder="Digite o Nome do Planeta"
          style={styles.userInput}
          onChangeText={setPlanet}
          value={planet}
        />
        <TextInput
          placeholder="Digite a Data da Conquista"
          style={styles.userInput}
          onChangeText={setConquista}
          value={conquista}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Digite a Cor Primaria do Planeta"
          style={styles.userInput}
          onChangeText={setPrimaryColor}
          value={primaryColor}
        />
        <TextInput
          placeholder="Digite a Cor Secundaria do Planeta"
          style={styles.userInput}
          onChangeText={setSecondaryColor}
          value={secondaryColor}
        />
        <TextInput
          placeholder="Digite a População do Planeta"
          style={styles.userInput}
          onChangeText={setPopulation}
          value={population}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Digite a Localização do Planeta"
          style={styles.userInput}
          onChangeText={setLocation}
          value={location}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Digite a Comunicação do Planeta"
          style={styles.userInput}
          onChangeText={setCommunication}
          value={communication}
        />

        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text>Criar Usuário</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allUsers.length > 0 ? (
          allUsers.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => navigation.navigate("Profile", { data: user })}
            >
              <Text>{user.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
