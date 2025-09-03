import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteList } from "@/routes/StackRoutes"

type Props = NativeStackScreenProps<StackRouteList,"product">
export function Product({ navigation } : Props){

    return(
        <View style={{flex: 1, padding: 32}}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
                <Title>Product</Title>
            </Header>
        </View>
    )
}