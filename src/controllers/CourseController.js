const {Course, validate} = require('../models/Course');
   
async function getAllCourses (req, res) { 
    const courses = await Course.find().limit(10);
    res.send(courses);
};

async function getCourse (req, res)  {
    const course = await Course.find({ _id: req.params.id});
    if(course.length == 0) return res.status(404).send('not found');
    res.send(course);
};

async function saveCourse (req, res) {

    const result = validate(req.body); 
    if(result.error) return res.status(404).send(result.error);

    const course = new Course({
        name: req.body.name, 
        price: req.body.price,
        author: req.body.author
    });

    const doc = await course.save()
    .then()
    .catch((error) => { 
        res.status(500).send(); 
        return console.log(error.message)
   });

   res.status(200).send(doc);
};

 async function updateCourse (req, res)  {

     const course = await Course.findById(req.params.id);
     if(!course) return res.status(404).send('not found');
  
     const result = validate(req.body);
     if(result.error) return res.status(400).send(result.error);
  
     course.name = req.body.name;
     course.price = req.body.price;
     course.author = req.body.author;

     try {
        const doc = await course.save();
        res.status(200).send(doc);
     } 
     catch(ex) {
        res.status(500).send(); 
        return console.log(ex.message)
     }
};

async function removeCourse (req, res)  {
    const course = Course.findById(req.params.id);
    if(!course) return res.status(404).send('not found');

    const result  = await Course.deleteOne({ _id: req.params.id});
    res.send(result);

}

exports.getAll = getAllCourses;
exports.get = getCourse;
exports.save = saveCourse;
exports.update = updateCourse;
exports.remove = removeCourse;

 