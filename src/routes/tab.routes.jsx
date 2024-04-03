import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Planets from "../screens/Planets";
import Users from "../screens/Users";
import { user } from "../data/Profile";
import { NullsPlanet } from "../data/NullsPlanets";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#8899f4" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#8899f4" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Planets"
        initialParams={{ data: Planets }}
        component={Planets}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="globe"
              size={24}
              color={focused ? "#8899f4" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Planetas",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#8899f4" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Usuários",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;