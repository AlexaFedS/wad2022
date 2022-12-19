import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './/App.css';
import { Button, Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myCard from "./Cards";

function App() {

  return (
      <BrowserRouter basename="/" >
        <div className="container">
          <div className="row header">
            <Link to="/" className="col-3 text-center"><button className="btn btn-info btn-lg text-center text-white">Симптомы</button></Link>
            <Link to="/login" className="col-3 text-center"><button className="btn btn-info btn-lg text-center text-white">Вход</button></Link>
            <Link to="/registration" className="col-3 text-center"><button  className="btn btn-info btn-lg text-center text-white">Регистрация</button></Link>
            <Link to="/" className="col-3 text-center"><button  className="btn btn-danger btn-lg text-center text-white">Скорая</button></Link>
          </div>
          <Switch>
            <Route exact path="/" component={myCard}>
              <div className="main">
                <h1 className="text-center">Симптомы</h1>
                <Row xs={4} md={4} className="g-4">
                  <Card className="card ms-4">
                    <Card.Img className="cardImage" variant="top" src="pain.jpg" height={200} width={100}/>
                    <Card.Body>
                      <div className="textStyle">
                        <Card.Title>Боль в зубе</Card.Title>
                      </div>
                      <div  className="textStyle">
                        <Card.Text>
                          Не острая боль и не сильная боль. Проявляется при жевании или перепадах температур.
                        </Card.Text>
                      </div>
                      <Button className="cardButton" href="/стоматолог" target="_blank" variant="primary">Выбрать</Button>
                    </Card.Body>
                  </Card>
                  <Card className="card ms-4">
                    <Card.Img className="cardImage" variant="top" src="belly.jpg" height={200} width={100}/>
                    <Card.Body>
                      <div className="textStyle">
                        <Card.Title>Боль в животе</Card.Title>
                      </div>
                      <div  className="textStyle">
                        <Card.Text>
                          Не острая боль и не сильная боль. Болит после приема пищи или после лекции по теорверу.
                        </Card.Text>
                      </div>
                      <Button className="cardButton" href="/гастроэнтеролог" target="_blank" variant="primary">Выбрать</Button>
                    </Card.Body>
                  </Card>
                  <Card className="card ms-4">
                    <Card.Img className="cardImage" variant="top" src="throat.jpg" height={200} width={100}/>
                    <Card.Body>
                      <div className="textStyle">
                        <Card.Title>Боль в горле</Card.Title>
                      </div>
                      <div  className="textStyle">
                        <Card.Text>
                          Болит во время приема пищи, дыхания, ощущается простуда.
                        </Card.Text>

                      </div>
                      <Button className="cardButton" href="/терапевт" target="_blank" variant="primary">Выбрать</Button>
                    </Card.Body>
                  </Card>
                  <Card className="card ms-4">
                    <Card.Img className="cardImage" variant="top" src="pain.jpg" height={200} width={100}/>
                    <Card.Body>
                      <div className="textStyle">
                        <Card.Title>Боль в зубе</Card.Title>
                      </div>
                      <div  className="textStyle">
                        <Card.Text>
                          <span className="bg-danger text-white">Острая сильная боль.</span>
                        </Card.Text>
                      </div>
                      <Button className="cardButton" href="/скорая" target="_blank" variant="danger">Выбрать</Button>
                    </Card.Body>
                  </Card>
                </Row>
              </div>
            </Route>
            <Route path="/стоматолог">
              <h1>Вам нужен стоматолог</h1>
              <img src="dentist.jpg"/>
            </Route>
            <Route path="/терапевт">
              <h1>Вам нужен терапевт</h1>
            </Route>
            <Route path="/гастроэнтеролог">
              <h1>Вам нужен гастроэнтеролог</h1>
            </Route>
            <Route path="/скорая">
              <div className="ambulance">СРОЧНО СКОРУЮ!!!!</div>
              <img src="alarm.svg" width="60%" className="alarm"/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
