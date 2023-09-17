import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error("useWorkoutContext mush be used inside a WorkoutsContextProvider")
    }

    return context
}