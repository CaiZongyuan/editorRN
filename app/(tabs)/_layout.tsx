import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="(editor)"
        options={{ title: "Editor", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabLayout;
