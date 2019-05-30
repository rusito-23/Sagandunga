import React, {Component} from 'react';
import {BaseContainer} from '../../../templates/BaseContainer/BaseContainer';
import {BaseErrorMessage} from '../../../templates/Messages/ErrorMessages';

export default class ProvidersList extends Component {

    render() {
        if (this.props.providersError) {
            return <BaseErrorMessage
                visible={true} message={'The providers list could not be loaded.'}/>
        }

        return (
            <BaseContainer
                title={'Available stores'} >

                {this.props.providers.map((provider) => {
                    return (
                        <div>
                            {provider.username}
                            {provider.storeName}
                        </div>
                    )
                })}
            </BaseContainer>
        )
    }
}