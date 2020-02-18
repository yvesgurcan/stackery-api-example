const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const recipeTable = process.env.TABLE_NAME;
exports.handler = async function(event, context) {
  console.log({ event });
  const result = await dynamodb.scan({
    TableName: recipeTable
  }).promise();
  return result;
};
