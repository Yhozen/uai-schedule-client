import React from 'react'
import ReactDOM from 'react-dom'
import '../lib/styles/own.css'

const URL = 'https://uai-schedule-server.herokuapp.com/'
const weekday = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ]
const nDay  = new Date().getDay()

class App extends React.Component {
  constructor () {
   super()
   this.state = {
     clases: [ ['24:01', 'Cargando', '420-A'] ],
     params: {
       finalizado: '',
       adelanto: ''
     }
   }
 }
 componentDidMount() {
   let { finalizado, adelanto } = this.state.params
   fetch(`${URL}?finalizado=${finalizado}&adelanto=${adelanto}`)
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
         <a onClick={() => this.setState({adelanto: -1})} className="brand-logo">
         <i className="large material-icons">keyboard_arrow_left</i>
         </a>
         <a href="#" className="brand-logo">{weekday[nDay]}</a>
         <a onClick={() => this.setState({adelanto: 1})} className="brand-logo">{weekday[(nDay-1)%7]}</a>
         </div>
       </nav>
        <div className='container' >
          <div className="row">
                <div className="card-panel">
                      <table className="bordered highlight">
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
