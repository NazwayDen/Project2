using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Models.Context
{
    public class MathDbContext: DbContext
    {
        public DbSet<UserModel> Users { get; set; }
        public MathDbContext(DbContextOptions<MathDbContext> options) : base(options)
        {
           
        }
    }
}
