import * as assert from "assert";
import {Request} from "express";
import {getHelloMessageForRequest} from "../../app/services/hello-message-service";

describe("getHelloMessageForRequest", () => {
    it("should return 'Hello 192.168.15.15", () => {
        let mockRequest: Request = {} as Request;
        mockRequest.ip = "192.168.15.15";
        let result = getHelloMessageForRequest(mockRequest);
        assert.equal(result, `Hello ${mockRequest.ip}`);
    });
});