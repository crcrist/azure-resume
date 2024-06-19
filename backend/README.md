# Backend Notes
- Versioning of each nuget package is crucial, when deploying the azure function and using .net 8 I ran into many difficulties. This might be obvious but I have not had to configure NuGet packages before. The current installed packadges within the api.csproj will work if you download them within your project.
- Updating to a higher version requires updates to the CosmosDB bindings, will update here when the step is made from .NET 6 to .NET 8
