import SimpleList from './simpleList'
import ExampleList from './exampleList'


function genericList({ variant = "simple", ...props }) {
    if (variant === "simple") {
        return (
            <SimpleList {...props} />
        )
    } else if (variant === "example") {
        return (
            <ExampleList {...props} />
        )
    }
}

export default genericList;