# OmegleClone - Open Source Random Video Chat App

OmegleMeet is a real-time video chat app inspired by Omegle. It allows users to connect with strangers for live video calls and text chats.

🔴 **[Live Demo (currently broke)](http://omeglemeet.devrohit.tech/)** - Or checkout demo video below
[![OmegleMeet Demo](https://img.youtube.com/vi/YTGfyUdhu-U/0.jpg)](https://www.youtube.com/watch?v=YTGfyUdhu-U)

## Features

- Random stranger matching
- Real-time video calling with WebRTC
- Text chat alongside video calls
- Camera device switching
- Mobile responsive design
- Company email OTP verification before chat access

## Tech Stack

**Frontend**

- React.js
- Socket.IO Client
- WebRTC

**Backend**

- Express.js
- Socket.IO
- Redis

## Deployment

Deployed on AWS with Nginx serving both frontend and backend.

## How It Works

1. Enter a username to join
2. Get paired with random users
3. Start video call via WebRTC
4. Chat and switch cameras during calls
5. Disconnect and find new partners

## Project Setup

```bash
# Clone repository
git clone [repo-url]

# Setup before running
mv client/env client/.env && mv server/env server/.env && cd client && npm install && cd ../server && npm install

# Update client .env
# VITE_APP_WEBSOCKET_URL=http://localhost:3000
# VITE_APP_BACKEND_URL=http://localhost:3000

# Update server .env (required for OTP emails)
# SMTP_USER=your-gmail@gmail.com
# SMTP_PASS=your-gmail-app-password
# SMTP_FROM=your-gmail@gmail.com

# Start Client
cd client && npm run dev

# Start Server
cd server

## Docker server start
docker-compose up -d (docker setup)

## Manual server start (update .env file redis config)
npm run dev
```

## Email Verification Rules

- Only approved company domains are accepted (generic domains are blocked)
- OTP + tries are stored in Redis per email
- Wrong OTP increments tries
- If tries reach 5, OTP request and verify APIs are blocked for that email

## More Complex Version

Looking for a more advanced version of this app?
Check out SquadX — a much more feature-rich video chat experience:
[https://github.com/rohitsx/SquadX](https://github.com/rohitsx/SquadX)

## Custom Features or Help?

Need something custom-built or want to collaborate?
Feel free to reach out to me at rohitbindw@gmail.com

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Rohit Bind - [me@shivamdixit.engineer](mailto:me@shivamdixit.engineer)

---

Keywords: Professional Socio github, random video chat app, omegle alternative, open source video chat, webrtc video chat, omegle like, Professional Socio, random video chat, omegle alternative, open source omegle, video chat app, random chat application, webrtc video chat, react video chat, omegle like app github, video chat github, Professional Socio github, random video chat open source
