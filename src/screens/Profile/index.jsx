import { View, Text, ScrollView, Image } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

import Sobre from '../../data/Profile'

export default function Profile() {
  return (
    <View style={styles.div1}>
      <ScrollView>
        {Sobre ? (

          Sobre.map((item, index) => (
            <View key={index} style={styles.divtudo}>
              <Image source={item.img} style={styles.imagem} />
              <Text style={styles.title1}>{item.name}</Text>
              <Text style={styles.title2}>{item.age}</Text>
              <Text style={styles.title3}>{item.curso}</Text>
              <Text style={styles.title4}>{item.email}</Text>
              <Text style={styles.title5}>{item.descricao}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.title6}>Nenhum Perfil cadastrado</Text>
        )}

      </ScrollView>


    </View>
  )
}