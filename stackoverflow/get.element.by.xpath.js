function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log(getElementByXpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'))