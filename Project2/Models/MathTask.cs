using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Project2.Enums;
namespace Project2.Models
{
    [Table("MathTasks")]
    public class MathTask
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Condition { get; set; }

        [NotMapped]
        public ICollection<Answer> Answers {get;set;}
        public int CreatorId { get; set; }

        [NotMapped]
        public UserModel CreatorUser { get; set; }

        [NotMapped]
        public Rating Rate
        {
            get
            {
                return (Rating)RateId;
            }
            set
            {
                RateId = (int)value;
            }
        }
        public int RateId { get; set; }
        [NotMapped]
        public ICollection<CommentModel> Comments { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }

        public MathTask()
        {
            Answers = new List<Answer>();
            Comments = new List<CommentModel>();
        }

    }
}
