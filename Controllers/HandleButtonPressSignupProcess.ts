import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../firebase'
import { SignupProcessSlice } from '../Redux/SignupProcessSlice';

export const handleButtonPress = async (
    actionType: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    actionPayload: {
        email?: string;
    },
) => {
    //redux
    const dispatch = useDispatch();
    const currentScreen = useSelector(
        //@ts-expect-error
        (state) => state.SignupProcess.currentScreen
    );
    switch (actionType) {
        case "CheckIfEmailAvailable":
            setLoading(true);
            try {
                const response = await firebase
                    .auth()
                    //@ts-expect-error
                    .fetchSignInMethodsForEmail(actionPayload.email);
                // If email is not used everything is ok!
                if (response.length === 0) {
                    dispatch(
                        SignupProcessSlice.actions.setEmailInputErrorStatus({
                            errorCode: 0,
                            errorMessage: "Email is available.",
                        })
                    );
                    // Move to the next screen
                    dispatch(
                        SignupProcessSlice.actions.setCurrentScreen(currentScreen + 1)
                    );
                }
                // If email is used, we dispatch an error status code + error message to display to the user
                else
                    dispatch(
                        SignupProcessSlice.actions.setEmailInputErrorStatus({
                            errorCode: 2,
                            errorMessage: "Email already used.",
                        })
                    );
                // If any error occurs during the process, we dispatch an error code + message
            } catch (error) {
                dispatch(
                    SignupProcessSlice.actions.setEmailInputErrorStatus({
                        errorCode: 1,
                        errorMessage: "Email invalid.",
                    })
                );
                console.log(error);
            }
            setLoading(false);
            break;
        case "Others":
            if (currentScreen === 3)
                dispatch(SignupProcessSlice.actions.setCurrentScreen(5));
            else
                dispatch(
                    SignupProcessSlice.actions.setCurrentScreen(currentScreen + 1)
                );
            break;
    }
};
