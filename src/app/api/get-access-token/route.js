import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  let body = await req.json();
  if (body.code) {
    try {
      const payloadObj = {
        grant_type: "authorization_code",
        code: body.code,
        redirect_uri: "https://app.winston.lo.cafe/auth-success",
      };
      const payload = Object.keys(params)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");


        const options = {
         method: 'POST',
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
         data: payload,
         url: 'https://www.reddit.com/api/v1/access_token',
       }

      const { data } = await axios(options);

      return NextResponse.json(
        { token: data.access_token, refresh: data.refresh_token },
        { status: 200 }
      );
    } catch {
      return NextResponse.json({ error: "oops2" }, { status: 403 });
    }
  } else {
    return NextResponse.json({ error: "oops" }, { status: 400 });
  }
}
