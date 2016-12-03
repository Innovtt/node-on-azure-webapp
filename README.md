# node-on-azure-webapp
Example of configuration for a node.js app serving static files on Azure WebApp

The purpose of this repository is to clarify how to publish node.js applications in the Azure WebApp service and also to create a base of examples of rewrite rules and other settings needed for nodejs applications in the Azure service.

###First things firt
When we use node.js in Windows Azure WebApp, we have to understand that Node will be running on IIS with IISNode.

Maybe you want to know a little more about it, so it's important to [check out this] (https://github.com/tjanczuk/iisnode)

###Conventions and Configurations
Because we run under IISNode, we need some aditional configurations, like the path to our entry point script on Node

If you deploy your application through git, the Kudu Service that runs on your WebApp service, will create the web.config file.
But if you publish your app through FTP or develop on Visual Studio Monaco (online code editor), the web.config file will not be created automatically for you.

By default, the web.config file created for you, will assume that your node.js entry point is a server.js and that every static file that you want to serve externally will be placed under a /public folder.

So you need to be aware because a file that inside the public folder follows the relative path from this folder.

For example:
If I have a file called devops.png located in the public folder, I should call the url http://meuwebsite/devops.png
A very common error is that people put the files in the public folder and try to call from the address http: //meuwebsite/public/devops.png and obviously this will not work because or rewrite rule placed on web.config dont specify that.

Its possible to change the rewrite rules, and is very easy. 

###Serving files with extensions not mapped
If you need to serve .json files for example, you noted that this mimeType is not mapped by default.
You just need to do a new map on web.config file. Its not that hard.
```xml
<staticContent>
            <mimeMap fileExtension=".json" mimeType="application/json" />
     </staticContent>
```

#####If you want to contribute with this repository, please feel free to push code with more examples of rewrite or mimeMap.

