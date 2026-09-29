import { Link } from 'react-router-dom'
import { categorias } from '../data/categorias'

export function Categorias(){
    return (
        <main>
            <h1>Categorias</h1>
            {categorias.map((categoria) => (
                <article key={categoria.caminho}>
                    <h2>{categoria.nome}</h2>
                    <Link to={`/categorias/${categoria.caminho}`}> Ver Detalhes </Link>
                </article>
            ))}
        </main>
    )
}
