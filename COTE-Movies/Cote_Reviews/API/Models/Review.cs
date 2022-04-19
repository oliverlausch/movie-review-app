using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{

public class Review
{
    public int ID { get; set; }

    [Required]
    [Range(1, 5, ErrorMessage = "Range must be between 1 and 5")]
    public int Rating { get; set; }
    
    public string Post { get; set; }
    
    public DateTime Date { get; set; }

    [Required]
    public string videoId { get; set; }

    [Required]
    public int userId { get; set; }
}
}
