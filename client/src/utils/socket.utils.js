export const sendGroupNum = (groupNum, socket) => {
    if(groupNum == '') return
    socket.emit('join_room', groupNum);
}

export const sendMessage = (message, groupNum, socket) => {
    socket.emit('send_message', { message, groupNum } );
};