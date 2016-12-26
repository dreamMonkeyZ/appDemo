import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import ProdDetail from './prodDetail.js';

const listData = require("./src/data.js");
const goods = listData.goodsInfo;
const goodsInfo = [
  	{
  		"goods_id":"1000003",
  		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/5f/63/306618b4341dcca79ca01be6c6345f63.jpg",
  		"goods_name":"Azazie Jessica",
  		"goods_price":"$99"
  	},
  	{
  		"goods_id":"1000005",
  		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/b4/26/f8044be7af0553c101c21b785d1bb426.jpg",
  		"goods_name":"Azazie Alexandra",
  		"goods_price":"$99"
  	},
  	{
  		"goods_id":"1000018",
  		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/b2/10/17e87cd3b7358834ed723c61a73eb210.jpg",
  		"goods_name":"Azazie Alyssa",
  		"goods_price":"$109"
  	},
  	{
  		"goods_id":"1000019",
  		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/4a/02/cb1cff0000c1dafb73ba39e903cc4a02.jpg",
  		"goods_name":"Azazie Hannah",
  		"goods_price":"$99"
  	},
  	{
  		"goods_id":"1000020",
  		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/ce/8b/14577d95e6c0f6ddf73b5105869ace8b.jpg",
  		"goods_name":"Azazie Ashley",
  		"goods_price":"$90"
  	},
  	{
		"goods_id":"1000023",
		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/5b/8a/861306526363c002036c5cf77de75b8a.jpg",
  		"goods_name":"Azazie Grace",
  		"goods_price":"$99"
	},
	{
		"goods_id":"1000029",
		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/af/4e/5b1b789ee28fbeb93bdc511bdb41af4e.jpg",
  		"goods_name":"Azazie Victoria",
  		"goods_price":"$129"
	},
	{
		"goods_id":"1000035",
		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/88/4f/9823ed678d84d4d1281867da9dbf884f.jpg",
  		"goods_name":"Azazie Savannah",
  		"goods_price":"$119"
	},
	{
		"goods_id":"1000038",
		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/e8/69/1ad56e465290e53ae0655c09d585e869.jpg",
  		"goods_name":"Azazie Sofia",
  		"goods_price":"$109"
	},
	{
		"goods_id":"1000045",
		"goods_thumb":"https://dojygcq45t31s.cloudfront.net/upimg/s290/c0/a7/a775dc37652d860e765105d7c873c0a7.jpg",
  		"goods_name":"Azazie Jasmine",
  		"goods_price":"$119"
	}
  ];

const style = StyleSheet.create({
	imgColor : {
		height : 18,
		width : 18,
		marginRight : 8,
	},
	goodsName : {
		textAlign : 'center',
		marginTop : 10
	},
	goodsPrice : {
		textAlign : 'center',
		marginTop : 5
	},
	filter: {
	    width : 360, // flexDirection的位置占比
	    height : 40,
	    lineHeight: 40,
	    color: "#ffffff",
	    textAlign: "center",
	    backgroundColor: "#dc356d",
	    marginTop : 10,
	    fontWeight : 'normal',
	    fontSize : 20
  },
  	shopBag : {
  		backgroundColor : '#dc356d', 
  		height:18, 
  		width:18, 
  		borderRadius : 8, 
  		position : 'absolute',
  		justifyContent : 'center',
  		alignItems : 'center',
  		alignSelf : 'center',
  		right : 25,
  		top : 9,
  		zIndex : 1000
  },
  	shopBagText : {
  		textAlign : 'center',
  		color: 'white'
  },})

export default class ProdList extends Component {

	_pressButton(){
		const {navigator} = this.props;
		if(navigator){
			navigator.push({
				name : "",
				component: ProdDetail
			});
		}
	}


componetDidAmount(){
	
}

	render() {
		let imgs = [];
		// 逻辑比较多的代码不要在render的return中写，容易出错
		for(let i = 0; i < goodsInfo.length; i = i + 2){
			imgs.push(
				<View key = { 'v' + i} style = {{ flexDirection : 'row', flex : 1, justifyContent : 'center', height : 350, width : 380, marginTop : 15, marginBottom : 3}}>
					<View style = {{ flexDirection : 'column' }}>
						<TouchableOpacity style = {{ flex : 1 }} onPress={this._pressButton.bind(this)}>
							<Image style={{width : 190, height : 150, flex : 1}} key={i} source = {{uri: goodsInfo[i].goods_thumb}} />
						</TouchableOpacity>
						<View style = {{ flexDirection : 'row', alignItems : 'center', marginTop : 10 }}>
							<Text style={[style.imgColor, {backgroundColor : "red", marginLeft : 24}]}>
							</Text>	
							<Text style={[style.imgColor, {backgroundColor : 'purple'}]}>
							</Text>
							<Text style={[style.imgColor, {backgroundColor : 'black'}]}>
							</Text>
							<Text>
								57 Colors
							</Text>
						</View>
						<Text style = {style.goodsName}>
							{goodsInfo[i].goods_name}
						</Text>
						<Text style = {style.goodsPrice}>
							{goodsInfo[i].goods_price}
						</Text>
					</View>
					<View style = {{ flexDirection : 'column' }}>
						<TouchableOpacity style = {{ flex : 1 }} >
							<Image style={{width : 190, height : 150, flex : 1}} key={i+1} source = {{uri: goodsInfo[i+1].goods_thumb}} />
						</TouchableOpacity>
						<View style = {{ flexDirection : 'row', alignItems : 'center', justifyContent : 'center' , marginTop : 10 }}>
							<Text style={[style.imgColor, {backgroundColor : "red", marginLeft : 24}]}>
							</Text>
							<Text style={[style.imgColor, {backgroundColor : 'purple'}]}>
							</Text>
							<Text style={[style.imgColor, {backgroundColor : 'black'}]}>
							</Text>							
							<Text style={{ flex:1 }}>
								57 Colors
							</Text>
						</View>

						<Text style = {style.goodsName}>
							{goodsInfo[i+1].goods_name}
						</Text>
						<Text style = {style.goodsPrice}>
							{goodsInfo[i+1].goods_price}	
						</Text>
					</View>
				</View>
			);
		}
		return (
		  <View style = {{ flex : 1, alignItems : 'center'}}>
		  	  <View style={{ flexDirection : 'row', flex : 1,  borderBottomWidth : 1, borderBottomColor : '#cccccc', marginTop : 18 }}>
					<TouchableWithoutFeedback onPress={this._pressButton.bind(this)}>
						<View>
							<Text style={{ color : 'black', lineHeight : 40, fontSize : 16, marginLeft : 5, fontWeight : 'bold'}}>Back</Text>
						</View>
					</TouchableWithoutFeedback>
					<Text style={{ color : 'black', flex : 1, marginLeft : 75, marginTop : 7, fontSize : 20}}>Azazie Jessica</Text>
					<View style={style.shopBag}>
						<Text style={style.shopBagText}>0</Text>
					</View>
					<Image style={{width:25, height:24, marginTop:7, marginRight:10}} source={require('./shop_bag.png')} />
				</View>
		  	  <Text style={[style.filter]}>
              	FILTER
              </Text>
		      {imgs}
	      </View>
    	);	
    }

}

