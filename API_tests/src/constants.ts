export const expectedGetPostID1: { userId: number; id: number; title: string; body: string } = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"  
};

export const expectedCommentsPostID1: { postId: number; id: number; name: string; email: string; body: string } = {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
};

export const expectedPutToPostID1: { name: string; job: string } = {
    name: "morpheus",
    job: "zion resident",
};

export const expectedPutToUserID3WithPhoneNumber: { id: number; username: string; phone: number } = {
    id: 3,
    username: "Carry", 
    phone: -5585
};

export const expectedPutToUserID3: { id: number; username: string; phone: string } = {
    id: 3,
    username: "Carry", 
    phone: "1-463-123-5000"
};

export const expectedPutToUserID3Empty: { id: number} = {
    id: 3
};

export const newUserId101ToPostMethod: { userId: number; id: number; title: string; body: string } = {
    userId: 11, 
    id: 101, 
    title: "potassium chloride", 
    body: "leader culpa\nsoluta molestias\nmolestias"
};

export const createId21WithNull: { userId: string; id: number; title: string; completed: null } = {
    userId: "1",
    id: 201,
    title: "qui ullam ratione quibusdam voluptatem quia omnis 1",
    completed: null
};

export const addedNewStringToExistingId3: { albumId: number; id: number; title: string; url: string; thumbnailUrl: string; name: string; job: string} = {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
    name: "morpheus",
    job: "zion resident"
};

export const overwriteExistingId3WithNewStrings: { title: string; url: string} = {
    title: "updated title",
    url: "https://via.placeholder.com/600/24f355/changedURl"
};