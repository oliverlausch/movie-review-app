using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Models.VM
{
    public class Register
    {
    [Key]
    public int userId { get; set; }

    public string Name { get; set; }

    public DateTime DateRegistered { get; set; }

    public string Email { get; set; }
    public string Password { get; set; }
    }
}