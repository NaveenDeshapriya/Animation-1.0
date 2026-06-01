import React, { useRef } from "react";
import { Animated, Easing } from "react-native";
import { withDelay, withTiming } from "react-native-reanimated";

type animationProps = {

    color?: string[],// color is not required change 
    size: number,
    duration: number,
    gap: number,

}

const DotBounce = (animationStyle: animationProps) => {


    const animation = useRef(new Animated.Value(0)).current;

    Animated.loop(

        Animated.sequence([

            Animated.timing(animation, {

                toValue: 1.5,
                useNativeDriver: true,
                duration: animationStyle.duration,
                easing: Easing.bounce,
                delay: 3,

            }),

            Animated.timing(animation, {

                toValue: 1,
                useNativeDriver: true,
                duration: animationStyle.duration,
                easing: Easing.linear,
                delay: 2,

            }),

        ])

    ).start();




    return (


//parent
        <Animated.View className={`flex-1 flex-row justify-center items-center`} style={{ gap: animationStyle.gap }}>

            {
               // render key dublicate that prevent need
                animationStyle.color?.map((v, i) => ( 
                   //child
                   //i -->map values "id" that dublicates rendering
                    <Animated.View key={i.toString()} style={{ backgroundColor: animationStyle.color ? v : "black", width: animationStyle.size, height: animationStyle.size, transform: [{ scale: animation }], opacity: animation }} className={"rounded-full"}></Animated.View>

                ))

            }


        </Animated.View>
    );

}

export default DotBounce;