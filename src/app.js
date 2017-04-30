import React from 'react'
import ReactDOM from 'react-dom'

const URL = 'https://uai-schedule-server.herokuapp.com'
const weekday = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ]
const nDay  = new Date().getDay()

class App extends React.Component {
  constructor () {
   super()
   this.state = {
     clases: [ ['24:01', 'Cargando', '420-A'] ]
   }
 }
 componentDidMount() {
   this.fetchData(URL)
 }
  fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(setClase.bind(this))
      .catch(console.error)
  }
  renderRows (clase, i) {
    return (
      <tr key={i}>
        <td>{clase[0]} </td>
        <td>{clase[1]} </td>
        <td>{clase[2]} </td>
      </tr>
    )
  }
  render() {
    return (
      <div>
      <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">{weekday[nDay]}</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="sass.html">Sass</a></li>
             <li><a href="badges.html">Components</a></li>
             <li><a href="collapsible.html">JavaScript</a></li>
           </ul>
         </div>
       </nav>
        <div className='container' >
        <div className="row">
              <div className="card-panel">
                    <table className="bordered responsive-table highlight">
                      <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Clase</th>
                            <th>Sala</th>
                        </tr>
                      </thead>

                      <tbody>
                      {this.state.clases.map(this.renderRows)}
                      </tbody>
                    </table>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

function setClase (clases) {
  if (!clases[0]) {
    this.setState({ clases: [ ['24:01', 'Por ahora no hay más', '420-A'] ] })
  } else {
    this.setState({ clases })
  }
}
