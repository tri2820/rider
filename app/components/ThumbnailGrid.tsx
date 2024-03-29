import { useEffect, useState } from "react";
import VideoThumbnail from "./videoThumbnail";

export default function ThumbnailGrid({ videos, onThumbnailClick }: any) {
    // console.log(videos)
    const thumbnails = videos?.map((video: any) => {
        const thumbnail = video.videoThumbnails.find((x: any) => x.quality == 'maxresdefault');
        return <VideoThumbnail
            key={video.videoId}
            onThumbnailClick={onThumbnailClick}
            author={video.author} title={video.title} url={thumbnail.url} videoId={video.videoId}
        />
    })

    return <div className="@container">
        <div className="grid grid-cols-1 @lg:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 gap-6">
            {
                thumbnails
            }
        </div>
    </div>
}