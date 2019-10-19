import React from "react";
import ReactDOM from "react-dom";
import ListItem from './ListItem';
import Header from './Header';
import Loader from './Loader';
import ListItemContainer from './ListItemContainer';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.bufferData = this.data.slice(0);
    this.titleArr =  this.props.titles;
    this.itemClick = this.props.itemClick;
    this.headerItemClick = this.props.headerItemClick;
    this.loaderTxt = this.props.loaderTxt;
    this.state = { listData: [], enableScroll: true,
    headers:[]};
  }
  componentDidMount() {
    this.setState({ listData: this.bufferData.splice(0,this.props.initialLoadLimit),headers:this.titleArr });
    document.getElementById("table-scroll").addEventListener(
      "scroll",
      this.onScroll.bind(this),
      false
    );
  }
  componentWillUnmount() {
    document.getElementById("table-scroll").removeEventListener(
      "scroll",
      this.onScroll.bind(this),
      false
    );
  }
  componentDidUpdate() {
    if (this.state.isLoading  && !this.state.enableScroll) {
      setTimeout(
        () => this.setState({ isLoading: false, enableScroll: true }),
        500
      );
    }
  }
  onScroll(e) {
    console.log('scrolling');
    var scroll = document.getElementById("table-scroll").scrollTop;
    var clientHeight = document.getElementById("table-scroll").clientHeight;
      if(document.getElementById("table-scroll").scrollTop + document.getElementById("table-scroll").clientHeight >= document.getElementById("table-scroll").scrollHeight &&this.bufferData.length){
        console.log("Update Data");
        this.setState({ isLoading: true, enableScroll: false });
        this.updateListData();
      }else{
        console.log("dont update");
      }
  }
  updateListData() {
    var array = [...this.state.listData];
    var tempData = this.bufferData.splice(0,this.props.appendDataLimit);
    if(tempData.length){
        this.setState(prevState => ({ listData: [...array, ...tempData] }));
    }
    // remove logic goes here if there is lot of image load which will reduce the performance
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {(this.state.isLoading) ? <Loader text={this.loaderTxt}/> : '' }
        <div id="table-scroll" className="table-scroll" style={
              this.state.enableScroll ? { overflow: "auto" } : { overflow: "hidden" }
            }>
          <table ref="table" id="main-table" className="main-table">
            <thead>
              <tr>
              <Header header={this.state.headers} headerItemClick={this.headerItemClick}/>
              </tr>
            </thead>
            <tbody>
              <ListItemContainer listData={this.state.listData}itemClick={this.itemClick}></ListItemContainer>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
