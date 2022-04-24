using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.VM;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly CoteContext _context;

        public UsersController(CoteContext context)
        {
            _context = context;
        }

        [HttpGet]

        // Get a list of users

        public async Task<ActionResult<List<User>>> GetUsers()
        {
                var users = await _context.Users.ToListAsync();

                return Ok(users);
        }

        // Get a user via it's id parameter

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        // Add a new User

       /* [HttpPost]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            _context.Users.Add(user);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetUser", new {id = user.userId}, user);

            return BadRequest(new ProblemDetails { Title = "Problem with adding a new User" });
        }

        */

        // Add a new User (With Login system)

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(Register Reg)
        {
            //try
            //{
                User user = new User();
                if (user.userId == 0)
                {
                    user.Name = Reg.Name;
                    user.DateRegistered = Reg.DateRegistered;
                    user.Email = Reg.Email;
                    user.Password = Reg.Password;
                }
                     _context.Users.Add(user);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetUser", new {id = user.userId}, user);
                
            //}
            //catch (Exception)
            //{
                return BadRequest(new ProblemDetails { Title = "Problem with adding a new User" });
            //}
        }

        // Login a User

        [Route("Login")]
        [HttpPost]
        public Response UserLogin(Login login)
        {
            var log = _context.Users.Where(x => x.Email.Equals(login.Email) && 
                      x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                Console.WriteLine("Login failed: Invalid User");
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            else
            {   
                    return new Response
                    {
                        Status = "Success",
                        Message = "Login Successfully"
                    };
                };
        }

        // Delete a User

        [HttpDelete("{userId}")]
        public async Task<ActionResult> DeleteUser(int userId)
       {
            var user = await _context.Users.FindAsync(userId);

            if (user == null) return BadRequest(new ProblemDetails { Title = "Problem with finding specified User to delete" });

            _context.Users.Remove(user);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem with deleting a User" });
        }

        // Update a User profile

        [HttpPut("{userId}")]
        public async Task<ActionResult> UpdateUser(User newUser, int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null) return BadRequest(new ProblemDetails { Title = "Problem with finding a User to update" });

            _context.Entry(user).CurrentValues.SetValues(newUser);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem with updating a User" });
        }
    }
}