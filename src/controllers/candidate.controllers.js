import Candidate from '../models/Candidate'
import setResponse from '../helpers/setResponse'
const SQUEMA = Candidate

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
  SQUEMA.find(query)
    .then((response) => res.json(setResponse(true, 'GET_RESOURCES', response)))
    .catch((err) => res.json(setResponse(false, 'GET_FAIL', false, err)))
}

export const postResource = async (req, res) => {
  const newResources = req.body
  const resource = await SQUEMA(newResources)
  resource
    .save()
    .then((response) => res.json(setResponse(true, 'RESOURCE_CREATED')))
    .catch((err) => res.json(setResponse(false, 'POST_FAIL', false, err)))
}

export const deleteResource = async (req, res) => {
  const { id } = req.params
  SQUEMA.findByIdAndDelete(id)
    .then((response) => res.json(setResponse(true, 'RESOURCE_DELETED')))
    .catch((err) => res.json(setResponse(false, 'DELETE_FAIL', false, err)))
}
