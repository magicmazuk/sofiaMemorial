function getEmbedUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      const parts = u.pathname.split("/").filter(Boolean);
      const id = parts[1];
      if (parts[0] === "embed" && id) return `https://www.youtube.com/embed/${id}`;
    }
    if (host === "youtu.be") {
      const id = u.pathname.replace("/", "");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (host.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    return url;
  } catch (_e) {
    return url;
  }
}

export default function VideoEmbeds({ videos = [] }){
  const list = Array.isArray(videos) ? videos : [];
  return (
    <div className="videoGrid">
      {list.map((v, i) => {
        const src = getEmbedUrl(v.url || "");
        const title = v.title || "Embedded video";
        return (
          <div className="videoFrame" key={i}>
            <iframe
              src={src}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        );
      })}
    </div>
  );
}
