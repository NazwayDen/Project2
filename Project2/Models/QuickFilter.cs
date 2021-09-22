using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2.Models
{
    public class QuickFilter<T>
    {
        public string ColumnName { get; set; }
        public T Value { get; set; }

        public QuickFilter(string columnName,T value)
        {
            Value = value;
            ColumnName = columnName;
        }
    }
}
