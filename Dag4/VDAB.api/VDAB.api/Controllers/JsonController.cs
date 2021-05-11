using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace VDAB.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JsonController : ControllerBase
    {
        [HttpGet]
        public object Get()
        {
            return JsonConvert.DeserializeObject<dynamic>(System.IO.File.ReadAllText("./Data.json"));
        }
    }
}
