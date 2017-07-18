using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers.API
{
    [EnableCors("*", "*", "*")]
    public class smartbotController : ApiController
    {
        [HttpPost]
        public string GetStringfromBot(string inputstring)
        {
            return inputstring+2;
        }
    }
}
