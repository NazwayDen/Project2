using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Project2.Models;
using Project2.Models.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Controllers
{
    [Route("MathTasks")]
    public class MathTaskController : Controller
    {
        private readonly ILogger<MathTaskController> _logger;
        private readonly MathDbContext _dbContext;

        public MathTaskController(ILogger<MathTaskController> logger, MathDbContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [Route("Filter")]
        public async Task<ObjectResult> Filter()
        {
            //To do Filters
            return Ok(await _dbContext.MathTasks.ToListAsync());
        }

        [Route("Get{id}")]
        public async Task<ObjectResult>GetById(int id)
        {
            return Ok(await _dbContext.MathTasks.FindAsync(id));
        }

        [Route("Create")]
        public async Task<ObjectResult> CreateTask(MathTask task)
        {
            if (ModelState.IsValid)
            {
                _dbContext.MathTasks.Add(task);
                await _dbContext.SaveChangesAsync();
                return Ok(task);
            }
            return BadRequest(ModelState);
        }
    }
}
