
import { GenericList } from '../'

function Column({colTitle , ...props }) {
    return (
        <div className="column">
            <header className="columnHeading"> 
                
                <h1 className='fontcolumn'>
                    {colTitle}
                </h1>
            </header>
            <div className="items">
            {
                <GenericList {...props}/>
                /*

                itemList.map((i, index) => (
                    <Item
                        key={index}
                        data={i} 
                        color={color}
                    />
                ))*/
            }
            </div>
        </div>
    )
}

export default Column;