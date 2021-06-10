import { StyleSheet } from "react-native";
import { colors } from "../../style/color";

export const styles = StyleSheet.create({
    setting__container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    setting__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
})