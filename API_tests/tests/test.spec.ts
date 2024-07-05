import * as superagent from 'superagent';
import {expect} from '@jest/globals';
import * as functions from '../src/functions';
import * as constants from '../src/constants';


describe('TEST GET method', () => {
    beforeEach(() => {
        console.log(`${expect.getState().currentTestName}`);
        }
      );

    test('1: GET (return all LIST with POSTS)', async () => {
        const response = await functions.getRequest("https://jsonplaceholder.typicode.com/posts", "Error: something went wrong", 200);
        expect(response.status).toBe(200);
    });

    test('2: GET (return POST ID = 1)', async () => {
        const response = await functions.getRequest("https://jsonplaceholder.typicode.com/posts/1", "Not Found", 200);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(constants.expectedGetPostID1);
    });

    test('3: GET (check presense of several items in comments, POST ID = 1)', async () => {
        const response = await functions.getRequest("https://jsonplaceholder.typicode.com/posts/1/comments", "Not Found", 200);
        expect(response.status).toBe(200);
        expect(response.body).toContainEqual(constants.expectedCommentsPostID1);
    });

    test('4: GET (check empty POST ID = 123 in comments)', async () => {
        const response = await functions.getRequest("https://jsonplaceholder.typicode.com/comments?postId=123", "Not Found", 200);
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]); 
    });

    test('5: GET (check inconsistent Url with 404 Not Found Error)', async () => {
        await functions.getRequest("https://jsonplaceholder.typicode.com/albums/comments?postId=1", "Not Found", 404);
    });

});
 

describe('TEST PUT method', () => {
    beforeEach(() => {
        console.log(`${expect.getState().currentTestName}`);
        }
      );

    test('1: PUT (rewrite existing POST ID=1 with new data)', async () => {
        const putSource = { name: "morpheus", job: "zion resident"};
        const res = await functions.putRequest("https://jsonplaceholder.typicode.com/posts/1", putSource, "Error: something went wrong", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(constants.expectedPutToPostID1.name);
        expect(res.body.job).toEqual(constants.expectedPutToPostID1.job);
        expect(res.body.title).toBeUndefined();
        expect(res.body.userId).toBeFalsy();
    });

    test('2: PUT (overwrite existed fields and check that ID cannot be changed)', async () => { 
        const putSource2 = { id: 4, username: "Carry", phone: "1-463-123-5000"};
        const res = await functions.putRequest("https://jsonplaceholder.typicode.com/users/3", putSource2, "Not Found", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(constants.expectedPutToUserID3.id);
        expect(res.body.username).toBeDefined();
        expect(res.body.phone).toBeTruthy();
        expect(res.body.website).toBeUndefined();
    });

    test('3: PUT (check inconsistent phone entry To User ID=3)', async () => { 
        const putSource3 = { username: "Carry", phone: 1-463-123-5000};
        const res = await functions.putRequest("https://jsonplaceholder.typicode.com/users/3", putSource3, "Not Found", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body.username).toBe(constants.expectedPutToUserID3WithPhoneNumber.username);
        expect(res.body.phone).toEqual(constants.expectedPutToUserID3WithPhoneNumber.phone);
        expect(res.body.company).toBeUndefined();
        expect(res.body.email).toBeFalsy();
    });

    test('4: PUT (check incorrect info to send To Photos ID=3)', async () => {
        const putSource2 = 123;
        await functions.putRequest("https://jsonplaceholder.typicode.com/photos/3", putSource2, "Internal Server Error", 500);
    });

    test('5: PUT (check empty info to send TO Photos ID=3)', async () => {
        const putSource2 = "";
        const res = await functions.putRequest("https://jsonplaceholder.typicode.com/photos/3", putSource2, "Not Found", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(constants.expectedPutToUserID3Empty);
    });

});

describe('TEST POST method', () => {
    beforeEach(() => {
        console.log(`${expect.getState().currentTestName}`);
        }
      );

    test('1: POST (overwrite of existing list with new id)', async () => {
        const postSource = { userId: 11, title: "potassium chloride", body: "leader culpa\nsoluta molestias\nmolestias"}
        const res = await functions.postRequest("https://jsonplaceholder.typicode.com/posts", postSource, "Error: something went wrong", 201);
        expect(res.statusCode).toEqual(201);
        expect(res.body.userId).toEqual(constants.newUserId101ToPostMethod.userId);
        expect(res.body.title).toEqual(constants.newUserId101ToPostMethod.title);
        expect(res.body.id).toEqual(constants.newUserId101ToPostMethod.id);
        expect(res.body.body).toEqual(constants.newUserId101ToPostMethod.body);
    });  

    test('2: POST (check create new Invalid ID)', async () => {
        const postSource = {id: 105}
        const res = await functions.postRequest("https://jsonplaceholder.typicode.com/posts?id=105", postSource, "Error: something went wrong", 201);
        expect(res.statusCode).toEqual(201);
        expect(res.body.id).toEqual(constants.newUserId101ToPostMethod.id);
    });  

    test('3: POST (overwrite existed UserId with empty string)', async () => {
        const postSource = "";
        const res = await functions.postRequest("https://jsonplaceholder.typicode.com/users/1/todos?id=6", postSource, "Error: something went wrong", 201);
        expect(res.statusCode).toEqual(201);
        expect(res.body.userId).toBeTruthy();
        expect(res.body.title).toBeUndefined();
        expect(res.body.completed).toBeFalsy();

    }); 

    test('4: POST (create new User in TODOS with invalid url)', async () => {
        const postSource = { id: 4, username: "Carry", phone: "1-463-123-5000"};
        await functions.postRequest("https://jsonplaceholder.typicode.com/users/1/todos222", postSource, "Not Found", 404);
    }); 

    test('5: POST (create new User in TODOS with valid url and id)', async () => { 
        const postSource = { userId: 3, id: 7, title: "qui ullam ratione quibusdam voluptatem quia omnis 1", completed: null};
        const res = await functions.postRequest("https://jsonplaceholder.typicode.com/users/1/todos?id=21", postSource, "Not Found", 201);
        expect(res.statusCode).toEqual(201);
        expect(res.body.userId).toEqual(constants.createId21WithNull.userId);
        expect(res.body.id).toEqual(constants.createId21WithNull.id);
        expect(res.body.completed).toBeNull();
    }); 

});
   
describe('TEST DELETE method', () => {
        beforeEach(() => {
            console.log(`${expect.getState().currentTestName}`);
            }
          );
    
    test('1: DELETE (valid ID)', async () => {
        const res = await superagent.delete("https://jsonplaceholder.typicode.com/photos/3")
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({});
    }); 

    test('2: DELETE (invalid ID)', async () => {
        const res = await superagent.delete("https://jsonplaceholder.typicode.com/photos/6000")
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({});
    }); 
  
    test('3: DELETE (invalid Url)', async () => {
        await functions.deleteRequest("https://jsonplaceholder.typicode.com/users/1/todos?id=6", "Not Found", 404)
    });  

});

describe('TEST PATCH method', () => {
    beforeEach(() => {
        console.log(`${expect.getState().currentTestName}`);
        }
    );
        
    test('1: PATCH (adding new strings to the existing ID)', async () => {
        const patchSource = { name: "morpheus", job: "zion resident"};
        const res = await functions.patchRequest("https://jsonplaceholder.typicode.com/photos/3", patchSource, "Error: something went wrong", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(constants.addedNewStringToExistingId3);
    });  

    test('2: PATCH (overwrite strings to the existing ID)', async () => {
        const patchSource = { title: "updated title", url: "https://via.placeholder.com/600/24f355/changedURl"};
        const res = await functions.patchRequest("https://jsonplaceholder.typicode.com/photos/3", patchSource, "Error: something went wrong", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual(constants.overwriteExistingId3WithNewStrings.title);
        expect(res.body.url).toEqual(constants.overwriteExistingId3WithNewStrings.url);
    }); 

    test('3: PATCH (add strings to the new ID)', async () => {
        const patchSource = { title: "updated title", url: "https://via.placeholder.com/600/24f355/changedURl"};
        const res = await functions.patchRequest("https://jsonplaceholder.typicode.com/photos/6000", patchSource, "Error: something went wrong", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(constants.overwriteExistingId3WithNewStrings);
    }); 

    test('4: PATCH (add empty string to the new ID)', async () => {
        const patchSource = "";
        const res = await functions.patchRequest("https://jsonplaceholder.typicode.com/photos/6000", patchSource, "Error: something went wrong", 200);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({});
    }); 

    test('5: PATCH request (add inconsistent data to the existing ID)', async () => {
        const patchSource = 123;
        await functions.patchRequest("https://jsonplaceholder.typicode.com/photos/3", patchSource, "Internal Server Error", 500);
    }); 

});