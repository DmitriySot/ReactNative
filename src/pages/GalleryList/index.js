import React from 'react'
import {Text, View, Button, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getImages} from '../../ducks/images'

 const styles=StyleSheet.create({
	 galleryList: {
	 	marginLeft: 20,
	   marginBottom: 10,
	 	 display: 'flex',
		 flexWrap: 'nowrap',
		 flexDirection: 'row',
	 },
	 column: {
		 marginLeft: 20,
	 },
	 bold: {
	 	fontWeight: 'bold',
	 },
	 line: {
	 	marginBottom: 10,
	 	borderBottomColor: 'pink',
		borderBottomWidth: 3,
	 }
 })

 const GalleryList = (props) => {

	 const {navigate} = props.navigation
	 		const listImage = props.users.map(item => {
				return <View style={styles.line}>{
						item.photos.map(image => {

							return <View key={image.id} style={styles.galleryList}>
							<TouchableOpacity onPress={() => navigate('Image', {url: image.urls.full})}>
								<Image
									style={{width: 50, height: 50}}
									source={{uri: image.urls.small}}/>
							</TouchableOpacity>
							<View style={styles.column}>
								<Text style={styles.bold}> {image.user.name}</Text>
								<Text> {image.user.location}</Text>
							</View>

						</View>

					})}
				</View>
		 }
		)
	// console.info("__props__", props)
	return (
		<ScrollView>
			{listImage}
			<Button
				onPress={props.getImages}
				title="ClickMe">
			</Button>
		</ScrollView>
	)
}

export default connect(({images}) => ({
	loading:images.loading,
	users: images.users
				}), {getImages})( GalleryList)
