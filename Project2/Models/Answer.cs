using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int MathTaskId { get; set; }
        public bool IsCorrect { get; set; }
        public string Value { get; set; }
    }
}
