import java.util.Scanner;                       
public class Main                              
{
	public static void main(String[] args) 
	{ 
	    Scanner sc = new Scanner(System.in);
	    System.out.println("請輸入任意「阿拉伯數字」(數字N)"); 
		int i=1,R=0,count=0,n=0;
		n=sc.nextInt();
	do{                                   
	    R=n%i;                            
	    if (R==0)                          
	    count=count+1;                    
	    i=i+1;
	    }while(i<=n);                          
	if(count==2)                           
	System.out.println("數字N= "+n+" 為質數");
	else                                       
	System.out.println("數字N= "+n+" 不為質數");
    }
}