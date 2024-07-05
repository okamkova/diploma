import * as superagent from 'superagent';
import {expect} from '@jest/globals';

export async function getRequest(url: string, error: any, status: number): Promise<any> {
    try {
        const response = await superagent.get(url)
        return response;
    } catch (err: any) {
        expect(err.message).toBe(error)
        expect(err.status).toBe(status)
    }
};

export async function postRequest(url: string, data: any, error: string, status: number): Promise<any> {
    try {
        const response = await superagent
        .post(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        expect(err.message).toBe(error)
        expect(err.status).toBe(status)
    }
};

export async function putRequest(url: string, data: any, error: string, status: number): Promise<any> {
    try {
        const response = await superagent
        .put(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        expect(err.message).toBe(error)
        expect(err.status).toBe(status)
    }
};

export async function patchRequest(url: string, data: any, error: string, status: number): Promise<any> {
    try {
        const response = await superagent
        .patch(url)
        .set("Content-Type", "application/json")
        .send(data);
        return response;
    } catch (err: any) {
        expect(err.message).toBe(error)
        expect(err.status).toBe(status)
    }
};

export async function deleteRequest(url: string, error: string, status: number): Promise<any> {
    try {
        const response = await superagent.delete(url)
        return response;
    } catch (err: any) {
        expect(err.message).toBe(error)
        expect(err.status).toBe(status)
    }
};
