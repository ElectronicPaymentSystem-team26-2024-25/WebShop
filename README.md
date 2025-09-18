# WebShop

In order for https to work, following steps are needed:
1. Install mkcert (using powershell): **mkcert -install**

2. For every spring application you want to run with https, position yourself in main/resources folder and open powershell there, then run command: **mkcert -pkcs12 localhost 127.0.0.1 ::1**

3. In order for bank service to work, add **127.0.0.1 bank.local** in hosts file (**C:/Windows/System32/drivers/etc/hosts**)

4. For mobile application to work it is needed to install certificate on mobile phone, to do this:
     Go to mkcert folder (e.g. C:\Users\Admin\AppData\Local\mkcert) find rootCA.pem copy it and rename it to rootCA.crt. Then transfer rootCA.crt to mobile phone system memory and install that certificate.
     After that, position to folder that contains adb.exe file (e.g. E:\Android\Sdk\platform-tools) and run command adb reverse tcp:8060 tcp:8060 and that is it.
