class Solution
{
    public:
    int partition (int arr[], int low, int high)
    {
       // Your code here
       int co=0;
       
       for(int i=low+1;i<=high;i++)
       if(arr[low]>arr[i]) co++;
    //   int temp=arr[low];
    //   arr[low]=arr[low+co];
    //   arr[low+co]=temp;
    swap(arr[low],arr[low+co]);
       int i=low,j=high;
       while(i<j)
       {
           if(arr[i]<arr[low+co]) i++;
           else if(arr[j]>=arr[low+co]) j--;
           else
           {
            //   int temp=arr[i];
            //   arr[i]=arr[j];
            //   arr[j]=temp;
            swap(arr[i],arr[j]);
           }
       }
       return low+co;
    }
    //Function to sort an array using quick sort algorithm.
    void quickSort(int arr[], int low, int high)
    {
        // code here
        if(low>=high) return ;
        int piv=partition(arr,low,high);
        quickSort(arr,low,piv-1);
        quickSort(arr,piv+1,high);
    }
    

    
};
