import React from "react";
import './HomeScreensytles.css';
import axios from 'axios'

class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tapped: false,
            user: this.props.userProp,
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
            großValue2:'',
            großValue3:'',
            edit1: false,
            edit2: false,
            edit3: false,
            editOben: false,
            date: this.getCurrentDate()
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

    addZ(n){
        return n<10? '0'+n:''+n;
    }

    getCurrentDate(){

        var tempDate = new Date();
        var date = tempDate.getDate() + '.' + (this.addZ(tempDate.getMonth()+1)) + '.' + tempDate.getFullYear();
        console.log(date)

        return date
    }

    search(e){
        if (e.key === 'Enter'){
            this.setState({enter: true});

            const answer = {
                "bigThing": this.state.großValue,
                "firstsmallThing": this.state.großValue1,
                "secondsmallThing": this.state.großValue2,
                "thirdsmallThing": this.state.großValue3,
                "datum" : this.state.date
            };

            axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.data)
                })

        } else {

        }

    }

    search1(e){
        if (e.key === 'Enter'){
            this.setState({enter1: true});

            const answer = {
                "bigThing": this.state.großValue,
                "firstsmallThing": this.state.großValue1,
                "secondsmallThing": this.state.großValue2,
                "thirdsmallThing": this.state.großValue3,
                "datum" : this.getCurrentDate()
            };

            axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.data)
                })

        } else {

        }

    }
    search2(e){
        if (e.key === 'Enter'){
            this.setState({enter2: true});

            const answer = {
                "bigThing": this.state.großValue,
                "firstsmallThing": this.state.großValue1,
                "secondsmallThing": this.state.großValue2,
                "thirdsmallThing": this.state.großValue3,
                "datum" : this.getCurrentDate()
            };

            axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.data)
                })

        } else {

        }

    }
    search3(e){
        if (e.key === 'Enter'){
            this.setState({enter3: true});

            const answer = {
                "bigThing": this.state.großValue,
                "firstsmallThing": this.state.großValue1,
                "secondsmallThing": this.state.großValue2,
                "thirdsmallThing": this.state.großValue3,
                "datum" : this.getCurrentDate()
            };

            axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.data)
                })

        } else {

        }

    }

    onBlur(){
        this.setState({enter: true});
        console.log("out of focus");
        const answer = {
            "bigThing": this.state.großValue,
            "firstsmallThing": this.state.großValue1,
            "secondsmallThing": this.state.großValue2,
            "thirdsmallThing": this.state.großValue3,
            "datum" : this.getCurrentDate()
        };

        axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
    }

    onBlur1(){
        this.setState({enter1: true});
        console.log("out of focus");
        const answer = {
            "bigThing": this.state.großValue,
            "firstsmallThing": this.state.großValue1,
            "secondsmallThing": this.state.großValue2,
            "thirdsmallThing": this.state.großValue3,
            "datum" : this.getCurrentDate()
        };

        axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
    }

    onBlur2(){
        this.setState({enter2: true});
        console.log("out of focus");
        const answer = {
            "bigThing": this.state.großValue,
            "firstsmallThing": this.state.großValue1,
            "secondsmallThing": this.state.großValue2,
            "thirdsmallThing": this.state.großValue3,
            "datum" : this.getCurrentDate()
        };

        axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
    }

    onBlur3(){
        this.setState({enter3: true});
        console.log("out of focus");
        const answer = {
            "bigThing": this.state.großValue,
            "firstsmallThing": this.state.großValue1,
            "secondsmallThing": this.state.großValue2,
            "thirdsmallThing": this.state.großValue3,
            "datum" : this.getCurrentDate()
        };

        axios.post('https://onebigthing.herokuapp.com/user/update/' + this.props.userProp.sub, { new: answer })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
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

    weiterTapped(e) {

                console.log("Datum drin");
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                var newtomorrow = tomorrow.getDate() + '.' + (this.addZ(tomorrow.getMonth() + 1)) + '.' + tomorrow.getFullYear();
                this.setState({date: newtomorrow, tapped: true});
                console.log(newtomorrow)
    }

    zurückTapped(e) {
                console.log("Datum drin");
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() - 1);
                var newtomorrow = tomorrow.getDate() + '.' + (this.addZ(tomorrow.getMonth() + 1)) + '.' + tomorrow.getFullYear();
                this.setState({date: newtomorrow, tapped: true});
                console.log(newtomorrow)

    }

    today(){
        this.setState({date:this.getCurrentDate(), tapped: false})
    }

    render() {
        return (
            <div className="App">
                <div className="main-background">
                    <p className="datum-header">{this.state.date}</p>
                    <h1 className="headline">One Big Thing</h1>
                    <div className={this.state.obenOpen ? "btn-oben-open" : "btn-oben"} onClick={e => this.obenclicked()}>
                        {this.state.enter ?
                            <div className="plus">{this.state.großValue}</div>
                            : <div className="plus">{(this.state.obenOpen || this.state.editOben) ?
                                <div><input maxLength="50" onChange={e => this.handlechange(e)} value= {this.state.großValue} className="input" onBlur={e => this.onBlur()} autoFocus={true} onKeyDown={ e => this.search(e)}/></div>
                                : <div className="plus">+</div>}</div>
                        }
                        <div className={this.state.enter ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({editOben:true, enter: false})}>
                            <div className="edit-button">
                                <img className="edit-icon" src={require('../assets/edit.png')}/>
                            </div>
                        </div>
                        {/*{this.state.enter ? <input type="checkbox"/> : null}*/}
                    </div>
                    <div className={(this.state.btnOpen1 && this.state.btnOpen2 && this.state.btnOpen3) ? "little-things-wrapper-open" : "little-things-wrapper"} >
                        <div className={this.state.btnOpen1 ? "btn-open" : "btn"} onClick={e => this.btnClicked1()}>
                            <div className="plus-little">
                                {this.state.enter1  ?
                                    <div className="plus-little">{this.state.großValue1}</div>
                                    : <div className="plus-little">{(this.state.btnOpen1 || this.state.edit1) ?
                                        <div><input maxLength="40" onChange={e => this.handlechange1(e)} value= {this.state.großValue1} className="input-little" onBlur={e => this.onBlur1()} autoFocus={true} onKeyDown={ e => this.search1(e)}/></div>
                                        : <div className="plus1">+</div>}</div>
                                }
                                <div className={this.state.enter1 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit1:true, enter1: false})}>
                                    <div className="edit-button">
                                        <img className="edit-icon" src={require('../assets/edit.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.btnOpen2 ? "btn-open" : "btn"} onClick={e => this.btnClicked2()}>
                            <div className="plus">
                                {this.state.enter2 ?
                                    <div className="plus-little">{this.state.großValue2}</div>
                                    : <div className="plus-little">{(this.state.btnOpen2 || this.state.edit2) ?
                                        <div><input maxLength="40" onChange={e => this.handlechange2(e)} value= {this.state.großValue2} className="input-little" onBlur={e => this.onBlur2()} autoFocus={true} onKeyDown={ e => this.search2(e)}/></div>
                                        : <div className="plus1">+</div>}</div>
                                }
                                <div className={this.state.enter2 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit2:true, enter2: false})}>
                                    <div className="edit-button">
                                        <img className="edit-icon" src={require('../assets/edit.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.btnOpen3 ? "btn-open" : "btn"} onClick={e => this.btnClicked3()}>
                            <div className="plus">
                                {this.state.enter3 ?
                                    <div className="plus-little">{this.state.großValue3}</div>
                                    : <div className="plus-little">{(this.state.btnOpen3 || this.state.edit3) ?
                                        <div><input maxLength="40" onChange={e => this.handlechange3(e)} value= {this.state.großValue3} className="input-little" onBlur={e => this.onBlur3()} autoFocus={true} onKeyDown={ e => this.search3(e)}/></div>
                                        : <div className="plus1">+</div>}</div>
                                }
                                <div className={this.state.enter3 ? "btn-oben-open-edit" : "btn-oben-edit"} onClick={e => this.setState({edit3:true, enter3: false})}>
                                    <div className="edit-button">
                                        <img className="edit-icon" src={require('../assets/edit.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weiter" onClick={e => this.weiterTapped(e)}>
                        <div className="weiter-text" > ></div>
                    </div>
                    <div className="zurück" onClick={e => this.zurückTapped(e)}>
                        <div className="zurück-text"> ></div>
                    </div>
                    <div className={!this.state.tapped ? "today" : "today1"} onClick={e => this.today()}>
                        <div>Today</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScreen;
