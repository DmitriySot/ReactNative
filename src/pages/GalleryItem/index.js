import React from 'react'
import {Text, View, Image} from 'react-native'
import {Bubbles} from 'react-native-loader'

const styles = {
	loader: {
		position: 'absolute',
		top: '40%',
		left: '40%',
	}
}

const GalleryItem = (props) => {
//	const image = props.navigation.state.params.url
	console.log(props.navigation.state.params, 'image')
	return (
		<View>
			<View style={styles.loader}>
				<Bubbles size={10} color='#000' />
			</View>
			<Image style={{width: "100%", height: "100%", zIndex: 1}}
				source={{uri: props.navigation.state.params.url}}/>
		</View>
	)
}

export default GalleryItem
