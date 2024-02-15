import Nav from './nav'
import { Switch } from '@mui/material'
import s from "../style/header.module.css"
import logo from "../assets/icon-logo.png"

export default function Header(props) {
  function changeTheme(_, checked){
    props.setTheme(checked ? 'dark':'')
  }
  
  return (
    <div>
      <header>
        <div className={s.header_container}>
          <Switch onChange={changeTheme}/>
          <Nav />
          <div className={s.logo_container + ' logo_container'}>
            <img src={logo} alt="" />
            <p>
              CodeCraft Ctudios
            </p>
          </div>
        </div>
      </header>
    </div>    
  )
}
