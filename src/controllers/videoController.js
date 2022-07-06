const fakeUser = {
    username:"Cho",
    loggedIn:true
}

export const trending = (req, res) => {
    const videos = [
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
            views: 10,
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
    return res.render("home", {pageTitle:"Home", videos});
}
export const see = (req, res) => {
    return res.render("watch", {pageTitle:"Watch"});
};
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"});

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete video");