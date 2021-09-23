using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project2.Models;
using Project2.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project2.Models.Context;
using Microsoft.EntityFrameworkCore;

namespace Project2.Controllers
{
    [Route("Users")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private MathDbContext _dbContext;
        public UserController(ILogger<UserController> logger, MathDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [Route("GetUsers")]
        public async Task<ObjectResult> GetUsers()
        {
            return Ok(await _dbContext.Users.ToListAsync());
        }
    }
}
