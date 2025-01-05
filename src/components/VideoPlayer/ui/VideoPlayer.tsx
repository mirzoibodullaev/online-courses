import ReactPlayer from "react-player";
import cls from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
    url: string;
}

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
    return (
        <div className={cls.videoContainer}>
            <ReactPlayer url={url} controls />
        </div>
    );
};
