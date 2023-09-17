import { useEffect} from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect( () => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            //json is the full array of workouts currently in the database 
            const json = await response.json()

            //set dispatch method to update global context
            if (response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>

            <WorkoutForm />
        </div>
    )
}

export default Home