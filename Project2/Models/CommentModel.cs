using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Models
{
    [Table("Comments")]
    public class CommentModel
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public int MathTaskId { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public UserModel UserOwner { get; set; }
        public List<CommentModel> Comments { get; set; }
        public bool IsForPost { get; set; }

    }
}
