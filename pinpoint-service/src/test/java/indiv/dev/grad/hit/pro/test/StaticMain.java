package indiv.dev.grad.hit.pro.test;

public class StaticMain {
    private static String str = null;

    static {
        if (str == null) {
            str = "static block";
        }
    }

    public static void getSession(){
        System.out.println("Hello");
        return;
    }
}

class Main {
    public static void main(String[] args) {
        StaticMain.getSession();
    }
}
