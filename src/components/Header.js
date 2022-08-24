import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'
import {useState} from 'react'
import NavigationMenu from './NavigationMenu';
import HamburguerMenu from './HamburguerMenu';

const pages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const [openMenu, setOpenMenu] = useState(false)
    const handleClickHamburguer = () => {
        if (openMenu) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }

    return (
    <>
        <div className='Header-container'>
            <header>
                <h1>MyTinerary</h1>
                <NavigationMenu pages={pages} click={handleClick} link={linkCreator} open={open}/>
                <HamburguerMenu pages={pages} click={handleClickHamburguer} link={linkCreator} openMenu={openMenu}/>
            </header>
        </div>
    </>
    );
    }

export default Header;