import React, { Component } from 'react';
import API from './API'
import loadingImage from './loading.gif'

class App extends Component {
  constructor(){
    super();
    this.state={
      title: '⚛️ REACT image search ⚛️ ',
      searchTerm : '',
      loading: false,
      images:[]
      
    };
  }

  searchTermChanged(event){
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
    
  }

  formSubmitted(event){
    event.preventDefault();

    this.setState({
      loading:true,
      images:[]
    })

    API
      .search(this.state.searchTerm)
      .then(images => {
        this.setState({
          images,
          loading:false

        })
      })
    
      //this.setState({
      //  loading:false
      //})
  }

  render() {
    const {title,searchTerm, loading, images} = this.state;  //destructuring
    return (
      <div className="App">
        <h1>{title}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="searchTerm">Search Term</label>
          <input 
            onChange={(event) =>this.searchTermChanged(event)} 
            value ={searchTerm} 
            className="u-full-width" 
            type="text" 
            name="searchTerm" 
            id="searchTerm">
          </input>
          <button type="submit">Search</button>
        </form>
        {loading ? <img className='loading' src={loadingImage} alt=''/> : ''}
        <section className="images">
            {images.map(image => {
              return <img key={image.id} alt={image.description} src={image.urls.small} />
            })}
        </section>
      </div>
        );
      }
    }
    
    export default App;
