"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var news_service_1 = require("./news.service");
describe('NewsService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(news_service_1.NewsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=news.service.spec.js.map