export const OutgoingChatMessage = ({input})=>{
    return (
          <div className="outgoing_msg">
            <div className="sent_msg">
              <p className="bg-primary">{input}</p>
              <span className="time_date"> 11:01 AM | June 9</span>
            </div>
          </div>
    )
}