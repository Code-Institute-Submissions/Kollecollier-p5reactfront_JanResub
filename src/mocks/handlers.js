import { response, rest } from "msw"

const baseURL = "https://p5backend.herokuapp.com"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 12,
            "username": "decation3",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 12,
            "profile_image": "https://res.cloudinary.com/kolle1993/image/upload/v1/media/../default_profile_kccko3"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`,), (req, res, ctx) => {
        return res(ctx.status(200));
    }
];