import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
  {
    mainUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      unique: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const Url = mongoose.model('Url', urlSchema)

export default Url
