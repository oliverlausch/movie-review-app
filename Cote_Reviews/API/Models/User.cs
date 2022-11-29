using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{

public class User
{
    [Key]
    public int userId { get; set; }

    [Required(ErrorMessage = "This is a required field.")]
    public string Name { get; set; }

    public DateTime DateRegistered { get; set; }

    [Required, EmailAddress]
    public string Email { get; set; }

    [Required(ErrorMessage = "You must choose a password.")]
    public string Password { get; set; }
}
}
