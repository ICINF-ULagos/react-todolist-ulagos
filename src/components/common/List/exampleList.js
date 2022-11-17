
function exampleList({ data, label = "description" }) {

    return (
        <div style={{ color: "green" }}>
            {
                data.map(function (item, index) {
                    return (
                        <div key={index}>example {item[label]}</div>
                    )
                })
            }
        </div>
    )
}

export default exampleList;