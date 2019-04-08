import React from 'react';

import Select from './Select';
import Text from './Text';
import axios from 'axios';

class MainContent extends React.Component{
  constructor(){
    super();
    this.state = {
      sent: 1,
      paras : 2,
      text : 'JII'
    }
  }
  showHtml(x){
    this.setState({sent: x}, this.getSampleText);
  }

  changeParas(number){
      this.setState({paras: number}, this.getSampleText);
  }
  componentWillMount(){
    this.getSampleText();
    
  }
  getSampleText(){
    // axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    //   .then((response) => {
    //     this.setState({text: response.data.text}, function(){
    //       console.log(this.state);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios({
    //   url: "https://montanaflynn-lorem-text-generator.p.rapidapi.com/paragraph?length=3&count=1",
    //   method: 'get',
    //   headers:{
    //     "X-RapidAPI-Host": "montanaflynn-lorem-text-generator.p.rapidapi.com",
    //     "X-RapidAPI-Key": "6232ec3ef5msh542de8b664ed98dp157247jsn0a3499d02617",
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
    //     'Access-Control-Allow-Headers': 'Content-Type'
    //   },
    //   crossdomain: true 
    // }).then(result => {
      
    //   console.log(result);
    // })
    // .catch(err => {
    //   console.log('hIIII');
    //   console.log(err);
    // })
    fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=373d1a1f0dd59e296830aec2b6776ccc&units=metrics`)
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  render(){
    return (
      <main>  
          <div className = "paraInfo">
                <form>
                    <Select value = {this.state.sent} onChange={this.showHtml.bind(this)}/>
                    <Text value = {this.state.paras} onChange={this.changeParas.bind(this)}/>                    
                </form>
            </div>
          <div className = "output">
          <h1>Random Text</h1>
              {this.state.text}
          </div>
      </main>
    )
  }
}


export default MainContent;
