import {config} from 'dotenv'
import path from 'path'

const ENV = process.env.NODE_ENV

config({path: path.resolve(`.env.${ENV}`)})