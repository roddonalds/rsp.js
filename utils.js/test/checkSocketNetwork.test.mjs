import { checkSocketNetwork } from '../index.mjs'

import setup from '../../setup.mjs';

checkSocketNetwork(setup.socket.domain, setup.socket.address)
