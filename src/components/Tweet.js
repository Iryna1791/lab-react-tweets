import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions'
function Tweet(props) {
  return (
    <div className="tweet">
    <ProfileImage image= { props.tweet.user.image } />
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
          <User userData={props.tweet.user} />

            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>

          <span className="timestamp">Nov 30, 2020
          <Timestamp time={props.tweet.timestamp} />
          </span>
        </div>

        <p className="message">
        <Message message={props.tweet.message} />
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
          
        </p>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
