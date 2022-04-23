const ItemListContainer = (prop) =>{

    const textStyle = "bg-gradient-to-r from-sky-500 to-indigo-500 p-4 m-2 text-center text-slate-100 font-medium rounded-xl";

    return (
        <div className={textStyle}>
            {prop.greetings}
        </div>
    )

}

export default ItemListContainer;