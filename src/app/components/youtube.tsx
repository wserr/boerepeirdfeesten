interface YoutubeProps {
    code: string
}

export const Youtube = (props: YoutubeProps) => (
  <div className="embed-container">
    <iframe
      src={`https://www.youtube.com/embed/${props.code}`}
      allowFullScreen
    ></iframe>
  </div>
);
