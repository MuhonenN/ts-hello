import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Dashboard } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="home" componen={Home} />
            <Screen name="dashboard" componen={Dashboard} />
        </Navigator>
    );
};

export default AppStack;
