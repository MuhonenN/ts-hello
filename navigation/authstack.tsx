import React, { FC } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { SignUp, Login } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="signup" componen={SignUp} />
            <Screen name="login" componen={Login} />
        </Navigator>
    );
};

export default AuthStack;
