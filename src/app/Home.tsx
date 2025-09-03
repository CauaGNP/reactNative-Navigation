import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { View } from "react-native";
import { StackRouteProps } from "@/routes/StackRoutes";
import { BottomRouteProps } from "@/routes/BottomRoutes";


export function Home({navigation} : BottomRouteProps<"home">){

    return(
        <View style={{flex: 1, padding: 32}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product",{ id: "123" })}/>
            </Header>
        </View>
    )
}