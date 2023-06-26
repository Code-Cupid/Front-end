import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; 




const Edit = ({ readmes, updateUser}) => {
  const { id } = useParams()
  let currentUser = readmes?.find((readmes) => readmes.id === +id)

  const [editUser, setEditUser] = useState({
    name: currentUser.name,
    age: currentUser.age,
    gender: currentUser.gender,
    gender_pref: currentUser.gender_pref,
    location: currentUser.location,
    language: currentUser.programming_lang,
    image: currentUser.image
  })
  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value })
  }
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateUser(readmes, readmes.id)
    navigate("/readme/${id}")
  }

  return (
    <div>
      <Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input type="number" name="age" />
  </FormGroup>
  <FormGroup>
    <Label for="gender">Gender</Label>
    <Input type="text" name="gender" />
  </FormGroup>
  <FormGroup>
    <Label for="gender_pref">Gender Preference</Label>
    <Input type="text" name="gender_pref" />
  </FormGroup>
  <FormGroup>
    <Label for="location">Location</Label>
    <Input type="text" name="location" />
  </FormGroup>
  <FormGroup>
    <Label for="language">Preferred Programming Language</Label>
    <Input type="text" name="language" />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image URL</Label>
    <Input type="text" name="image" />
  </FormGroup>
  <Button onClick={handleSubmit} name="submit">
  Submit Updated Cat
  </Button>
</Form>
    </div>
  )
}

export default Edit