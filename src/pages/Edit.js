import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; 

const Edit = ({ readmes, updateReadme, currentUser }) => {
  const { id } = useParams()
  let currentReadme = readmes?.find((readmes) => readmes.id === +id)

  const [editReadme, setEditReadme] = useState({
    name: currentReadme?.name,
    age: currentReadme?.age,
    gender: currentReadme?.gender,
    gender_preference: currentReadme?.gender_preference,
    location: currentReadme?.location,
    language: currentReadme?.programming_language,
    image: currentReadme?.image,
    user_id: ""
  })
  const handleChange = (e) => {
    setEditReadme({ ...editReadme, [e.target.name]: e.target.value })
  }
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateReadme(editReadme, currentReadme?.id)
    navigate(`/readme/${currentReadme?.id}`)
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={editReadme.name}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" onChange={handleChange} value={editReadme.age}/>
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input type="text" name="gender" onChange={handleChange} value={editReadme.gender}/>
        </FormGroup>
        <FormGroup>
          <Label for="gender_preference">Gender Preference</Label>
          <Input type="text" name="gender_preference" onChange={handleChange} value={editReadme.gender_preference}/>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" name="location" onChange={handleChange} value={editReadme.location}/>
        </FormGroup>
        <FormGroup>
          <Label for="programming_language">Preferred Programming Language</Label>
          <Input type="text" name="programming_language" onChange={handleChange} value={editReadme.programming_language}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={editReadme.image}/>
        </FormGroup>
        <FormGroup>
          <Label for="user_id" hidden>
            User Id
          </Label>
          <Input
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={editReadme.user_id = currentUser?.id}
            type="hidden"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Updated Readme
        </Button>
      </Form>
    </div>
  )
}

export default Edit