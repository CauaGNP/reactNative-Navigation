import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { StackRouteProps } from "@/routes/StackRoutes";
import { View } from "react-native";
import { BottomRouteProps } from "@/routes/BottomRoutes";
//type RouterParamsType = StackRouteProps<"product">;

export function Product({ navigation, route } : BottomRouteProps<"product">){
    // const { params } = useRouter<RouterParamsType["route"]>(); 

    return(
        <View style={{flex: 1, padding: 32}}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
                <Title>Product ${route.params?.id}</Title>
            </Header>
        </View>
    )
}