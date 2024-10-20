import { ThemedText } from "./ThemedText";
import { useCustomSelector } from "@/store/storeHooks";
import { StyleSheet } from "react-native";

export default function TextComponent({styled}: {styled?: boolean}) {
  const textContent = useCustomSelector((state) => state.text.content);

  return <ThemedText style={styled ? style.text : undefined}>{textContent}</ThemedText>;
}

const style = StyleSheet.create({
    text: {
        fontSize: 22,
        color: "skyblue",
        textDecorationLine: 'underline'
    }
})
