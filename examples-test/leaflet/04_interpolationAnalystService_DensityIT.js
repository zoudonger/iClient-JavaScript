var commonTools = require('../base/commonTools');
module.exports = {
    'leaflet_04_interpolationAnalystService_Density': function (browser) {
        var type = 'leaflet';
        var exampleName = '04_interpolationAnalystService_Density';
        commonTools.openExampleAndLoadMap(browser, type, exampleName);
        /*check elements exist*/
        browser.waitForElementPresent('.leaflet-pane.leaflet-map-pane', 10000);
        browser.waitForElementPresent('.leaflet-pane.leaflet-tile-pane', 10000);
        browser.waitForElementPresent('.leaflet-layer', 10000);
        browser.pause(20000);
        browser.elements('class name', 'leaflet-layer', function (result) {
            browser.assert.equal(result.value.length, 2, "expect Number of leaflet-layer to be 2, actual is " + result.value.length);
        });
        browser.elements('class name', 'leaflet-tile-container', function (result) {
            browser.assert.equal(result.value.length, 2, "expect Number of leaflet-tile-container to be 2, actual is " + result.value.length);
        });
        //测试过程中截取地图瓦片, 和已有的标准瓦片进行对比
        commonTools.cmpTestTileWithStdTile(browser, type, exampleName, 0, 0, 128, 128);
        browser.pause(1000);
        browser.end();
    }
};