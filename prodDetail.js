import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ViewPagerAndroid,
  Button
} from "react-native";

var ViewPager = require('react-native-viewpager');

const imgInfo = {
	"default" : {
		front : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/5f/63/306618b4341dcca79ca01be6c6345f63.jpg',
		profile : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/5f/50/0fd4e608a064f249d382b51816e95f50.jpg',
		back : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/c6/b5/8b7d60214109bea2c357692dfbd3c6b5.jpg'
	},
	"DUSK" : {
		front : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/5f/63/306618b4341dcca79ca01be6c6345f63.jpg',
		profile : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/5f/50/0fd4e608a064f249d382b51816e95f50.jpg',
		back : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/c6/b5/8b7d60214109bea2c357692dfbd3c6b5.jpg'
	},
	"MULBERRY" : {
		front : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/df/32/5b1852a399d4c2fdd5e778a86613df32.jpg',
		profile : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/c8/ea/96448c06ec22d0da99805d4536d3c8ea.jpg',
		back : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/49/b3/6358bf77eb369b0af67928ee9a2749b3.jpg',
	},
	"BURGUNDY" : {
		front : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/2b/08/d02edccd810c0e56ec156226bc342b08.jpg',
		profile : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/37/dd/6580f260866a13774370b529dfb137dd.jpg',
		back : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/27/81/745ca4ab869c2a4ed093b2aaee292781.jpg',
	},
	"RUST" : {
		front : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/ed/bd/5d87769ef2e898c1464c5c8296a4edbd.jpg',
		profile : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/89/c6/019bd592d20e414985330c7aae4e89c6.jpg',
		back : 'https://dojygcq45t31s.cloudfront.net/upimg/o390/12/ce/3df75fbd111398fb5a8056c9920112ce.jpg',
	}
};

const colorBlock = [
	{
		colorName : 'MULBERRY',
		colorValue : '#9a375a'
	},
	{
		colorName : 'BURGUNDY',
		colorValue : '#8b1427'
	},
	{
		colorName : 'RUST',
		colorValue : '#b53c2d'
	},
	{
		colorName : 'RED',
		colorValue : '#c00017'
	},
	{
		colorName : 'WATERMELON',
		colorValue : '#fa7a79'
	},
	{
		colorName : 'FLAMINGO',
		colorValue : '#fca4ae'
	},
	{
		colorName : 'PAPAYA',
		colorValue : '#fa9178'
	},
	{
		colorName : 'TANGERINE',
		colorValue : '#fd9850'
	},
	// {
	// 	colorName : 'PEACH',
	// 	colorValue : '#ffe0c7'
	// },
	// {
	// 	colorName : 'DAFFODIL',
	// 	colorValue : '#ffffcd'
	// },
	// {
	// 	colorName : 'LEMON',
	// 	colorValue : '#fef984'
	// },
	// {
	// 	colorName : 'SAGE',
	// 	colorValue : '#e1f9bb'
	// },
	// {
	// 	colorName : 'LIME GREEN',
	// 	colorValue : '#dbf647'
	// },
	// {
	// 	colorName : 'CLOVER',
	// 	colorValue : '#aeb953'
	// },
	// {
	// 	colorName : 'MOSS',
	// 	colorValue : '#4e722d'
	// },
]

const styles = StyleSheet.create({  
    page: {  
        flex: 1,  
        height: 400,
        width: 200, 
        resizeMode: 'contain'  
    },
    fullstar: {
    	marginLeft : 4, 
    	width : 15, 
    	height : 15
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
  },
  tableView : {
  		flexDirection : 'row',
  		alignItems : 'center',
  		flex:1,
  		borderBottomWidth : 1,
  		borderBottomColor : '#cccccc',
  },
  tableViewText : {
  		flex : 1,
  		lineHeight : 40,
  		height : 40,
  		fontSize : 17
  },
  contentContainer : {
  	 	alignItems : 'center'
  },
  tableViewTouch : {
  		flex:1
  },
  tableViewImg : {
	  	height : 16,
	  	width : 16,
	  	position : 'absolute',
	  	right : 5,
	  	top : 10
  },
  orderDressText : {
	  	height:50,
	  	lineHeight:50,
	  	textAlign : 'center',
	  	flex : 1
  },
  tableContent : {
	  	borderBottomWidth : 1,
	  	borderBottomColor : '#cccccc',
	  	paddingBottom : 10,
	 	backgroundColor : 'rgb(249,249,249)',
	  	paddingTop : 10,
  },
  tableContentColor : {
  		borderBottomWidth : 1,
	  	borderBottomColor : '#cccccc',
	  	paddingBottom : 10,
	 	backgroundColor : 'rgb(249,249,249)',
	  	paddingTop : 10,
	  	flexDirection : 'row',
	  	justifyContent : 'center'
  },
  tableContentText : {
  		paddingLeft : 10
  },
  colorBlock : {
  		height: 36,
  		width: 36,
  		borderRadius : 18,
  		backgroundColor : "red",
  		marginLeft : 5,
  		marginBottom : 5
  }
});


export default class ProdDetail extends Component {
	constructor(props){
		super(props);
    	this.state = {
    		imgViewer : imgInfo.default,
			// dataSource : dataSource.cloneWithPages(this.state.imgViewer),
			tableView : {
				"color" : {
					show : 1,
					arrow : 'down'
				},
				"info" : {
					show : -1,
					arrow : 'right'
				},
				"shipping" : {
					show : -1,
					arrow : 'right'
				},
				"review" : {
					show : -1,
					arrow : 'right'
				}
			}, name : 'xx'
		}
	}


	_pressButton(){
		const {navigator} = this.props;
		if(navigator){
			navigator.pop();
		}
	}


	  _renderPage(data,pageID){
		    return (
		      <Image
		        source={{uri: data}}
		        style={styles.page} />
		    );
	  }

	_dialog(){
		return null;
	}

	_showTableView(type){
		if(this['state']['tableView'][type]['show'] == 1){
			return this._showTableContent(type);
		}
		else{
			return null;
		}
	}

	_getPropertyCount(object){  
	   let value, count = 0;  
	   for(value in object){  
	      if(object.hasOwnProperty(value)){
	         count++;  
	      }  
	   }  
	   return count;
	}  

	_changeOriginImg(colorName){
		var state = this.state;
		if(colorName == 'BURGUNDY' || colorName == 'MULBERRY' || colorName == 'RUST'){
			state.imgViewer = imgInfo[colorName];
		}else{
			state.imgViewer = imgInfo.MULBERRY;
		}
		
    	this.setState(state);
	}

	_showTableContent(type){
		switch(type){
			case 'color' :
				let colorBlocks = colorBlock.map(function(item,i){
					let block = [];
					block.push(
						<TouchableOpacity onPress={this._changeOriginImg.bind(this,item.colorName)}>
							<Image key={'colorImg-' + i} style={{ height:36, width:36, marginLeft: 5, zIndex:1002 }} source={require('./colorBlockBg.png')}>
								<View key={'color-' + i} style={{ height: 36, width: 36,borderRadius : 18,
									backgroundColor : item.colorValue,marginBottom : 5, zIndex:1001}}>
								</View>
							</Image>
						</TouchableOpacity>
						);
					return block;
				}.bind(this));
				return (
					<View style={styles.tableContentColor}>
						{colorBlocks}
					</View>
					);
				break;
			case 'info' :
				return (
					<View style={styles.tableContent} key='detailInfo'>
						<Text style={styles.tableContentText}>
							Jessica is our favorite mini dress with a strapless 
							neckline. Made of chiffon, Jessica features a cinched 
							empire waist. Available in full size range (A0-A30) and 
							custom sizing.
							{"\n"}{"\n"}
							Fabric: Chiffon
							{"\n"}{"\n"}
							<Text style={{ color:'#dc356d' }}>Size Chart</Text>
						</Text>
					</View>
				);
				break;
			case 'shipping' : 
				return (
					<View style={styles.tableContent} key='shippingInfo'>
						<Text style={styles.tableContentText}>
							Estimated production time 6 - 7 weeks
							*Need your made-to-order dress sooner? RUSH production 
							option available at checkout!
						</Text>
					</View>
				);
				break;
			case 'review' :
				break;
		}
	}

	_handleTable(type){
		let state = this.state;
		state['tableView'][type]['show'] = state['tableView'][type]['show'] * -1;
		if(state['tableView'][type]['arrow'] == 'down'){
			state['tableView'][type]['arrow'] = 'right';
		}else{
			state['tableView'][type]['arrow'] = 'down';
		}
		this.setState(state);
	}

	_getArrowImg(type){
		if(this['state']['tableView'][type]['arrow'] == 'down'){
			return (
				<Image style={styles.tableViewImg} source={require('./downArrow.png')}/>
				);
		}else{
			return (
				<Image style={styles.tableViewImg} source={require('./rightArrow.png')} />
				);
		}
	}

	render() {
		return (
			<View style={{flexDirection:'column'}}>
				<View style={{ flexDirection : 'row', flex : 1, borderBottomColor : '#cccccc', borderBottomWidth : 1, marginTop : 18}}>
					<TouchableWithoutFeedback onPress={this._pressButton.bind(this)}>
						<View>
							<Text style={{ color : 'black', lineHeight : 40, fontSize : 16, marginLeft : 5, fontWeight : 'bold'}}>Back</Text>
						</View>
					</TouchableWithoutFeedback>
					<Text style={{ color : 'black', flex : 1, marginLeft : 75, marginTop : 7, fontSize : 20}}>Azazie Jessica</Text>
					<View style={styles.shopBag}>
						<Text style={styles.shopBagText}>0</Text>
					</View>
					<Image style={{width:25, height:24, marginTop:7, marginRight:10}} source={require('./shop_bag.png')} />
				</View>
				<ScrollView style = {{ flexDirection : 'column', width:375 }} >
					<ViewPager
				        style={{flex : 1}}
				        dataSource={new ViewPager.DataSource({
							        	pageHasChanged: (p1, p2) => p1 !== p2,  
								    }).cloneWithPages(this.state.imgViewer)}
				        renderPage={this._renderPage}
				        isLoop={true}
				        autoPlay={true} />
					<View key='prodImg' style = {{paddingBottom:16,width : 355,alignItems : 'center', flexDirection : 'column', borderBottomColor : '#cccccc', borderBottomWidth:1, marginLeft : 10}}>
						<View style = {{ flexDirection : 'row', justifyContent : 'flex-start', marginTop : 20 }}>
							<Text style = {{ textAlign : 'left', flex : 1 }}> Azazie Jessica        $119</Text>
							<Image style = {styles.fullstar} source = {require('./fullstar.png')} />
							<Image style = {styles.fullstar} source = {require('./fullstar.png')} />
							<Image style = {styles.fullstar} source = {require('./fullstar.png')} />
							<Image style = {styles.fullstar} source = {require('./fullstar.png')} />
							<Image style = {styles.fullstar} source = {require('./fullstar.png')} />
							<Text style = {{ textAlign : 'left', marginRight : 10 }}> (20)</Text>
						</View>
					</View>
					<View key='prodInfo' style = {{ width: 355,marginLeft:10,flex : 1 }}>
						<TouchableOpacity activeOpacity = {0.7} style={styles.tableViewTouch} onPress = {this._handleTable.bind(this,'color')}>
							<View>
								<View style={styles.tableView}>
									<Text style={styles.tableViewText}>
										Color: <Text style={{ fontWeight:'bold' }}>Watermelon</Text>
									</Text>
									{this._getArrowImg('color')}
								</View>
							</View>
						</TouchableOpacity>
						{this._showTableView('color')}
						<TouchableOpacity activeOpacity = {0.7} style={styles.tableViewTouch} onPress = {this._handleTable.bind(this,'info')}>
							<View>
								<View style={styles.tableView}>
									<Text style={styles.tableViewText}>
										Product Info
									</Text>
									{this._getArrowImg('info')}
								</View>
							</View>
						</TouchableOpacity>
						{this._showTableView('info')}
						<TouchableOpacity activeOpacity = {0.7} style={styles.tableViewTouch} onPress = {this._handleTable.bind(this,'shipping')}>
							<View>
								<View style={styles.tableView}>
									<Text style={styles.tableViewText}>
										Shipping Information
									</Text>
									{this._getArrowImg('shipping')}
								</View>
							</View>
						</TouchableOpacity>
						{this._showTableView('shipping')}
						<TouchableOpacity activeOpacity = {0.7} style={styles.tableViewTouch} onPress = {this._handleTable.bind(this,'review')}>
							<View>
								<View style={styles.tableView}>
									<Text style={styles.tableViewText}>
										Review
									</Text>
									{this._getArrowImg('review')}
								</View>
							</View>
						</TouchableOpacity>
						{this._showTableView('review')}
					</View>
					<View key='prodRelated'>
					</View>
				</ScrollView>
				<View key='orderDress' style={{flexDirection : 'row',borderTopWidth:1,borderTopColor:'#cccccc',flex:1}}>
					<TouchableOpacity style={{flex:1}}>
						<View style={{flex:1}}>
							<Text style={styles.orderDressText}>
								ORDER SWATCH
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{flex:1}}>
						<View style={{flex:1, backgroundColor:'#dc356d',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
							<Text style={[styles.orderDressText,{color:'white'}]}>
								ORDER DRESS
							</Text>
						</View>
					</TouchableOpacity>
									</View>
			</View>
		);
	}
}
