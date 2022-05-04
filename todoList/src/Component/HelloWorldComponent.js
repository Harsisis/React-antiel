import '../HelloWorld.css'

function HelloWorldComponent() {
    const href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    return (
        <a className="buttonStyle" href={href}>
                <h2> click me</h2>
        </a>
    );
}

export default HelloWorldComponent;