import React from 'react'
import {Text, View, Button, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {getImages} from '../../ducks/images'

 const GalleryList = (props) => {
	const listImage = props.users.map(item => {
	  return	item.photos.map(image => {
			return <View>
					<Image key={image.id}
					style={{width: 50, height: 50}}
					source={{uri: `${image.urls.small}`}}/>
				</View>

		})
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
