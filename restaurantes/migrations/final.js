
//var numeroJugadores="1"
var numeroPreguntas="1"
var actual=0;
var correcta=0;
var erronea=0;

function Pregunta(){
  actual++;
  if(actual<numeroPreguntas){
  ReactDOM.unmountComponentAtNode(document.getElementById('app2'));

    ReactDOM.render(<Respuestas
      name={String(Preguntas[actual].name)}
      img={String(Preguntas[actual].img)}
      opc1={String(Preguntas[actual].opc1)}
      opc2={String(Preguntas[actual].opc2)}
      opc3={String(Preguntas[actual].opc3)}
      opc4={String(Preguntas[actual].opc4)}
      />, document.getElementById('app2'));




    console.log("Pasa por if");
  }else{
    //Aquir va  pasa a ver los resultados
    actual=0;

    ReactDOM.unmountComponentAtNode(document.getElementById('app2'));
    ReactDOM.render(<Final/>, document.getElementById('app3'));

    console.log("Pasa por else");
  }
}

const Preguntas = [
  {
    name: 'Montaña',
    img: 'https://familiasenlanube.org/wp-content/uploads/2017/03/el-cuento-de-la-montana.jpg',
    opc1: "Montaña",
    opc2: "Rio",
    opc3: "Playa",
    opc4: "Ciudad",
  },
  {
    name: 'Rio',
    img: 'http://d3ustg7s7bf7i9.cloudfront.net/mmediafiles/pl/f6/f6327bca-c5fd-44b9-b856-54abcff3c7dd_750_497.jpeg',
    opc1: "Montaña",
    opc2: "Rio",
    opc3: "Playa",
    opc4: "Ciudad",
  },
  {
    name: "Playa",
    img: 'http://www.culleraturismo.com/wp-content/uploads/2016/03/Playa-del-estany-5.jpg',
    opc1: "Montaña",
    opc2: "Rio",
    opc3: "Playa",
    opc4: "Ciudad",
  },
  {
    name: 'Libros',
    img: 'http://conceptodefinicion.de/wp-content/uploads/2015/01/libro.jpg',
    opc1: "Mariposas",
    opc2: "Una ciudad enorme",
    opc3: 'Libros',
    opc4: "Vacas pastando en un campo",
  },
  {
    name: 'Un ninja',
    img: 'http://www.elblogdeyes.com/wp-content/uploads/ninja.jpg',
    opc1: "Un samurai",
    opc2: 'Un ninja',
    opc3: "Un caballero medieval",
    opc4: "Un cowboy",
  },
  {
    name: "Un samurai",
    img: 'https://ubistatic19-a.akamaihd.net/resource/en-GB/game/forhonor/fh-game/fh_game-info-orochi_ncsa.png',
    opc1: "Un samurai",
    opc2: 'Un ninja',
    opc3: "Un caballero medieval",
    opc4: "Un cowboy",
  },
  {
    name: "Un caballero medieval",
    img: 'https://previews.123rf.com/images/nejron/nejron1202/nejron120200079/12148849-Caballero-medieval-sobre-fondo-gris--Foto-de-archivo.jpg',
    opc1: "Un samurai",
    opc2: 'Un ninja',
    opc3: "Un caballero medieval",
    opc4: "Un cowboy",
  },
  {
    name: "Un cowboy",
    img: 'http://home.bt.com/images/the-son-on-amc-136417118220203901-170406160933.jpg',
    opc1: "Un samurai",
    opc2: 'Un ninja',
    opc3: "Un caballero medieval",
    opc4: "Un cowboy",
  },
  {
    name: "Avión militar",
    img: 'https://esp.rt.com/actualidad/public_images/2015.01/original/54b7e56a72139ef8028b45fc.jpg',
    opc1: "Muralla",
    opc2: "Barco militar",
    opc3: "Torre de vigilancia",
    opc4: "Avión militar",
  },
  {
    name: 'Una muralla',
    img: 'http://guias-viajar.com/china/wp-content/uploads/2010/02/fotos-pingyao-muralla-medieval-001.jpg',
    opc1: "Un crucero de lujo",
    opc2: "Un mapache",
    opc3: 'Una muralla',
    opc4: "Un aguila rosa",
  },
  {
    name: 'Una mariposa',
    img: 'http://www.lareserva.com/home/sites/default/files/styles/article_image/public/field/image/monarcaf.jpg?itok=iYFc7O25',
    opc1: "Un perro",
    opc2: "Un gato",
    opc3: 'Una mariposa',
    opc4: "Una caballo",
  }
]


class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1,
    }
  }
  componentWillMount() {
   console.log('Se ejecuta componentWillMount')
 }
 componentDidMount() {
  console.log('Se ejecuta componentDidMount')
}
componentWillReceiveProps(nextProps) {
   console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
 }
 shouldComponentUpdate(nextProps, nextState) {
    console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano

    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('Se desmonta el componente...')
  }


  upCount = (e) => {
    e.preventDefault();
    this.setState(function(prevState){
        if(prevState.count < 10){
          numeroPreguntas= prevState.count +1;
          return {
          count: prevState.count + 1,
          }
        }
    })
  };

  downCount = (e) => {
    e.preventDefault();
    this.setState(function(prevState){

        if(prevState.count > 1){
          numeroPreguntas= prevState.count - 1;
          return {
          count: prevState.count - 1
          }
      }
    })
  };
  resetCount = (e) => {
    e.preventDefault();
    this.setState({count:1})
    numeroPreguntas= 1;

  };


  dame = (e) => {
    e.preventDefault();
    this.setState(function(prevState){


      ReactDOM.render(<Respuestas
        name={String(Preguntas[actual].name)}
        img={String(Preguntas[actual].img)}
        opc1={String(Preguntas[actual].opc1)}
        opc2={String(Preguntas[actual].opc2)}
        opc3={String(Preguntas[actual].opc3)}
        opc4={String(Preguntas[actual].opc4)}
        />, document.getElementById('app2'));

        ReactDOM.unmountComponentAtNode(document.getElementById('app'));

          return {

          }
    })
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (

      <div className="counter">
      <p> Elige entre 1 y 10 preguntas para la próxima partida? </p>
        <div className="count">{this.state.count}</div>

          <div className="changeCount2">
             <a href="#" onClick={this.upCount}> up   </a>
             <a href="#" onClick={this.downCount}> down   </a>
             <a href="#" onClick={this.resetCount}> reset   </a>

            </div>
            <button onClick={this.dame}> ¡Empezar! </button>
      </div>
    )
  }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(Preguntas);






class Respuestas extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      img: props.img,
      opc1: props.opc1,
      opc2: props.opc2,
      opc3: props.opc3,
      opc4: props.opc4,

    }
  }
  componentWillMount() {
   console.log('Se ejecuta componentWillMount')
 }
 componentDidMount() {
  console.log('Se ejecuta componentDidMount')
}
componentWillReceiveProps(nextProps) {
   console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
 }
 shouldComponentUpdate(nextProps, nextState) {
    console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano

    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('Se desmonta el componente...')
  }


  dame = (e) => {
    e.preventDefault();
    this.setState(function(prevState){


      var rate_value
      if (document.getElementById('r1').checked) {
          rate_value = document.getElementById('r1').value;
      }

      if (document.getElementById('r2').checked) {
          rate_value = document.getElementById('r2').value;
      }

    if (document.getElementById('r3').checked) {
        rate_value = document.getElementById('r3').value;
    }

  if (document.getElementById('r4').checked) {
              rate_value = document.getElementById('r4').value;
            }

            if(this.state.name==rate_value){
              correcta++;

            }else{
              erronea++
            }

      Pregunta()






      // ReactDOM.unmountComponentAtNode(document.getElementById(this));

          return {

          }
    })
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (

      <div className="Pregunta">
      <p> ¿Que se muestra en la siguiente imagen? </p>
        <div className="count">{this.state.count}</div>
        <div className="changeCount">
                <img src={this.state.img} alt={this.state.name} />



        <form>
          <div className="radio">
            <label>
              <input type="radio" name="hola" id="r1" value={this.state.opc1} checked={true} />
              {this.state.opc1}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio"  name="hola" id="r2" value={this.state.opc2} />
              {this.state.opc2}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="hola" id="r3" value={this.state.opc3} />
              {this.state.opc3}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="hola" id="r4" value={this.state.opc4} />
              {this.state.opc4}
            </label>
          </div>
        </form>




          </div>

            <button onClick={this.dame}> ¡Listo! </button>
      </div>
    )
  }
}






class Final extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      correctos: correcta,
      incorrectos: erronea,

    }
  }
  componentWillMount() {
   console.log('Se ejecuta componentWillMount')
 }
 componentDidMount() {
  console.log('Se ejecuta componentDidMount')
}
componentWillReceiveProps(nextProps) {
   console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
 }
 shouldComponentUpdate(nextProps, nextState) {
    console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano

    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('Se desmonta el componente...')
  }


  dame = (e) => {
    e.preventDefault();
    this.setState(function(prevState){
      correcta=0;
      erronea=0;

      ReactDOM.render(<Counter/>, document.getElementById('app'));
      ReactDOM.unmountComponentAtNode(document.getElementById("app3"));

          return {

          }
    })
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (

      <div className="counter">
      <p> El resultado es </p>
        <div className="count">Correctos {this.state.correctos} y erroneos {this.state.incorrectos}</div>
        <button onClick={this.dame}> ¡Volver a jugar! </button>
      </div>


    )
  }
}
