package indiv.dev.grad.hit.pro.encrypt;

import indiv.dev.grad.hit.pro.constant.EncryptConstant;
import indiv.dev.grad.hit.pro.exceptions.NoSpecifiedEncryptTypeException;
import indiv.dev.grad.hit.pro.exceptions.UnImplementedException;
import indiv.dev.grad.hit.pro.utils.StringUtils;

/**
 * @Author: Created By Gu Tiankai
 * @Date: 2018-02-18 3:45
 */
public abstract class BaseEncrypt {
    public static String encryptByType(String type, String code) throws NoSpecifiedEncryptTypeException {
        if (StringUtils.isEmpty(type)) {
            throw new NoSpecifiedEncryptTypeException();
        }

        String encrypt = null;
        if (EncryptConstant.BASE64.equals(type)) {
            encrypt = new Base64Encrypt().doEncrypt(code);
        } else if (EncryptConstant.MD5.equals(type)) {
            encrypt = new MD5Encrypt().doEncrypt(code);
        } else if (EncryptConstant.SHA256.equals(type)) {
            encrypt = new SHA256Encrypt().doEncrypt(code);
        } else {
            encrypt = new SHA512Encrypt().doEncrypt(code);
        }

        return encrypt;
    }

    public abstract String doEncrypt(String code);

    public abstract String doDecode(String code) throws UnImplementedException;
}
