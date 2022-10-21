#include <bits/stdc++.h>
using namespace std;

struct Node {
	int val;
	struct Node* left, *right;
};

void averageOfLevels(Node* root)
{
	vector<float> res;

	queue<Node*> q;
	q.push(root);

	while (!q.empty()) {

int sum = 0, count = 0;
		queue<Node*> temp;
		while (!q.empty()) {
			Node* n = q.front();
			q.pop();
			sum += n->val;
			count++;
			if (n->left != NULL)
				temp.push(n->left);
			if (n->right != NULL)
				temp.push(n->right);
		}
		q = temp;
		cout << (sum * 1.0 / count) << " ";
	}
}

Node* newNode(int data)
{
	Node* temp = new Node;
	temp->val = data;
	temp->left = temp->right = NULL;
	return temp;
}

int main()
{
	/* Let us construct a Binary Tree
		4
	/ \
	2 9
	/ \ \
	3 5 7 */

	Node* root = NULL;
	root = newNode(4);
	root->left = newNode(2);
	root->right = newNode(9);
	root->left->left = newNode(3);
	root->left->right = newNode(8);
	root->right->right = newNode(7);
	averageOfLevels(root);
	return 0;
}
