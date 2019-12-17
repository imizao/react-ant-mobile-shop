import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import SearchBarComponent from '../../components/search'
import BannerComponent from '../../components/banner'
import { Flex } from 'antd-mobile'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import './index.css'
import ImgLazyLoad from '../../components/imgLazyLoad'
import indexData from '../../data/index.js'

class App extends Component{
  
  state = {
    categoryList:indexData.data.categoryList
  }
  componentDidMount(){
    console.log(indexData);
    this.setState({
      categoryList: indexData.data.categoryList
    })
    console.log(this.state.categoryList);
  }
  render(){
    // const { categoryList } = this.state.categoryList
    return (
      <div className="App">
        <SearchBarComponent />
        <BannerComponent />
        <BarList aaa='123123' />
        <CateGoryGoods categoryList={this.state.categoryList}/>
      </div>
    );
  }
}

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <img src="" alt=""/>
  </div>
);
const BarList = ({ ...restProps }) => (
  <div>
    <Flex {...restProps}>
      <Flex.Item><PlaceHolder aaa='123' bbb='23'/></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    </div>
)



const  CateGoryGoods = ({categoryList}) => {
  return (
    <div className="cateGoryBox">
      {categoryList.map((item)=>{
        return(
          <LazyLoad throttle={100} height={300} key={item.id}>
            <div className="cateGoryName">{item.name}</div>
            <div className="cateGoryGoodsWrap">
              {item.goodsList.map((item) => {
                return (
                    // <Link to={`/goods/${item.id}`} tag="div" key={item.id}>
                      
                    // </Link>
                    <a className="newGoodsItem" href="" key={item.id}>
                      <ImgLazyLoad
                          offSetTop={44}
                          className="goodsItemImg"
                          realUrl = {item.list_pic_url}>
                        </ImgLazyLoad>
                      {/*<img src={item.list_pic_url} alt={item.name} className="goodsItemImg"/>*/}
                      <div className="goodsItemName">{item.name}</div>
                      <div className="goodsItemPrice">￥{item.retail_price}</div>
                    </a>
                )
              })}
              {/* <Link to={`/categorys/${item.id}`} className="categoryMoreGoods">
                <div>更多{item.name}好物</div>
                <img src={morePng} alt="more"/>
              </Link> */}
            </div>
          </LazyLoad>
        )
      })}
    </div>
  )
}

export default App;
