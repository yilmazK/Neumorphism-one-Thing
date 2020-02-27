import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            obenOpen: false,
            open1: false,
            btnOpen1:false,
            btnOpen2:false,
            btnOpen3:false,
            enter: false,
            enter1: false,
            enter3: false,
            großValue: '',
            großValue1:'',
            großValue3:'',
            edit1: false,
            edit2: false,
            edit3: false,
            editOben: false
        }
}

btnClicked1(){
    this.setState({btnOpen1: true})
}

btnClicked2(){
        this.setState({btnOpen2: true})
    }

btnClicked3(){
        this.setState({btnOpen3: true})
    }

obenclicked(){
        this.setState({obenOpen: true})
}

search(e){
        e.key === 'Enter' ? this.setState({enter: true}) : console.log("dont know")
}

search1(e){
        e.key === 'Enter' ? this.setState({enter1: true}) : console.log("dont know")
    }
search2(e){
        e.key === 'Enter' ? this.setState({enter2: true}) : console.log("dont know")
    }
search3(e){
        e.key === 'Enter' ? this.setState({enter3: true}) : console.log("dont know")
    }

handlechange(e){
        this.setState({großValue: e.target.value})
}
handlechange1(e){
        this.setState({großValue1: e.target.value})
    }
handlechange2(e){
        this.setState({großValue2: e.target.value})
    }
handlechange3(e){
        this.setState({großValue3: e.target.value})
    }

render() {
    return (
        <div className="App">
            <div className="main-background">
                <h1 className="headline">One Big Thing</h1>
                <div className={this.state.obenOpen ? "btn-oben-open" : "btn-oben"} onClick={e => this.obenclicked()}>
                    {this.state.enter ?
                        <div className="plus">{this.state.großValue}</div>
                   : <div className="plus">{(this.state.obenOpen || this.state.editOben) ?
                            <div><input onChange={e => this.handlechange(e)} value= {this.state.großValue} className="input" onKeyDown={ e => this.search(e)}/></div>
                            : <div className="plus">+</div>}</div>
                        }
                    <div className={this.state.enter ? "btn-oben-open-edit" : "btn-oben-edit"}>
                        <div className="edit-button">
                            <img className="edit-icon" src={require('./assets/edit.png')} onClick={e => this.setState({editOben:true, enter: false})}/>
                        </div>
                    </div>
                    {this.state.enter ? <input type="checkbox"/> : null}
                </div>
                <div className={(this.state.btnOpen1 && this.state.btnOpen2 && this.state.btnOpen3) ? "little-things-wrapper-open" : "little-things-wrapper"} >
                    <div className={this.state.btnOpen1 ? "btn-open" : "btn"} onClick={e => this.btnClicked1()}>
                        <div className="plus">
                            {this.state.enter1  ?
                                <div className="plus">{this.state.großValue1}</div>
                                : <div className="plus">{(this.state.btnOpen1 || this.state.edit1) ?
                                    <div><input onChange={e => this.handlechange1(e)} value= {this.state.großValue1} className="input-little" onKeyDown={ e => this.search1(e)}/></div>
                                    : <div className="plus">+</div>}</div>
                            }
                            <div className={this.state.enter1 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit1:true, enter1: false})}>
                                <div className="edit-button">
                                    <img className="edit-icon" src={require('./assets/edit.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.btnOpen2 ? "btn-open" : "btn"} onClick={e => this.btnClicked2()}>
                        <div className="plus">
                            {this.state.enter2 ?
                                <div className="plus">{this.state.großValue2}</div>
                                : <div className="plus">{(this.state.btnOpen2 || this.state.edit2) ?
                                    <div><input onChange={e => this.handlechange2(e)} value= {this.state.großValue2} className="input-little" onKeyDown={ e => this.search2(e)}/></div>
                                    : <div className="plus">+</div>}</div>
                                }
                            <div className={this.state.enter2 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit2:true, enter2: false})}>
                                <div className="edit-button">
                                    <img className="edit-icon" src={require('./assets/edit.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.btnOpen3 ? "btn-open" : "btn"} onClick={e => this.btnClicked3()}>
                        <div className="plus">
                            {this.state.enter3 ?
                                <div className="plus">{this.state.großValue3}</div>
                                : <div className="plus">{(this.state.btnOpen3 || this.state.edit3) ?
                                    <div><input onChange={e => this.handlechange3(e)} value= {this.state.großValue3} className="input-little" onKeyDown={ e => this.search3(e)}/></div>
                                    : <div className="plus">+</div>}</div>
                            }
                            <div className={this.state.enter3 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit3:true, enter3: false})}>
                                <div className="edit-button">
                                    <img className="edit-icon" src={require('./assets/edit.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weiter">
                    <div className="weiter-text"> ></div>
                </div>
                <div className="zurück">
                    <div className="zurück-text"> ></div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
