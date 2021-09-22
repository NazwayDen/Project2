using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;

namespace Project2.Models
{
    public class ItemsRequest<T>
    {
        public int Page { get; set; }
        public int ItemsPerPage { get; set; }
        public int Total { get; set; }
        public string SearchQuery { get; set; }
        public List <QuickFilter<T>> QuickFilters { get; set; }

        public List<T> Items { get; set; }
    }
}
