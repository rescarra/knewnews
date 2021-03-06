var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NotesSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String,
  // `favorite` is of type Boolean
  // favorite: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Notes = mongoose.model("Notes", NotesSchema);

// Export the Note model
module.exports = Notes;
