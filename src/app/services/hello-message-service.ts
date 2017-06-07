import {Request} from "express";
export function getHelloMessageForRequest(req: Request): string {
    return `Hello ${req.ip}`;
}