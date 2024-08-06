YouTube API:
https://developers.google.com/youtube/v3
https://www.youtube.com/watch?v=zVtS5fBXOa0
https://github.com/googleapis/google-api-nodejs-client/blob/main/samples/youtube/upload.js


curl \
  'https://youtube.googleapis.com/youtube/v3/activities?key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed


curl --request POST \
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"snippet":{"categoryId":"22","description":"Description of uploaded video.","title":"Test video upload."},"status":{"privacyStatus":"private"}}' \
  --compressed
