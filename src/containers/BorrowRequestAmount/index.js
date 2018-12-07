import React, { Component } from 'react';
import BorrowRequestAmount from '../../components/BorrowRequestAmount';

export default class BorrowRequestAmountContainer extends Component {

    goToTimeSelection = () => {
        this.props.navigation.navigate('Weeks');
    }

    render(){
        return(
            <BorrowRequestAmount onGoToTimeSelection={this.goToTimeSelection} />
        )
    }
}