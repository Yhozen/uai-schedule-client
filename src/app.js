import React from 'react'
import ReactDOM from 'react-dom'

const URL = 'https://secure-oasis-54052.herokuapp.com/'

class App extends React.Component {
  constructor () {
   super()
   this.state = {
     clases: [ ['24:01', 'Por ahora no hay más', '420-A'] ]
   }
 }
 componentDidMount() {
   this.fetchData()
 }
  fetchData() {
    fetch(URL)
      .then(res => res.json())
      .then((clases) => this.setState({ clases }))
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
           <a href="#" className="brand-logo">Logo</a>
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
                <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
