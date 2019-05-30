import {faList, faShoppingCart} from '@fortawesome/fontawesome-free-solid';
import {CONSUMER_TYPE, PROVIDER_TYPE} from '../constants/generalConstants';


const actions = {
    availableProvs: {
        label: 'ORDER NOW',
        message: 'Search for your favorite provider ' +
                 'and order some food right away!',
        faIcon: faShoppingCart
    },
    myItems: {
        label: 'MY ITEMS',
        message: 'Manage your offered products',
        faIcon: faList
    }
};

export function getHomeActions(user) {
    switch (user.kind) {
        case CONSUMER_TYPE:
            return [actions.availableProvs];
        case PROVIDER_TYPE:
            return [actions.myItems];
        default:
            return []
    }
}
