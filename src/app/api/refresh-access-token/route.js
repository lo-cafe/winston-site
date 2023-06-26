import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  let body = await req.json();
  if (body.refreshToken) {
    try {
      const payloadObj = {
        grant_type: "refresh_token",
        refresh_token: body.refreshToken,
      };
      const payload = Object.keys(payloadObj)
        .map((key) => `${key}=${encodeURIComponent(payloadObj[key])}`)
        .join("&");

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "User-Agent": "ios:lo.cafe.winston:v0.1.0 (by /u/Kinark)",
        },
        data: payload,
        url: "https://www.reddit.com/api/v1/access_token",
        auth: {
          username: process.env.REDDIT_API_USERNAME,
          password: process.env.REDDIT_API_SECRET,
        },
      };

      const { data } = await axios(options);

      return NextResponse.json(
        { token: data.access_token, expires: data.expires_in },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "oops2" }, { status: 403 });
    }
  } else {
    return NextResponse.json({ error: "oops" }, { status: 400 });
  }
}
