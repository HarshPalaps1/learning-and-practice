const path = require("path");

console.log(path.sep); // \ in windows / in mac

console.log(path.delimiter)


// to get currrent file path
const current_file_path=__filename;
const current_dir_name=__dirname;
console.log("current file path:- ",current_file_path)
console.log("current directory path:- ",current_dir_name)

// to get file name in which we are working
let file_name = path.basename(current_file_path)
console.log("working file name:- ",file_name);


// get dir name from current file path
let file_path_without_basename=path.dirname(current_file_path)
console.log("extracted dir name from path:- ",file_path_without_basename)

// to create path with separata dir and base value
let combo_dir_file= path.format({
    dir:"/public_html/home",
    base:"index.html"
})
console.log(combo_dir_file)

// to check if path is absolute or relative.
console.log(path.isAbsolute(current_file_path))
console.log(path.isAbsolute("./index.js"))

// to create single with dir name given separately
let to_join_path = path.join("/home","js","dir","index.js")
console.log('path_to_dir > ',to_join_path )

// to  get dir name from path
console.log("parse :-", path.parse(current_file_path))

// to get relative path 
console.log("relative:- ",path.relative("/home/user/config","/home/user/js"))

// resolve
// normalise