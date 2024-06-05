function findItemsOver(itemList, threshold) {
    return itemList.filter(item => item.qty > threshold);
}
module.exports = findItemsOver;
