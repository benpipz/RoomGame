import React from "react";

const LivestreamEmbed = () => {
  const embedCode =
    '<iframe src="https://app.webcam-hd.com/lesarcs/arcabulle" frameborder="0" allowfullscreen></iframe>';

  return (
    <div className="iframe" dangerouslySetInnerHTML={{ __html: embedCode }} />
  );
};

export default LivestreamEmbed;
