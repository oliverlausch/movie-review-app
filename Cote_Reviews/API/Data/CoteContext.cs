using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Models.VM;

namespace API.Data
{
    public class CoteContext : DbContext
    {
        public CoteContext(DbContextOptions options) : base(options)
        {

        }

        // generate Context options via constructor
        // generate DbSets via prop() method

        public DbSet<Review> Reviews { get; set; }
        public DbSet<User> Users { get; set; }
        
    }
}
