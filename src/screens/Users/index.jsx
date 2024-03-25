import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FaTrash, FaPen } from "react-icons/fa";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

import Planet from "../../models/planet/Planet.js";
import PlanetRepository from "../../models/planet/PlanetRepository";
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetRepository();

let planetId = 1;

export default function Users() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [population, setPopulation] = useState("");
  const [naturalResources, setNaturalResources] = useState("");
  const [numberHumanSettlements, setNumberHumanSettlements] = useState("");
  const [location, setLocation] = useState("");
  const [communication, setCommunication] = useState("");
  const [planetRuler, setPlanetRuler] = useState("");

  const [allPlanets, setAllPlanets] = useState([]);

  const createPlanet = () => {
    const planet = new Planet(
      planetId++,
      name,
      date,
      color1,
      color2,
      population,
      naturalResources,
      numberHumanSettlements,
      location,
      communication,
      planetRuler
    );
    planetsList.add(planet);
    setAllPlanets(planetsList.getAll());

    clearInputs();
  };

  const deletePlanet = (id) => {
    planetsList.remove(id);
    setAllPlanets(planetsList.getAll());
  };

  const clearInputs = () => {
    setName("");
    setDate("");
    setColor1("");
    setColor2("");
    setPopulation("");
    setNaturalResources("");
    setNumberHumanSettlements("");
    setLocation("");
    setCommunication("");
    setPlanetRuler("");
  };

  return (
    <View style={styles.container}>
      <Title title="Create Planet" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Planeta"
          value={name}
          onChangeText={setName}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Conquista"
          value={date}
          onChangeText={setDate}
          keyboardType="numeric"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Color Primária"
          value={color1}
          onChangeText={setColor1}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Color Secundária"
          value={color2}
          onChangeText={setColor2}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="População"
          value={population}
          onChangeText={setPopulation}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Recursos Naturais"
          value={naturalResources}
          onChangeText={setNaturalResources}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de assentamentos humanos"
          value={numberHumanSettlements}
          onChangeText={setNumberHumanSettlements}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Localização"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Comunicação"
          value={communication}
          onChangeText={setCommunication}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Governante do Planeta"
          value={planetRuler}
          onChangeText={setPlanetRuler}
          placeholderTextColor={styles.placeholder.color}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={createPlanet}>
        <Text>Create Planet</Text>
      </TouchableOpacity>

      <View style={styles.listPlanets}>
        {allPlanets.map((planet) => (
          <View key={planet.id} style={styles.planet}>
            <Text>{planet.name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Planets", { data: planet });
              }}
            >
              <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deletePlanet(planet.id)}>
              <FaTrash />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}