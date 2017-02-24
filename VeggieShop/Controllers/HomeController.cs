using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using System.Text;
using System.Reflection;

namespace gemalto.wpwg.pads.Controllers
{
  public class HomeController : Controller
  {
    static Assembly EntryAssembly;
    static string AssemblyView;

    public HomeController()
    {
      EntryAssembly = Assembly.GetEntryAssembly();
      AssemblyView = $"2017 - {EntryAssembly.GetName().Name} - v{EntryAssembly.GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion}";
    }


    public IActionResult Index()
    {
      ViewData["Assembly"] = AssemblyView;
      return View();
    }


    public IActionResult About()
    {
      ViewData["Assembly"] = AssemblyView;
      return View();
    }


    public IActionResult Registrations()
    {
      ViewData["Assembly"] = AssemblyView;
      return View();
    }


    public IActionResult Contact()
    {
      ViewData["Assembly"] = AssemblyView;
      return View();
    }


    public IActionResult Error()
    {
      ViewData["Assembly"] = AssemblyView;
      return View();
    }
  }
}
