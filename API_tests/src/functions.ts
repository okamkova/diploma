import * as superagent from 'superagent';
import {expect} from '@jest/globals';

export async function getRequest(url: string): Promise<any> {
    try {
        const response = await superagent.get(url)
        return response;
    } catch (err: any) {
        return err;
    }
};

export async function postRequest(url: string, data: any): Promise<any> {
    try {
        const response = await superagent
        .post(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        return err;
    }
};

export async function putRequest(url: string, data: any): Promise<any> {
    try {
        const response = await superagent
        .put(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        return err;
    }
};

export async function patchRequest(url: string, data: any): Promise<any> {
    try {
        const response = await superagent
        .patch(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        return err;
    }
};

export async function deleteRequest(url: string): Promise<any> {
    try {
        const response = await superagent.delete(url)
        return response;
    } catch (err: any) {
        return err;
    }
};
