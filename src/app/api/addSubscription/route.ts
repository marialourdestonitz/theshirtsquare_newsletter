import { NextApiRequest, NextApiResponse } from 'next';
import SibApiV3Sdk from 'sib-api-v3-typescript';

const handleSubscription = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiInstance = new SibApiV3Sdk.ContactsApi();
  const apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env._API_KEY as string;

  const createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.listIds = [2]; 

  try {
    const response = await apiInstance.createContact(createContact);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message || "There was an error adding the email. Please try again." });
  }
};

export default handleSubscription;
