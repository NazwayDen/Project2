using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project2.Enums;
namespace Project2.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public Role Role { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsRegistred { get; set; }

    }
}
