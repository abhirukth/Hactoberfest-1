<script>

// JavaScript program to find the height of
// an N-ary tree

// Structure of a node of an n-ary tree
class Node
{
	constructor()
	{
		this.key = 0;
		this.child = [];
	}
};

// Utility function to create a new tree node
function newNode(key)
{
	var temp = new Node();
	temp.key = key;
	temp.child = [];
	return temp;
}

// Function that will return the depth
// of the tree
function depthOfTree(ptr)
{
	// Base case
	if (ptr == null)
		return 0;

	// Check for all children and find
	// the maximum depth
	var maxdepth = 0;
	for(var it of ptr.child)
		maxdepth = Math.max(maxdepth,
							depthOfTree(it));

	return maxdepth + 1 ;
}

// Driver Code

/* Let us create below tree
*			 A
*		 / / \ \
*	 B F D E
*	 / \ | /|\
*	 K J G C H I
*	 /\		 \
* N M		 L
*/
var root = newNode('A');
(root.child).push(newNode('B'));
(root.child).push(newNode('F'));
(root.child).push(newNode('D'));
(root.child).push(newNode('E'));
(root.child[0].child).push(newNode('K'));
(root.child[0].child).push(newNode('J'));
(root.child[2].child).push(newNode('G'));
(root.child[3].child).push(newNode('C'));
(root.child[3].child).push(newNode('H'));
(root.child[3].child).push(newNode('I'));
(root.child[0].child[0].child).push(newNode('N'));
(root.child[0].child[0].child).push(newNode('M'));
(root.child[3].child[2].child).push(newNode('L'));
document.write(depthOfTree(root) + "<br>");


</script>
