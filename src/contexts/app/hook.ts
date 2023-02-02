import { useContext } from "react"
import { AppContext } from "."
import { Actions } from "./types";

export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext);

    return {
        ...state,
        setBackground: (background: string) => {
            dispatch({
                type: Actions.SET_BACKGROUND,
                payload: { background }
            })
        }
    }
}