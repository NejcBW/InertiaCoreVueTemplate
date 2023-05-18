# InertiaCoreVueTemplate

This template currely relies on an unmerged [pull request](https://github.com/kapi2289/InertiaCore/pull/8) (at the time of writing this) in the [InertiaCore](https://github.com/kapi2289/InertiaCore) repo. I suggest you clone the `feature/vite` branch of the [PR author's forked repo](https://github.com/adrum/InertiaCore/tree/feature/vite), build it locally, and reference it as a local NuGet file source in the template (this is what I have done).

Then, to run the dev environment:

```
cd ClientApp
npm run dev

# in another terminal in the Inertia CoreVueApp project directory
dotnet watch run
```
