import { Link, useParams } from 'react-router-dom'
import { categorias } from '../data/categorias'

export function CategoriaDetalhes(){
    const { nome } = useParams();

    const categoria = categorias.find(
        (item) => item.caminho === nome
    );

    if(!categoria){
        return (
            <main>
                <h1>Categoria não encontrada</h1>
                <Link to="/categorias">Voltar para categorias</Link>
            </main>
        )
    }

    return (
        <main>
            <h1>{categoria.nome}</h1>
            <Link to="/categorias">Voltar para categorias</Link>
        </main>
    )
}
