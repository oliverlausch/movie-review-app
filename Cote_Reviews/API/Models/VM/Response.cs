using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Models.VM
{
    public class Response
{
    [Key]
    public string Status { set; get; }
    public string Message { set; get; }
}
}