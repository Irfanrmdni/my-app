// ? membuat component baru 
function Welcome() {
    return <h1>Welcome to reactJS 1</h1>
}

// ? ketika membuat component lagi maka kita harus export lagi
export function Welcome2() {
    return <h2>Welcome to reactJS 2</h2>
}

export function Welcome3() {
    return <h3>Welcome to reactJS 3</h3>
}

export function WelcomeH2(props) {
    // return <h1>{props.text}</h1>

    // ? ketika ingin menggunakan tag penutup dalam pemanggilan nya maka gunakan children
    return <h1>{props.children}</h1>
}

// ? kita juga bisa meng-eksport selain dari function. misal font, variabel dll.

// ? ini eksport default dari component welcome
export default Welcome;