import SimpleList from './simpleList'
import ExampleList from './exampleList'
import CardList from './cardList'

function genericList({ variant ,...props }) {
    if (variant === "simple") {
        return (
            <SimpleList {...props} />
        )
    } else if (variant === "example") {
        return (
            <ExampleList {...props} />
        )
    } else if (variant === "card"){
        return (
            <CardList {...props} />
        )
    }
}

export default genericList;