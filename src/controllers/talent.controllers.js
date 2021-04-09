import setResponse from '../helpers/setResponse'
import Talent from '../models/Talent'
const SQUEMA = Talent

export const getResource = async (req, res) => {
  const { id } = req.params
  SQUEMA.findById(id)
    .then((response) => res.json(setResponse(true, 'GET_RESOURCE', response)))
    .catch((err) => res.json(setResponse(false, 'GET_FAIL', false, err)))
}


/* export const getResources = async (req, res) => {
  SQUEMA.find()
    .then((response) => res.json(setResponse(true, 'GET_RESOURCES', response)))
    .catch((err) => res.json(setResponse(false, 'GET_FAIL', false, err)))
} */

export const getResourcesByQuery = async (req, res) => {
  const { query } = req
  console.log(query)
  SQUEMA.find(query)
    .then((response) => res.json(setResponse(true, 'GET_RESOURCES', response)))
    .catch((err) => res.json(setResponse(false, 'GET_FAIL', false, err)))
}

export const postResource = async (req, res) => {
  const newResources = req.body
  const resource = await SQUEMA(newResources)
  resource
    .save()
    .then((response) => res.json(setResponse(true, 'POST_RESOURCE')))
    .catch((err) => res.json(setResponse(false, 'POST_FAIL', false, err)))
}

export const deleteResource = async (req, res) => {
  const { id } = req.params
  SQUEMA.findByIdAndDelete(id)
    .then((response) => res.json(setResponse(true, 'DEL_RESOURCE')))
    .catch((err) => res.json(setResponse(false, 'DEL_FAIL', false, err)))
}

export const updateResource = async (req, res) => {
  const {
    body,
    params: { id },
  } = req
  SQUEMA.findByIdAndUpdate(id, body, { new: true })
    .then((response) =>
      res.json(setResponse(true, 'PUT_RESOURCE', response))
    )
    .catch((err) => res.json(setResponse(false, 'PUT_FAIL', false, err)))
}
