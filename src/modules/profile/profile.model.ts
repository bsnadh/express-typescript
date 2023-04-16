import mongoose, { Document } from 'mongoose';

import { IProfile } from './profile.interface';

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    websites: {
        type: [String],
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    bio: {
        type: String,
        require: true,
    },
    experience: [
        {
            title: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
            location: {
                type: String,
            },
            from: {
                type: Date,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
            },
        },
    ],
    education: [
        {
            school: {
                type: String,
                required: true,
            },
            degree: {
                type: String,
                required: true,
            },
            fieldofstudy: {
                type: String,
                required: true,
            },
            from: {
                type: Date,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
            },
        },
    ],
    social: {
        youtube: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    followings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        },
    ],
    followers: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        },
    ],
    friends: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    friend_requests: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model<IProfile & Document>('profile', ProfileSchema);
