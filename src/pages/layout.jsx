import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import iconGitHub from "../assets/icon-github.png"

export default function Layout(props) {
  return (
    <div>
        {props.theme ? <link rel="stylesheet" type="text/css" href={`/my_use_effect/themes/${props.theme}.css`}></link> : null}
        <Header setTheme={props.setTheme} />
        <Outlet />
        <footer>
          <p>The site was created by Lyudmila Dyachenko</p>
          <a href='https://github.com/LyudmilaDiachenko'>
            <img src={iconGitHub} alt="Icon git hub" />
          </a>
        </footer>
    </div>
  )
}