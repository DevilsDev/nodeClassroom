const express = require('express');

const Sequelize = require('sequelize');

const app = express();

const PORT = 8080

const sequelize = new Sequelize('node_database', 'root', 'YOUR_PASSWORD', {
  host: "localhost",
  dialect: "mysql"
})

sequelize.authenticate().then( (success) => {
  console.log("Authentication successful")
}).catch((err) => {
  console.log(err)
})
// Create a new Sequelize model called User
const User = sequelize.define( 'users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  enrolStatus: {
    type: Sequelize.ENUM( "1", "0" ),
    defaultValue: "1"
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ")
  },
  updateAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ")
  }
},{
modelName: "User",
timestamps: false
})

const Model = Sequelize.Model

class Course extends Model {}

Course.init( {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  courseTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER
  },
  courseCode: {
    type: Sequelize.STRING
  },
  semester: {
    type: Sequelize.ENUM( "1", "2" ),
    defaultValue: "1"
  }
},{
modelName: "courses",
timestamps: false,
sequelize
})

sequelize.sync()
app.get( "/", ( req, res ) => {
  res.status(200).json( {
  status:1,
  Message: "Connecting to DB"
  })
})

app.listen( PORT, ()=> {
console.log('Listing on port: ' + PORT)
})
