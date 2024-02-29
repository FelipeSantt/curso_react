import Item from './Item'


function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" lancamento={1965}/>
                <Item marca = "Fiat" lancamento={1985}/>
                <Item marca = "Audi" lancamento={1966}/>
                <Item/>
            </ul>
        </>
    )
}

export default List