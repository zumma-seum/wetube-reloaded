const fakeUser = {
    username:"Cho",
    loggedIn:true
}

export const trending = (req, res) => {
    const videos = [
        {
            title: "Hello",
        },
        {
            title: "good",
        },
        {
            title: "whatsup",
        },
        {
            title: "happy",
        }
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