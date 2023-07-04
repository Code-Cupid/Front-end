import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const New = ({ createReadme, currentUser }) => {
  console.log("new page", currentUser)
  const [newReadme, setNewReadme] = useState({
    name: "",
    age: "",
    gender: "",
    gender_preference: "",
    location: "",
    programming_language: "",
    image: "",
    user_id: ""
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setNewReadme({ ...newReadme, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    createReadme(newReadme)
    navigate("/userindex")
  }  
  
  return(
    <div>
      <Form>
      <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={newReadme.name}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age"onChange={handleChange} value={newReadme.age} />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input type="text" name="gender" onChange={handleChange} value={newReadme.gender}/>
        </FormGroup>
        <FormGroup>
          <Label for="gender_pref">Gender Preference</Label>
          <Input type="text" name="gender_preference" onChange={handleChange} value={newReadme.gender_preference}/>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" name="location" onChange={handleChange} value={newReadme.location}/>
        </FormGroup>
        <FormGroup>
          <Label for="language">Preferred Programming Language</Label>
          <Input type="text" name="programming_language" onChange={handleChange} value={newReadme.programming_language}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={newReadme.image}/>
        </FormGroup>
        <FormGroup>
          <Label for="user_id" hidden>
            User Id
          </Label>
          <Input
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={newReadme.user_id = currentUser?.id}
            type="hidden"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Readme
        </Button>
      </Form>
    </div>
  )
}

export default New