import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

const style = {
  btnBox: {
    textAlign: 'center',
    marginTop: '200px',
  },
  button: {
    padding: '10px 30px',
    background: '#FFF',
    border: '1px solid #FFF',
    borderRadius: '3px'
  }
}
const START = withRouter(({ history }) => (
  <div style={style.btnBox}>
    <input
      type="button"
      onClick={() => { history.push('/components/table') }}
      style={style.button}
      value="START"
    />
  </div>
))


// { color: "rgba(0, 0, 0, 0.870588)", backgroundColor: "rgb(255, 255, 255)", transition: "transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms", boxSizing: "border-box", fontFamily: "Roboto, sans-serif", height: "100%", width: "256px", position: "fixed", zIndex: "1200", left: " 0px", top: "0px", transform: "translate(0px, 0px)", overflow: "auto", boxShadow: "rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px" }

class Master extends Component {
  render() {
    return (
      <div className={'rob-left-menu'} style={{ paddingTop: '200px', textAlign: 'center', background: 'rgb(53, 186, 255)', height: '100%', width: '100%', fontWeight: '500', fontSize: '20px', color: '#FFF', position: 'fixed' }}>
        <div className={'rob-left-menu'} style={{ color: 'rgba(0, 0, 0, 0.870588)', backgroundColor: 'rgb(255, 255, 255)', transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', boxSizing: 'border-box', fontFamily: 'Roboto, sans-serif', height: '100%', width: '500px', position: 'fixed', zIndex: '1200', left: '0px', top: '0px', transform: 'translate(0px, 0px)', overflow: 'auto', boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px' }}>
          <img src="/images/explain.png" style={{ width: '600px' }} alt="目录结构" />
        </div>
        <div style={{ paddingLeft: '300px' }}>
          Miracles sometimes occur, but one has to work terribly for them.
          <br />
          <START />
        </div>
      </div>
    )
  }
}
export default Master
