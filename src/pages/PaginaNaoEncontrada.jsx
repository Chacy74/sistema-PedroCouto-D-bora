import { Link } from 'react-router-dom'

export function PaginaNaoEncontrada(){
    return (
        <main>
            <h1>404</h1>
            <p>A página informada não existe.</p>
            <Link to="/">Voltar ao início</Link>
        </main>
    )
}
