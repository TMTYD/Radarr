using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NzbDrone.Core.MetadataSource.SkyHook.Resource
{
    public class AlternativeTitleResource
    {
        public string Title { get; set; }
        public string Type { get; set; }
        public string Language { get; set; }
    }
}
