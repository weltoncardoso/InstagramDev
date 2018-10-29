import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FeedItem extends Component {

	render() {
		return (
			<View style={styles.feedContainer}>
				<View style={styles.feedHeader}>
					<View style={styles.avatar}></View>
					<View style={styles.userName}></View>
					<View style={styles.dateArea}>
						<View style={styles.postDate}></View>
					</View>
				</View>
				<View style={styles.feedBody}></View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	feedContainer:{
		width:'100%',
		height:300
	},
	feedHeader:{
		height:70,
		flexDirection:'row',
		alignItems:'center'
	},
	avatar:{
		width:40,
		height:40,
		backgroundColor:'#00FF00',
		marginLeft:10,
		marginRight:15,
		borderRadius:20
	},
	userName:{
		width:150,
		height:15,
		backgroundColor:'#00FF00'
	},
	dateArea:{
		flex:1,
		alignItems:'flex-end'
	},
	postDate:{
		width:80,
		height:15,
		backgroundColor:'#00FF00',
		marginRight:10
	},
	feedBody:{
		flex:1,
		backgroundColor:'#00FF00'
	}
});















