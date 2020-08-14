import React from 'react';
import { View } from 'react-native';
import SongsList from '../components/SongsList'
import WithLoading from '../components/WithLoading'
import { connect } from 'react-redux';
import {getMoviesFromApiAsync} from '../actions/SongAction'

const SongsListWithLoading = WithLoading(SongsList)

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getSongs()
    }
    render() {
    return (
        <View style={{ flex: 1}}>
            <SongsListWithLoading isLoading={this.props.loading}
                songs={this.props.songsList}
                navigation={this.props.navigation}
            />
        </View>
    );
};
}

const mapStateToProps = state => {
    return {
        songsList: state.songsList,
        loading: state.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSongs: () => { dispatch(getMoviesFromApiAsync()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);