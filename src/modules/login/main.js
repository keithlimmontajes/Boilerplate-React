import React, { Component } from 'react'
import {connect} from 'react-redux';

 class main extends Component {
  render() {
    return (
      <div>
          login pages
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
    return {
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(main);