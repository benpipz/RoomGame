import React from "react";

const LivestreamEmbed = () => {
  const embedCode =
    '<iframe width="800" height="450" src="https://app.webcam-hd.com/lesarcs/arcabulle" frameborder="0" allowfullscreen></iframe>';

  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};

export default LivestreamEmbed;
