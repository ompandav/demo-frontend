import './ItemDate.css'

function ItemDate(props){
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return(
        <div className = "date">
            <span className = "dateValue">{day}</span>
            <span className = "dateValue">{month}</span>
            <span className = "dateValue">{year}</span>
        </div>
    )
}

export default ItemDate;