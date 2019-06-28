import React from 'react'
import {Text, View, Image} from 'react-native'

const GalleryItem = (props) => {
//	const image = props.navigation.state.params.url
	console.log(props.navigation.state.params, 'image')
	return (
		<View>
			<Image style={{width: "100%", height: "100%"}}
				source={{uri: props.navigation.state.params.url}}/>
		</View>
	)
}

export default GalleryItem
