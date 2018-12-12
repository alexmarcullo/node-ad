const tenantName    = 'YOUR_TENANT_ID';
const clientID      = 'YOUR_CLIENT_ID';


module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}/v2.0/.well-known/openid-configuration`, 
  clientID: clientID,
  issuer: `https://sts.windows.net/${tenantName}/`
};