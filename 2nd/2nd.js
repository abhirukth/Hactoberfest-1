<script>

// Javascript program to find averages of
// all levels in a binary tree.
class Node
{
	constructor(data)
	{
		this.left = null;
		this.right = null;
		this.val = data;
	}
}

// Function to print the average value
// of the nodes on each level
function averageOfLevels(root)
{
	
	// Traversing level by level
	let q = [];
	q.push(root);
	let sum = 0, count = 0;

	while (q.length > 0)
	{
		
		// Compute sum of nodes and
		// count of nodes in current
		// level.
		sum = 0;
		count = 0;
		let temp = [];
		
		while (q.length > 0)
		{
			let n = q[0];
			q.shift();
			sum += n.val;
			count++;
			
			if (n.left != null)
				temp.push(n.left);
			if (n.right != null)
				temp.push(n.right);
		}
		q = temp;
		document.write((sum * 1.0 / count) + " ");
	}
}

// Helper function that allocates a
// new node with the given data and
// NULL left and right pointers.
function newNode(data)
{
	let temp = new Node(data);
	return temp;
}

// Driver code

/* Let us construct a Binary Tree
	4
	/ \
2 9
/ \ \
3 5 7 */
let root = null;
root = newNode(4);
root.left = newNode(2);
root.right = newNode(9);
root.left.left = newNode(3);
root.left.right = newNode(5);
root.right.right = newNode(7);

document.write("Averages of levels : " + "</br>");
document.write("[");
averageOfLevels(root);
document.write("]" + "</br>");

// This code is contributed by divyeshrabadiya07

</script>
