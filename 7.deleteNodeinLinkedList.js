// https://leetcode.com/problems/delete-node-in-a-linked-list/description/
var deleteNode = function(node) {
    if(node === null) return
    if(node.next !== null){
        node.val = node.next.val
        node.next = node.next.next
    }
};