import React from "react"
import "./About.css"

function About() {
  return (
    <div className="profile-content">
      <img
        src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/278117493_10226508828484372_5481521830141404561_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=nzsryX-zhREAX8SwOty&tn=j6Rk8eYUU8Vnwn5f&_nc_ht=scontent.feoh3-1.fna&oh=00_AT-fAgfGogdIxvh9EdgCi0YIndixWxWQ2Lmyh9K9PYvzfg&oe=6259DCF7"
        alt="dayan manrique"
      />
      <section className="profile-content__information">
        <p>dayan alexis manrique bonilla</p>
        <p>
          Soy una persona alegre con un gran sentido de companerismo,muy
          tranquilo <br />
          me gustan los video juegos y la programacion
        </p>
        <p>dayanalexismanrique@hotmail.com</p>
        <p>cosas que he aprendido en el bootcamp</p>
        <ul>
          <li /> peticiones al backend
          <li /> creacion de apis con express
          <li /> react redux
          <li /> envios de correos con sengrid
        </ul>

        <a href="https://github.com/mellito" target="__blank">
          mi github
        </a>
      </section>
    </div>
  )
}

export default About
