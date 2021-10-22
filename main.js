const userSocialMedia = { 
    github: "MarianaCRuiz",
    youtube: "",
    instagram: "maricr123",
    facebook: "mariana.ruiz.79462",
    twitter: "Mariana38868749"
}
function changeUserSocialMedia() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${userSocialMedia[social]}`
    }
}
changeUserSocialMedia()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${userSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHubLink.href = data.html_url
        userProfilePhoto.src = data.avatar_url
        userGitHubLogin.textContent = data.login
    })
}
getGitHubProfileInfos()