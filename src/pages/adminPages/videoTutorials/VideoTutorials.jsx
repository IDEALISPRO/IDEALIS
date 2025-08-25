import ReactPlayer from "react-player";
import "./videoTutorials.scss";
export const VideoTutorials = () => {
  const videoTutorials = [
    {
      id: 1,
      link: "https://youtu.be/0F4WIZeo_KU?si=3I1fVsNAi7QqOZa3",
    },
    {
      id: 2,
      link: "https://youtu.be/0F4WIZeo_KU?si=3I1fVsNAi7QqOZa3",
    },
    {
      id: 3,
      link: "https://youtu.be/0F4WIZeo_KU?si=3I1fVsNAi7QqOZa3",
    },
  ];
  return (
    <div className="container">
      {videoTutorials &&
        videoTutorials.map((video) => (
          <div className="video" key={video.id}>
            <ReactPlayer
              controls={true}
              config={{
                youtube: {
                  playerVars: { rel: 0, modestbranding: 1 },
                },
              }}
              width={"100%"}
              height={"100%"}
              src={video.link}
            />
          </div>
        ))}
    </div>
  );
};
