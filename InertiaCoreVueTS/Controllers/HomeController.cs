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
            User = new Person{GivenName = "John", FamilyName = "Doe"},
            Message = new Message{MsgText = "Hello, World!"}
        };

        return Task.FromResult(Inertia.Render("Index", data));
    }
    
    private class Person
    {
        public string GivenName { get; set; } = string.Empty;
        public string FamilyName { get; set; } = string.Empty;
    }

    private class Message
    {
        public string MsgText { get; set; } = string.Empty;
    }
}