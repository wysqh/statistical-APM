package indiv.dev.grad.hit.pro.utils.logger;

import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.WeakHashMap;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-03-12 9:46
 */
public class TKLogger {
    private static TKLogger defalutTkLogger = null;
    private static WeakHashMap<String, TKLogger> maps = new WeakHashMap<String, TKLogger>();
    private static String name;

    public static TKLogger getLogger() {
        if (defalutTkLogger == null) {
            synchronized (TKLogger.class) {
                if (defalutTkLogger == null) {
                    defalutTkLogger = new TKLogger();
                    name = "webpage.log";
                    maps.put(name, defalutTkLogger);
                }
            }
        }

        return defalutTkLogger;
    }

    public static TKLogger getLogger(String name) {
        if (maps.get(name) == null) {
            TKLogger.name = name;
            maps.put(name, new TKLogger());
        }

        return maps.get(name);
    }

    public static TKLogger getDefalutTkLogger() {
        return defalutTkLogger;
    }

    public void append(String content) {
        PrintWriter out = null;
        try {
            out = new PrintWriter(new FileOutputStream(name, true));
            out.println(content);
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.close();
        }
    }

    public void  append(List<String> contents) {
        PrintWriter out = null;
        StringBuilder buffer = null;
        try {
            out = new PrintWriter(new FileOutputStream(name, true));
            buffer = new StringBuilder();
            for (String str: contents) {
                buffer.append(str + "\r\n");
            }
            out.println(buffer);
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.close();
        }
    }

    public void flush() {
        PrintWriter out = null;
        try {
            out = new PrintWriter(new FileOutputStream(name));
            out.print("");
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            out.close();
        }
    }
}
