import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type StackRouteList = {
    home: undefined,
    product: undefined | {id : string}
}

export type StackRouteProps<T extends keyof StackRouteList> = NativeStackScreenProps<StackRouteList, T>

const Stack = createNativeStackNavigator<StackRouteList>()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="product" component={Product}/>
        </Stack.Navigator>
    )
}