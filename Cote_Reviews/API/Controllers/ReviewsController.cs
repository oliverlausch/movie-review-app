using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly CoteContext _context;

        public ReviewsController(CoteContext context)
        {
            _context = context;
        }

        // All of the following methods are action results, but in API's we
        // use asynchronous / async Task<ActionResults> and then await the return
        // to ensure web threads are thoroughly changed, for scalability.

        // Get a list of reviews

        [HttpGet]
        public async Task<ActionResult<List<Review>>> GetReviews()
        {
            var reviews = await _context.Reviews.ToListAsync();

            return Ok(reviews);

            // or
            // return await context.Reviews.ToListAsync();
        }

        // Get a particular review by it's ID

        [HttpGet("{id}", Name = "GetReview")]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            return await _context.Reviews.FindAsync(id);
        }

        // Post a review
        
        [HttpPost]
        public async Task<ActionResult<Review>> AddReview(Review review)
        {
            _context.Reviews.Add(review);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetReview", new {id = review.ID}, review);

            return BadRequest(new ProblemDetails { Title = "Problem with adding a review" });
        }

        // Delete a review

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteReview(int id)
        {
            var review = await _context.Reviews.FindAsync(id);

            if (review == null) return BadRequest(new ProblemDetails { Title = "Problem with finding a review to delete" });


            _context.Reviews.Remove(review);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem with deleting a review" });
            
        }

        // Update a review

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateReview(Review newReview, int id)
        {
            var review = await _context.Reviews.FindAsync(id);
            if (review == null) return BadRequest(new ProblemDetails { Title = "Problem with finding a review to update" });

            _context.Entry(review).CurrentValues.SetValues(newReview);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem with updating a review" });
        }
    }
}