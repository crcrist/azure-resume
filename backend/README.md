# Your backend lives here
- issues I have noticed when configuring the back end
    - versioning of each nuget package is crucial, when deploying the azure function and using .net 8 I ran into many difficulties
    - it seesm that the syntax for the CosmosDB bindings have changed for the Get and Post, would like to update that in future version
    - another issue when using a higher framework and updating bindings, was an error saying multiple functions were found when running the build, and that the correct function could not be identified
        - have not found solution to this yet, online I read that some people delete the bin/obj folders and have success