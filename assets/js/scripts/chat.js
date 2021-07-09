
const messages = [
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
];
const chatConversations = [
  { id: 0, name: "khaalid", messages: messages },
  { id: 1, name: "john", messages: messages },
  { id: 2, name: "liskov", messages: messages },
];

let conversationIndex = 0;

const createChatConversation = (search = '')=>{

    $('#inbox').append(`
    <div  class="chat_list active_chat">
    <div id='conversation' class="chat_people ">
      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
      <div class="chat_ib">
        <h5>John Doe<span class="chat_date">Dec 25</span></h5>
        <p >Test, which is a new approach to have all solutions
          astrology under one roof.</p>
      </div>
    </div>
    </div>
    `)
    chatConversations.map(chat=>{
        if (chat.name.toLowerCase().includes(search)) {
            $('#inbox').append(`
            <div  class="chat_list">
            <div id='conversation' class="chat_people">
              <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div  class="chat_user chat_ib">
                <h5>${chat.name}<span class="chat_date">Dec 25</span></h5>
                <p >${chat.messages[chat.messages.length - 1].message}</p>
              </div>
            </div>
          </div>
            `)
        }
  
    })
}

setTimeout(() => {
  chatConversations.find(chat=>chat.id === conversationIndex).messages.forEach((message) => {
    if (message.sent) {
      $("#msg_history").append(`
            <div class="outgoing_msg">
            <div class="sent_msg">
              <p class="bg-primary">${message.message}</p>
              <span class="time_date"> ${message.time}   |    ${message.date}</span> </div>
          </div>
            `);
    } else {
      $("#msg_history").append(`
    <div class="incoming_msg">
    <div class="received_msg">
      <div class="received_withd_msg">
        <p>${message.message}</p>
        <span class="time_date"> ${message.time}    |    ${message.date}</span></div>
        </div>
    </div>
        
    `);
    }
  });
}, 3000);

// GET THE INPUT OF THE USER WHEN HE ENTERS
const sendMessage  = (message) => {
    $("#msg_history").append(`
    <div class="outgoing_msg">
    <div class="sent_msg">
      <p class="bg-primary" >${message}</p>
      <span class="time_date"> now   |    now</span> </div>
  </div>
    `);
}

createChatConversation()

$('#send').click(() => {
   const message = $('#send_message').val();
   sendMessage(message)
   $('#send_message').text() = ''
})


$('#search').on('keypress',() => {
    $('#inbox').empty();
    createChatConversation($('#search').val().toLowerCase().trim())
    
})
