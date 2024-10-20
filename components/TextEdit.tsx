import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCustomDispatch, useCustomSelector } from "@/store/storeHooks";
import { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

import { textSliceActions } from "@/store/textSlice";
import { CustomButton } from "./CustomButton";

export default function TextEdit() {
    const [inputText, setInputText] = useState("");
    const textContent = useCustomSelector((state) => state.text.content);
    const dispatch = useCustomDispatch();

    const onEditPress = () => {
        if(inputText.length < 1){
            return;
        }

        dispatch(textSliceActions.editText({newText: inputText}))
        setInputText("");
    }

  return (
    <ThemedView>
      <ThemedText style={styles.title} type="title">
        Input desired text:
      </ThemedText>
      <TextInput style={styles.textInput} value={inputText} placeholder={textContent} placeholderTextColor={"gray"} onChangeText={setInputText} />
        <CustomButton title="EDIT" disabled={inputText.length < 1} onPress={onEditPress} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginVertical: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5
  },
  editButton: {
    marginTop: 5,
  }
});
