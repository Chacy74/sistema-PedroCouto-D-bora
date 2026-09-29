import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProdutos } from '../contexts/ProdutosContext'

export function CadastroProduto(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const { cadastrarProduto } = useProdutos();
    const navigate = useNavigate();

    function salvarProduto(evento){
        evento.preventDefault();

        cadastrarProduto({
            nome: nome.trim(),
            preco: Number(preco)
        });

        navigate('/produtos');
    }

    return (
        <main>
            <h1>Cadastrar produto</h1>
            <form onSubmit={salvarProduto}>
                <label>
                    Nome
                    <input
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                        pattern=".*\S.*"
                        title="Digite o nome do produto"
                        required
                    />
                </label>
                <label>
                    Preço
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={preco}
                        onChange={(evento) => setPreco(evento.target.value)}
                        required
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}
