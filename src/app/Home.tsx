import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteList } from "@/routes/StackRoutes"

type Props = NativeStackScreenProps<StackRouteList,"home">

export function Home({navigation} : Props){

    return(
        <View style={{flex: 1, padding: 32}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product")}/>
            </Header>
        </View>
    )
}