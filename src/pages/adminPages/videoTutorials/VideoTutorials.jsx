import ReactPlayer from "react-player";
import "./videoTutorials.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { videoTutorialsGet } from "../../../app/store/reducers/admin/videoTutorials/videoTutorialsThunks";
import { useVideoTutorials } from "../../../app/store/reducers/admin/videoTutorials/videoTutorialsSlice";

export const VideoTutorials = () => {
  const dispatch = useDispatch();
  const {videos} = useVideoTutorials();
  console.log(videos);
  
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
  useEffect(() => {
    dispatch(videoTutorialsGet())
  }, [dispatch])
  return (
    <div className="container">
      {videos &&
        videos.map((video) => (
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
              src={video.youtube_url}
            />
          </div>
        ))}
    </div>
  );
};
