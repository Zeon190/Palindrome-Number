import java.util.Scanner;
public class palindrome{
    public static void main(String args[]){
        System.out.println("Enter the Number ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int b = n ;
        int s = 0 ;
        while(n>0){
            int r = n % 10 ;
            s = (s*10)+r  ;
            n = n /10 ;
        }
        if (s==b){
            System.out.println("The Entered Number is palindrome ");
        } else {
            System.out.println("The Entered Number is not palindrome ");
        }
    }
}