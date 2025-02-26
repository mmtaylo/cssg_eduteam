import "./Bio.css";

function Bio({ followCount }){

    console.log(followCount);

    return <>
        <p class="handle">oweowes</p>
        <div class="name">
            <p class="bio">megan :3</p>
            <p class="pronouns">she/her</p>
        </div>
        <p class="bio">unc-chapel hill info sci ˎˊ˗ | tbs iota lambda ☆</p>
        <div class="profile-info">
            <p class="bio">Posts:<b> 3</b></p><p class="bio">Followers: <b>{followCount}</b></p><p class="bio">Following:<b> 400</b></p>
        </div>
    </>;
}

export default Bio;