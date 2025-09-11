# WebShop

In order for https to work, following steps are needed:
1. Install mkcert (using powershell): **mkcert -install**

2. Import mkcert CA into java truststore (run powershell as admin for this):

   2.1. If java truststore is in regular path, run **mkcert -CAROOT** to find the path and then:  
         **keytool -importcert -trustcacerts -cacerts -alias mkcert-rootCA -file "$(mkcert -CAROOT)\rootCA.pem" -storepass changeit**

    2.2. If java truststore is in jdk path, find the path of jdk and import mkcert root there.  
         To find jdk path of current spring application, add **System.out.println(System.getProperty("java.home"));** in main.  
         To find path of mkcert, run **mkcert -CAROOT** in powershell (it is probably: C:\Users\<YourName>\AppData\Local\mkcert\)  
         Example:  
         **keytool -importcert -trustcacerts -keystore "C:\Users\Admin\.jdks\temurin-21.0.5\lib\security\cacerts" -alias mkcert-rootCA -file "$(mkcert -CAROOT)\rootCA.pem" -storepass changeit**

         Note: it is possible that different spring applications have different truststores, if they use different jdks, in that case command should be executed multiple times, for every jdk.

4. In order for bank service to work, add **127.0.0.1 bank.local** in hosts file (**C:/Windows/System32/drivers/etc/hosts**)

5. For mobile application to work it is needed to install certificate on mobile phone, to do this:
     Go to mkcert folder (e.g. C:\Users\Admin\AppData\Local\mkcert) find rootCA.pem copy it and rename it to rootCA.crt. Then transfer rootCA.crt to mobile phone system memory and install that certificate.
     After that, position to folder that contains adb.exe file (e.g. E:\Android\Sdk\platform-tools) and run command adb reverse tcp:8060 tcp:8060 and that is it.
