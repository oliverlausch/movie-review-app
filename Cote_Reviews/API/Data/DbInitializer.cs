using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{

public static class DbInitializer
{
    public static void Initialize(CoteContext context)
    {
        // Seeding Data into our SQLite Database:

        // Error Handling:
        // If there is any data in the users table, return it, don't remake it.
        if (context.Users.Any()) return;

        // If there is any data in the reviews table, return it, don't remake it.
        if (context.Reviews.Any()) return;

        var users = new List<User>
        {
            new User
            {
                userId = 1,
                Name = "Jim",
                DateRegistered = DateTime.Parse("2021/09/27"),
                Email = "jimbojones@thesimpsons.com",
                Password = "password",
            },

            new User
            {
                userId = 2,
                Name = "Alieshah",
                DateRegistered = DateTime.Parse("2022/01/23"),
                Email = "alieshah789@yahoo.com",
                Password = "password",
            },

            new User
            {
                userId = 3,
                Name = "Chris",
                DateRegistered = DateTime.Parse("2022/02/10"),
                Email = "christophski@mail.com",
                Password = "password",
            },

            new User
            {
                userId = 4,
                Name = "Zachary",
                DateRegistered = DateTime.Parse("2022/03/04"),
                Email = "zachafree@gmail.com",
                Password = "password",
            },

            new User
            {
                userId = 5,
                Name = "Anum",
                DateRegistered = DateTime.Parse("2022/02/07"),
                Email = "anumi37@mail.com",
                Password = "password",
            },

            new User
            {   
                userId = 6,
                Name = "Admin",
                DateRegistered = DateTime.Parse("2022/04/28"),
                Email = "Admin@mail.com",
                Password = "admin"
            }
        };


        var reviews = new List<Review>
        {
            new Review
            {
                ID = 1,
                Rating = 5,
                Post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Date = DateTime.Parse("2021-09-29"),
                videoId = "tt6468680",
                userId = 1
            },

            new Review
            {
                ID = 2,
                Rating = 3,
                Post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. In iaculis nunc sed augue lacus viverra vitae congue. Dolor purus non enim praesent elementum facilisis leo vel. Duis ultricies lacus sed turpis tincidunt. Eu facilisis sed odio morbi quis commodo odio. Nibh sed pulvinar proin gravida. Massa sapien faucibus et molestie ac feugiat.",
                Date = DateTime.Parse("2022-01-24"),
                videoId = "tt0172495",
                userId = 2
            },

            new Review
            {
                ID = 3,
                Rating = 4,
                Post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. In iaculis nunc sed augue lacus viverra vitae congue. Dolor purus non enim praesent elementum facilisis leo vel. Duis ultricies lacus sed turpis tincidunt. Eu facilisis sed odio morbi quis commodo odio. Nibh sed pulvinar proin gravida. Massa sapien faucibus et molestie ac feugiat.",
                Date = DateTime.Parse("2022-03-11"),
                videoId = "tt0118880",
                userId = 4
            },
        };

        foreach (var user in users)
        {
            context.Users.Add(user);
        }

        foreach (var review in reviews)
        {
            context.Reviews.Add(review);
        }

        context.SaveChanges();
    }
}
}
