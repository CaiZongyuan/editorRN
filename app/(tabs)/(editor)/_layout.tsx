import { Stack } from "expo-router";

const EditorLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Editor" }} />
    </Stack>
  );
};

export default EditorLayout;
