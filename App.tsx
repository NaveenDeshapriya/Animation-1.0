import { useRef } from "react";
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated, Easing } from "react-native";
import DotBounce from "./components/dotBounce";


export default function App() {


  return (
    <SafeAreaView className="flex-1 items-center p-5">


      <DotBounce color={["#c026d3","green","orange"]}  duration={1800}  size={32} gap={40} /> 

{/* // reused animation create */}

    </SafeAreaView>
  );
}


