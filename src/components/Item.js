import "./Item.css"

function Item(props){

    const itemName = props.itemName;

    return(
    <div>
        <p className = "item">
            {itemName}
        </p>
    </div>
    )    
}

export default Item;