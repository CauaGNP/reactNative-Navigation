import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";

export type DrawerRouteList = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRouteProps<T extends keyof DrawerRouteList> =
  DrawerScreenProps<DrawerRouteList, T>;

const Drawer = createDrawerNavigator<DrawerRouteList>();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="product" component={Product} />
    </Drawer.Navigator>
  );
}
