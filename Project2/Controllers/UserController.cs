using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project2.Models;
using Project2.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [Route("Users")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [Route("GetUsers")]
        public ObjectResult GetUsers()
        {
            List<UserModel> Users = new List<UserModel>();
            
            for(int i = 0; i < 10; i++)
            {
                Random r = new Random();
                Users.Add(new UserModel()
                {
                    Id = i,
                    Nickname = $"name{i}",
                    Role = (Role)r.Next(1, 2),
                    IsAdmin = false,
                    IsRegistred = true
                });
            }
            return Ok(Users);
        }    
    }
}
