using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace InertiaCoreVueApp.Controllers;

[Route("/")]
public class HomeController : Controller
{

    [HttpGet]
    public Task<Response> Index()
    {
        var data = new
        {
            User = "John Doe",
        };

        return Task.FromResult(Inertia.Render("Index", data));
    }
}