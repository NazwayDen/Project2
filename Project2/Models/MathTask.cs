using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project2.Enums;
namespace Project2.Models
{
    public class MathTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Condition { get; set; }
        public string[] Answer { get; set; }
        public int CreatorId { get; set; }
        public UserModel CreatorUser { get; set; }
        public Rating Rate { get; set; }    
        public List<CommentModel> Comments { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }

        public MathTask()
        {
            Answer = new string[3];
        }

    }
}
