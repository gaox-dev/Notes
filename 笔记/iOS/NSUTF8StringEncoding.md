【iOS】 UTF-8 编码

iOS 9 之后
 return [str  stringByAddingPercentEncodingWithAllowedCharacters:NSCharacterSet.URLQueryAllowedCharacterSet];


iOS 9  之前
return [str stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];



