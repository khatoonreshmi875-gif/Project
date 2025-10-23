import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSschema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
        },
        title: {
        type: String,
    required: true,
        },
      description: {
        type: String,
    required: true,
        },
          duration: {
        type: String,
    required: true,
        },
        views: {
            types: Number,
            default:0
        },
        isPublished: {
            type: Boolean,
            default:true,
            
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
        
    
  },
 {timestamps:true}
);
videoSschema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSschema)