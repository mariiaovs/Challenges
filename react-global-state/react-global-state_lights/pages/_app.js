import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  let isDimmed = lights.filter((light) => light.isOn).length === 0;
  let isAllLightsOn = lights.filter((light) => light.isOn).length === 8;

  function toggleLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function toggleLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function toggleLight(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  console.log(isDimmed);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        toggleLightsOn={toggleLightsOn}
        toggleLightsOff={toggleLightsOff}
        isAllLightsOn={isAllLightsOn}
      />
    </Layout>
  );
}
