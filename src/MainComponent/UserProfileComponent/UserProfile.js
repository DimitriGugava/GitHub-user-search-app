import "./UserProfile.css";
import userPhoto from "../../icons/userPhoto.svg";
import buildings from "../../icons/buildings.svg";
import clip from "../../icons/clip.svg";
import locationindicator from "../../icons/locationindicator.svg";
import twitter from "../../icons/twitter.svg";

const UserProfile = (props) => {
  console.log(props.changedName);
  return (
    <div
      className="userProfileContainer"
      style={{
        backgroundColor: props.dark ? "rgba(30, 42, 71, 1)" : "",
      }}
    >
      <div
        className="userDemographicsContainer"
        style={{
          backgroundColor: props.dark ? "#1E2A47" : "",
        }}
      >
        <img src={props.changedName.avatar_url} className="userPhoto" />
        <div
          className="userDataBox"
          style={{
            backgroundColor: props.dark ? "#1E2A47" : "",
          }}
        >
          <a
            className="userName"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.name}
          </a>
          <a className="userID"></a>
          <a
            className="userJoinedData"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            Joined: {props.changedName.created_at}
          </a>
        </div>
      </div>
      <p
        className="userAboutMe"
        style={{
          color: props.dark ? "white" : "",
        }}
      >
        {props.changedName.bio}
      </p>
      <div
        className="userGithubDataBox"
        style={{
          backgroundColor: props.dark ? "rgba(30, 42, 71, 1)" : "",
        }}
      >
        <div
          className="gitDataTitle"
          style={{
            color: props.dark ? "white" : "",
          }}
        >
          Repos
          <a
            className="number"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.public_repos}
          </a>
        </div>
        <div
          className="gitDataTitle"
          style={{
            color: props.dark ? "white" : "",
          }}
        >
          Followers
          <a
            className="number"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.followers}
          </a>
        </div>
        <div
          className="gitDataTitle"
          style={{
            color: props.dark ? "white" : "",
          }}
        >
          Following
          <a
            className="number"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.following}
          </a>
        </div>
      </div>
      <div className="contactAllInfoContainer">
        <div className="contactBox">
          <img src={locationindicator} className="contactImg" />
          <a
            className="address"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.location}
          </a>
        </div>
        <div className="contactBox">
          <img src={clip} className="contactImg" />
          <a
            className="address"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.html_url}
          </a>
        </div>
        <div className="contactBox" id="twitterbox">
          <img src={twitter} className="contactImg" />
          <a
            className="address"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.twitter_username}
          </a>
        </div>
        <div className="contactBox" id="building">
          <img src={buildings} className="contactImg" />
          <a
            className="location"
            style={{
              color: props.dark ? "white" : "",
            }}
          >
            {props.changedName.company}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
