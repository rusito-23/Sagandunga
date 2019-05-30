import {CONSUMER_TYPE, PROVIDER_TYPE} from '../constants/generalConstants';
import {faDollarSign, faEnvelope, faPhone, faStore, faUser} from '@fortawesome/fontawesome-free-solid';

const items = {
    username: {
        label: 'Username',
        attr: 'username',
        faIcon: faUser
    },
    email: {
        label: 'Email',
        attr: 'email',
        faIcon: faEnvelope
    },
    balance: {
        label: 'Balance',
        attr: 'balance',
        faIcon: faDollarSign
    },
    storeName: {
        label: 'Store Name',
        attr: 'storename',
        faIcon: faStore
    },
};

export function getItemsFor(user) {
    const common = [items.username, items.email, items.balance];
    switch (user.kind) {
        case CONSUMER_TYPE:
            return common;
        case PROVIDER_TYPE:
            return [items.storeName].concat(common);
        default:
            return [];
    }
}

const actions = {
    contact: {
        label: 'CONTACT',
        faIcon: faPhone
    },
    deposit: {
        label: 'DEPOSIT',
        faIcon: faDollarSign // TODO: do not repeat symbol?
    }
};

export function getActionsFor(user) {
    const common = [ actions.contact ];
    switch (user.kind) {
        case CONSUMER_TYPE:
            return common.concat([actions.deposit]);
        case PROVIDER_TYPE:
            return common;
        default:
            return [];
    }
}