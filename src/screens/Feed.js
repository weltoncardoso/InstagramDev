import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';
import { getFeed } from '../actions/FeedActions';
import FeedItemFake from '../components/feed/FeedItemFake';
import FeedItem from '../components/feed/FeedItem';

export class Feed extends Component {
	static navigationOptions = {
		title:'Devstagram'
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.verifyStatus = this.verifyStatus.bind(this);
	}

	componentDidMount() {
		this.props.getFeed();
	}

	componentDidUpdate() {
		this.verifyStatus();
	}

	verifyStatus() {
		if(this.props.status === 2) {
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				key:null,
				actions:[
					NavigationActions.navigate({routeName:'Login'})
				]
			}));
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{this.props.feedLoading == true &&
					<View>
						<FeedItemFake />
						<FeedItemFake />
					</View>
				}
				{(this.props.feedLoading == false && this.props.feed.length == 0) && 
					<View style={styles.feedZero}>
						<Text>Não há itens a serem mostrados</Text>
					</View>
				}
				{(this.props.feedLoading == false && this.props.feed.length > 0) && 
					<FlatList
						data={this.props.feed}
						renderItem={({item})=><FeedItem />}
						keyExtractor={(item)=>item.id}
						style={styles.feed}
					/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	feedZero:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	feed:{
		flex:1
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		feed:state.feed.feed,
		feedLoading:state.feed.feedLoading
	};
};

const FeedConnect = connect(mapStateToProps, {checkLogin, getFeed})(Feed);
export default FeedConnect;