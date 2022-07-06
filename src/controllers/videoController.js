let videos = [
    {
        title: "first Hello",
        rating: 5,
        comments: 2,
        createdAt: "10 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "second good",
        rating: 3,
        comments: 1,
        createdAt: "1 minutes ago",
        views: 1,
        id: 2,
    },
    {
        title: "third go",
        rating: 5,
        comments: 0,
        createdAt: "just right now",
        views: 0,
        id: 3,
    },
];

export const trending = (req, res) => {
    return res.render("home", {pageTitle:"Home", videos});
}
export const watch = (req, res) => {
    const {id} = req.params; /* const id = req.params.id; */
    /*  console.log("Show video", id); */
    const video = videos[id-1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
};
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle: `Editing ${video.title}`, video});
}
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body; /* const title = req.body.title; input에서 데이터를 얻을 수 있다. */
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req,res) => { 
    return res.render("upload");
};
export const postUpload = (req,res) => {
    /* console.log(req.body); => upload.pug에서 input에 name을 꼭 넣어야 한다 */
    const {title} = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: "just now",
        views: 0,
        id: videos.length+1,
    }
    videos.push(newVideo);
    return res.redirect("/");
};