import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Button,
  Modal,
} from "react-native";


const modalStyle = StyleSheet.create({
  // modal的样式  
  modalStyle: {  
    alignItems: 'center',  
    justifyContent:'flex-end',  
    flex:1, 
    // backgroundColor : '#cccccc',
  },  
  // modal上子View的样式  
  subView:{  
    // marginLeft:60,  
    // marginRight:60,  
    backgroundColor:'#fff',  
    alignSelf: 'stretch',  
    justifyContent:'center',  
    alignItems : 'center',
    borderWidth: 0.5,  
    borderColor:'#ccc',  
    height : 400
  },   
  // 按钮  
  addToBag:{  
    alignItems: 'center', 
    backgroundColor: '#dc356d',
    justifyContent : 'center',
    height: 46,
    marginBottom : 1,
    width:374
  },  
  buttonText:{ 
    fontSize:18,  
    color:'white',  
    textAlign:'center',  
  },  
  selectSize : {
  	flex :1,
  	flexDirection : 'row',
  	paddingLeft : 15,
  	paddingRight : 14
  },
  selectSizePrompt :{
  	color : 'rgb(114,114,114)',
  	textAlign : 'left',
  	fontSize : 14,
  	flex : 3,
  	height : 34,
  	lineHeight : 34
  },
  selectSizeChart : {
  	color : '#dc356d',
  	fontSize : 13,
  	height : 34,
  	lineHeight : 34,
  	textDecorationLine : 'underline'
  },
  sizeMapping : {
  	flex : 1,
  	flexDirection : 'column',
  	width : 350
  },
  sizeView : {
  	paddingLeft : 2,
  	paddingRight : 2,
  	// marginBottom : 10,
  	borderColor : 'rgb(114,114,114)',
  	flex : 1,
  	justifyContent : 'center',
  	alignItems : 'center',
  },
  sizeText: {
  	// marginBottom : 10,
  	fontSize : 14,
  	textAlign : 'center',
  	borderWidth : 1,
  	borderColor : 'rgb(230,230,230)',
  	width : 60,
  	height :28,
  	lineHeight : 28
  },
  tabContainer : {
  	flex : 1,
  	flexDirection : 'row',
  	alignItems : 'center',
  	width : 340
  },
  tabItem :{
  	flex : 1,
  	// borderTopLeftRadius:5,borderBottomLeftRadius:5 
  },
  tabText : {
  	textAlign : 'center',
  	lineHeight : 33,
  	height : 33,
  	fontSize : 14
  },
  active : {
  	color : 'white',
  	backgroundColor : '#dc356d'
  },
  static : {
  	color : '#dc356d',
  	borderWidth : 1,
  	borderColor : '#dc356d'
  },
  descriptionText:{
  	marginTop : 15,
  	flexDirection : 'row',
  	alignItems : 'flex-start',
  	padding : 10,
  	height : 100,
  	width : 350,

  },
  descriptChild: {
  	fontWeight : '100',
  	fontSize : 11
  },
  sizeStyle : {

  },
  prompt :{

  },
  inputSize:{
  	flex:1,
  	justifyContent:'flex-start',
  	alignItems:'flex-start',
  	flexDirection:'row',
  	width:350
  },
  inputText:{
  	flex:1,
  	color : 'rgb(114,114,114)',
  	textAlign:'center'
  },
  colorActive : {
   	borderColor : '#dc356d',
  },
  colorStatic : {
  	borderColor : 'rgb(230,230,230)'
  },
});  

const sizeMap = [
	{'size' : 'A0'},
	{'size' : 'A2'},
	{'size' : 'A4'},
	{'size' : 'A6'},
	{'size' : 'A8'},
	{'size' : 'A10'},
	{'size' : 'A12'},
	{'size' : 'A14'},
	{'size' : 'A16'},
	{'size' : 'A18'},
]



export default class OrderDress extends Component {
	constructor(props){
		super(props);
		this.state = {
			modalView : {
				animationType : 'none',
				transparent : true,
				visible : true
			},
			tabView : {
				standard : modalStyle.active,
				custom : modalStyle.static
			},
			tabShow : 'standard',
			sizeColor : {
				'A0' : modalStyle.colorStatic,
				'A2' : modalStyle.colorActive,
				'A4' : modalStyle.colorStatic,
				'A6' : modalStyle.colorStatic,
				'A8' : modalStyle.colorStatic,
				'A10' : modalStyle.colorStatic,
				'A12' : modalStyle.colorStatic,
				'A14' : modalStyle.colorStatic,
				'A16' : modalStyle.colorStatic,
				'A18' : modalStyle.colorStatic,
			},
			goodsNumber : 0
		}
	}

	_changeTab(type){
		let state = this.state;
		if(type == 'standard'){
			state.tabView.standard = modalStyle.active;
			state.tabView.custom = modalStyle.static;
		}else{
			state.tabView.custom = modalStyle.active;
			state.tabView.standard = modalStyle.static;
		}
		state.tabShow = type;

		this.setState(state);
	}

	_showSelectSize(){
		if(this.state.tabShow == 'standard'){
			return(
				<View key='selectSize' style={modalStyle.selectSize}>
	               		<Text style={modalStyle.selectSizePrompt}>
	               			SELECT YOUR DRESS SIZE
	               		</Text>
	               		<Text style={modalStyle.selectSizeChart}>
	               			Size Chart
	               		</Text>
	               </View>	               
				);
		}else{
			return null;
		}
	}

	_sizeSelected(size){
		let state = this.state;
		state['sizeColor'][size] = modalStyle.colorActive;
		for(let s in state['sizeColor']){
			if(s != size){
				state['sizeColor'][s] = modalStyle.colorStatic;
			}
		}
		this.setState(state);
	}

	_closeModal(){
		let state = this.state;
		state.modalView.visible = false;
		this.setState(state);
	}

	_showSizeMap(){
		let size = [];
		// size = sizeMap.map(function(item,i){
		// 	return (
		// 		// todo : 元素换行问题， react-native-css 包可以解决这个问题
		// 		<TouchableWithoutFeedback key={'size-touch'+i}>
		// 			<View key={'size'+i} style={modalStyle.sizeView}>
		// 				<Text style={modalStyle.sizeText}>{item}</Text>
		// 			</View>
		// 		</TouchableWithoutFeedback>
		// 		);
		// }.bind(this));
		if(this.state.tabShow == 'standard'){
			for(let i = 0; i < sizeMap.length; i = i + 5){
				size.push(
						<View key={'sizeView' + i} style={{flexDirection:'row', flex:1}}>
							<TouchableWithoutFeedback key={'size-touch'+i} onPress={this._sizeSelected.bind(this,sizeMap[i]['size'])}>
								<View key={'size'+i} style={modalStyle.sizeView}>
									<Text style={[modalStyle.sizeText,this.state.sizeColor[sizeMap[i]['size']]]}>{sizeMap[i]['size']}</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback key={'size-touch1'+i} onPress={this._sizeSelected.bind(this,sizeMap[i+1]['size'])}>
								<View key={'size1'+i} style={modalStyle.sizeView}>
									<Text style={[modalStyle.sizeText,this.state.sizeColor[sizeMap[i+1]['size']]]}>{sizeMap[i+1]['size']}</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback key={'size-touch2'+i} onPress={this._sizeSelected.bind(this,sizeMap[i+2]['size'])}>
								<View key={'size2'+i} style={modalStyle.sizeView}>
									<Text style={[modalStyle.sizeText,this.state.sizeColor[sizeMap[i+2]['size']]]}>{sizeMap[i+2]['size']}</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback key={'size-touch3'+i} onPress={this._sizeSelected.bind(this,sizeMap[i+3]['size'])}>
								<View key={'size3'+i} style={modalStyle.sizeView}>
									<Text style={[modalStyle.sizeText,this.state.sizeColor[sizeMap[i+3]['size']]]}>{sizeMap[i+3]['size']}</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback key={'size-touch4'+i} onPress={this._sizeSelected.bind(this,sizeMap[i+4]['size'])}>
								<View key={'size4'+i} style={modalStyle.sizeView}>
									<Text style={[modalStyle.sizeText,this.state.sizeColor[sizeMap[i+4]['size']]]}>{sizeMap[i+4]['size']}</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					);
			}
		}else{
			size.push(
				<Image key='tabImg' style={{width:250, height:350, flex:1, resizeMode : 'contain'}} source={require('./customerSizeBg.png')} />
				);
		}
		
		return (
			<View key='sizeMapping' style={modalStyle.sizeMapping}>
				{size}
			</View>
			);
	}

	_showSizeCheck(){
		if(this.state.tabShow == 'standard'){
			return (
				<View key='tabSizeCheck' style={modalStyle.descriptionText}>
	              		<Text style={[{color:'#dc356d'},modalStyle.descriptChild]}>Size Check:</Text>
	              		<Text style={modalStyle.descriptChild}> Hi lovely! Check our handy size chart to confirm that {"\n"}
	              		you're ordering the right size.</Text>
	              </View>
				);
		}else{
			return null;
		}
	}

	_addToBag(){
		let state = this.state;
		state.goodsNumber ++;
		this.setState(state);
		this.props.updateBag();
	}

	render(){
		return(
			<Modal  
	           animationType='slide'  
	           transparent={true}  
	           visible={this.state.modalView.visible} 
	           onShow={() => {}}  
	           onRequestClose={() => {}} >  
	           <View style={modalStyle.modalStyle}>  
	             <View style={modalStyle.subView}>
	               <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
	               	<TouchableWithoutFeedback onPress={this._closeModal.bind(this)}>
	               		<Image style={{height:16,width:16}} source={require('./close.png')} />
	               	</TouchableWithoutFeedback>
	               </View>
	               <View style={modalStyle.tabContainer}>
	               		<View style={[modalStyle.tabItem]}>
		               		<TouchableWithoutFeedback onPress={this._changeTab.bind(this,'standard')}>
		               			<View>
			               			<Text style={[this.state.tabView.standard,modalStyle.tabText]}>
			               				STANDARD SIZE
			               			</Text>
		               			</View>
		               		</TouchableWithoutFeedback>
	               		</View>
	               		<View style={[modalStyle.tabItem,{}]}>
		               		<TouchableWithoutFeedback onPress={this._changeTab.bind(this,'custom')}>
		               			<View>
			               			<Text style={[this.state.tabView.custom,modalStyle.tabText]}>
			               				CUSTOM SIZE
			               			</Text>
		               			</View>
		               		</TouchableWithoutFeedback>
	               		</View>
	               </View>
	               {
	               		(this.state.tabShow == 'standard') 
	               			? 
	               			null 
	               			: 
	               		<View style={modalStyle.inputSize}>
	               			<Text style={modalStyle.inputText}>INPUT YOUR DRESS SIZE</Text>
	               		</View>
	               }
	               {this._showSelectSize()}
	               {this._showSizeMap()}
	               {this._showSizeCheck()}
	               <View style={modalStyle.addToBag}>
	                 <TouchableHighlight underlayColor='transparent' onPress = {this._addToBag.bind(this)} >
	              		<Text style={modalStyle.buttonText}>
	              			ADD TO BAG
	              		</Text>
	                 </TouchableHighlight>  
	               </View>  
	             </View>  
	           </View>  
	        </Modal>  
			);
	}
}

