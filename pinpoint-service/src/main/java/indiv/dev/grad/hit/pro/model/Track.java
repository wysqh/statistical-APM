package indiv.dev.grad.hit.pro.model;

import indiv.dev.json.Line;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-05-21 11:26
 */
public class Track implements Serializable {
    private String currentTime;
    private String processCPU;
    private String appCPU;
    private String userPortion;
    private String sysPortion;
    private String OtherCPU;
    private String theadCount;
    private String gcTime;
    private String youngGc;
    private String oldGc;
    private String heapAllocationRate;
    private String safePointRate;
    private String safePointRateAvg;
    private String safePointSync;
    private String safePointSyncAvg;
    private List<Line> tables;

    public String getCurrentTime() {
        return currentTime;
    }

    public String getSafePointRateAvg() {
        return safePointRateAvg;
    }

    public void setSafePointRateAvg(String safePointRateAvg) {
        this.safePointRateAvg = safePointRateAvg;
    }

    public String getSafePointSyncAvg() {
        return safePointSyncAvg;
    }

    public void setSafePointSyncAvg(String safePointSyncAvg) {
        this.safePointSyncAvg = safePointSyncAvg;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public String getProcessCPU() {
        return processCPU;
    }

    public void setProcessCPU(String processCPU) {
        this.processCPU = processCPU;
    }

    public String getAppCPU() {
        return appCPU;
    }

    public void setAppCPU(String appCPU) {
        this.appCPU = appCPU;
    }

    public String getUserPortion() {
        return userPortion;
    }

    public void setUserPortion(String userPortion) {
        this.userPortion = userPortion;
    }

    public String getSysPortion() {
        return sysPortion;
    }

    public void setSysPortion(String sysPortion) {
        this.sysPortion = sysPortion;
    }

    public String getOtherCPU() {
        return OtherCPU;
    }

    public void setOtherCPU(String otherCPU) {
        OtherCPU = otherCPU;
    }

    public String getTheadCount() {
        return theadCount;
    }

    public void setTheadCount(String theadCount) {
        this.theadCount = theadCount;
    }

    public String getGcTime() {
        return gcTime;
    }

    public void setGcTime(String gcTime) {
        this.gcTime = gcTime;
    }

    public String getYoungGc() {
        return youngGc;
    }

    public void setYoungGc(String youngGc) {
        this.youngGc = youngGc;
    }

    public String getOldGc() {
        return oldGc;
    }

    public void setOldGc(String oldGc) {
        this.oldGc = oldGc;
    }

    public String getHeapAllocationRate() {
        return heapAllocationRate;
    }

    public void setHeapAllocationRate(String heapAllocationRate) {
        this.heapAllocationRate = heapAllocationRate;
    }

    public String getSafePointRate() {
        return safePointRate;
    }

    public void setSafePointRate(String safePointRate) {
        this.safePointRate = safePointRate;
    }

    public String getSafePointSync() {
        return safePointSync;
    }

    public void setSafePointSync(String safePointSync) {
        this.safePointSync = safePointSync;
    }

    public List<Line> getTables() {
        return tables;
    }

    public void setTables(List<Line> tables) {
        this.tables = tables;
    }

    public void addLine(Line line) {
        if (tables == null) {
            tables = new ArrayList<Line>();
        }

        tables.add(line);
    }

    @Override
    public String toString() {
        return "Track{" +
                "currentTime='" + currentTime + '\'' +
                ", processCPU='" + processCPU + '\'' +
                ", appCPU='" + appCPU + '\'' +
                ", userPortion='" + userPortion + '\'' +
                ", sysPortion='" + sysPortion + '\'' +
                ", OtherCPU='" + OtherCPU + '\'' +
                ", theadCount='" + theadCount + '\'' +
                ", gcTime='" + gcTime + '\'' +
                ", youngGc='" + youngGc + '\'' +
                ", oldGc='" + oldGc + '\'' +
                ", heapAllocationRate='" + heapAllocationRate + '\'' +
                ", safePointRate='" + safePointRate + '\'' +
                ", safePointRateAvg='" + safePointRateAvg + '\'' +
                ", safePointSync='" + safePointSync + '\'' +
                ", safePointSyncAvg='" + safePointSyncAvg + '\'' +
                ", tables=" + tables +
                '}';
    }
}
