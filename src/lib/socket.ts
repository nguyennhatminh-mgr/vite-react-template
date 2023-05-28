import config from 'config';
import { io } from 'socket.io-client';

const URL = config.serverUrl;

export const socket = io(URL, {
  autoConnect: false,
});
