// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "ee786099c45248c88f595b69e27932c8";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      /*{access_token: "BQDg0s8SxOpOtgZJ5Z7r2F0L8LFUsp1mnt8wm3mLvlzoDwAd3v…p3B7RN7nIrfKkm1XJtB13uZDSD87fGAQa5xa2cYI-ryJNCm6s", token_type: "Bearer", expires_in: "3600"}
      access_token: "BQDg0s8SxOpOtgZJ5Z7r2F0L8LFUsp1mnt8wm3mLvlzoDwAd3vhMDPPh3mZ92cnGnfi6TGagbJ9420RxrCEBsF-pKPwqa2YwJbLRaxLnRzjCfMp3B7RN7nIrfKkm1XJtB13uZDSD87fGAQa5xa2cYI-ryJNCm6s"
      expires_in: "3600"
      token_type: "Bearer"
      */
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;