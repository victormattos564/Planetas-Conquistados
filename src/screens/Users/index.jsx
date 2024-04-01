import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
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

  const [editingPlanetName, setEditingPlanetName] = useState("");
  const [namePlanet, setNamePlanet] = useState("");
  const [dataDeConquista, setDataDeConquista] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [recursosNaturais, setRecursosNaturais] = useState("");
  const [numeroDeAssentamentosHumanos, setNumeroDeAssentamentosHumanos] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [comunicacao, setComunicacao] = useState("");
  const [governanteDoPlaneta, setGovernanteDoPlaneta] = useState("");
  const [allPlanets, setAllPlanets] = useState([]);

  const createPlanet = () => {
    if (
      !namePlanet ||
      !dataDeConquista ||
      !color1 ||
      !color2 ||
      !populacao ||
      !recursosNaturais ||
      !numeroDeAssentamentosHumanos ||
      !localizacao ||
      !comunicacao ||
      !governanteDoPlaneta
    ) {
      return;
    }

    if (editingPlanetName) {
      const planetIndex = allPlanets.findIndex((planet) => planet.namePlanet === editingPlanetName);
      const updatedPlanets = [...allPlanets];
      updatedPlanets[planetIndex] = {
        ...updatedPlanets[planetIndex],
        namePlanet,
        dataDeConquista,
        color1,
        color2,
        populacao,
        recursosNaturais,
        numeroDeAssentamentosHumanos,
        localizacao,
        comunicacao,
        governanteDoPlaneta,
      };
      setAllPlanets(updatedPlanets);
      setEditingPlanetName("");
    } else {
      const planet = new Planet(
       
        namePlanet,
        dataDeConquista,
        color1,
        color2,
        populacao,
        recursosNaturais,
        numeroDeAssentamentosHumanos,
        localizacao,
        comunicacao,
        governanteDoPlaneta,
        planetId++
      );
      planetsList.add(planet);
      setAllPlanets(planetsList.getAll());
    }
    clearInputs(); 
  };

  const deletePlanet = (name) => {
    planetsList.remove(name);
    setAllPlanets(planetsList.getAll());
  };

  const editPlanet = (name) => {
    const planetToEdit = allPlanets.find((planet) => planet.namePlanet === name);
    if (planetToEdit) {
      setNamePlanet(planetToEdit.namePlanet);
      setDataDeConquista(planetToEdit.dataDeConquista);
      setColor1(planetToEdit.color1);
      setColor2(planetToEdit.color2);
      setPopulacao(planetToEdit.populacao);
      setRecursosNaturais(planetToEdit.recursosNaturais);
      setNumeroDeAssentamentosHumanos(planetToEdit.numeroDeAssentamentosHumanos);
      setLocalizacao(planetToEdit.localizacao);
      setComunicacao(planetToEdit.comunicacao);
      setGovernanteDoPlaneta(planetToEdit.governanteDoPlaneta);
      setEditingPlanetName(name);
    }
  };

  const clearInputs = () => {
    setNamePlanet("");
    setDataDeConquista("");
    setColor1("");
    setColor2("");
    setPopulacao("");
    setRecursosNaturais("");
    setNumeroDeAssentamentosHumanos("");
    setLocalizacao("");
    setComunicacao("");
    setGovernanteDoPlaneta("");
  };

  return (
    <View style={styles.container}>
      <Title title="Criar Planeta" />
      <Image style={styles.background} source={require("../../../assets/capa.jpg")} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Planeta"
          value={namePlanet}
          onChangeText={setNamePlanet}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Conquista"
          value={dataDeConquista}
          onChangeText={setDataDeConquista}
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
          value={populacao}
          onChangeText={setPopulacao}
          keyboardType="numeric"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Recursos Naturais"
          value={recursosNaturais}
          onChangeText={setRecursosNaturais}
          placeholderTextColor={styles.placeholder.color}
        />

        <TextInput
          style={styles.input}
          placeholder="Numero de Assentamentos Humanos"
          value={numeroDeAssentamentosHumanos}
          onChangeText={setNumeroDeAssentamentosHumanos}
          keyboardType="numeric"
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Localização"
          value={localizacao}
          onChangeText={setLocalizacao}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Comunicação"
          value={comunicacao}
          onChangeText={setComunicacao}
          placeholderTextColor={styles.placeholder.color}
        />
        <TextInput
          style={styles.input}
          placeholder="Governante do Planeta"
          value={governanteDoPlaneta}
          onChangeText={setGovernanteDoPlaneta}
          placeholderTextColor={styles.placeholder.color}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={createPlanet}>
        <Text>{editingPlanetName ? "Atualizar Planeta🧹" : "Criar Planeta🪐"}</Text>
      </TouchableOpacity>

      <View style={styles.listPlanets}>
        {allPlanets.map((planet) => (
          <View key={planet.namePlanet} style={styles.planet}>
            <Text>{planet.namePlanet}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Planets", { data: planet });
              }}
            >
              <Text>Details</Text>
            </TouchableOpacity>
            <FaTrash onClick={() => deletePlanet(planet.namePlanet)} />
            <FaPen onClick={() => editPlanet(planet.namePlanet)} />
          </View>
        ))}
      </View>
    </View>
  );
}
