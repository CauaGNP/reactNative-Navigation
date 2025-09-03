import { Text, TextProps } from "react-native";

export default function Title({children, ...rest} : TextProps){
    return(
        <Text style={{fontSize: 22, fontWeight: "bold"}} {...rest}>
            {children}
        </Text>
    )
}