using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Project2.Enums;
namespace Project2.Models
{
    [Table("Users")]
    public class UserModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nickname { get; set; }

        [NotMapped]
        public Role Role
        {
            get
            {
                return (Role)RoleId;
            }
            set
            {
                RoleId = (int)value;
            }
        }
        public int RoleId { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsRegistred { get; set; }

        [NotMapped]
        ICollection<MathTask> Tasks { get; set; }

        public UserModel()
        {
            Tasks = new List<MathTask>();
        }

    }
}
