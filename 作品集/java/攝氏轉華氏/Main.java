import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
        double c = 0 ;
        double f = 0 ;
        System.out.print("請輸入攝氏溫度=>") ;
        Scanner n = new Scanner(System.in) ;
        c = n.nextInt() ;
        f = c * 9 / 5 + 32 ;
        System.out.print( "攝氏溫度為:"+c+"\n"+"轉換為華氏溫度為:"+f ) ;
	}
}