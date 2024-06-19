# Frontend Notes
- issues I have noticed when configuring the front end
    - when configuring CORS for the azure function, the settings are case sensitive
    - ie; originally I set the CORS values to be "https://AzureResume..." however, they should have been set as "https://azureresume..."
- CDN seems to update very slowly, for example when I make a change to the index.html page, then redeploy to the blob as a static website, it seems to take almost a day to update the endpoint. Is there a reason for this? 
