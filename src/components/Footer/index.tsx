import './Footer.css';

export default function Footer(){
    const ano = new Date().getFullYear();
    

    return (
        <footer className='footer'>
            <span>© {ano} <a target='_blank' href='https://lucasperrone21.github.io/Portfolio/'>Lucas Perrone</a>.</span> Todos os direitos reservados.
        </footer>
    )
}