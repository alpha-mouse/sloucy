// Dynamic config layered over app.json, which stays the place where release fields are edited.
//
// EAS's `development` profile builds a debug variant that pulls the JS bundle from Metro over the network, so it needs INTERNET.
// Release builds are fully offline, so the permission stays blocked everywhere else. EAS_BUILD_PROFILE is set by EAS Build only.
module.exports = ({ config }) => {
  if (process.env.EAS_BUILD_PROFILE === 'development') {
    config.android.blockedPermissions = config.android.blockedPermissions.filter(
      (permission) => permission !== 'INTERNET'
    );
  }
  return config;
};
