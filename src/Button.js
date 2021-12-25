export function coba() {
    return alert('ok')
}

function Button(props) {
    return <button className="btn" onClick={coba}>{props.children}</button>
}

export default Button;