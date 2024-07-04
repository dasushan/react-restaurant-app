import classes from "./MealItem.module.css"

const MealItem = (props) => {
    return(
        <section className={classes.mealitem}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div>${props.price}</div>
        </section>
            
        
    )
}

export default MealItem